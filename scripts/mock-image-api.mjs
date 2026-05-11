import http from 'node:http'

const port = Number(process.env.MOCK_IMAGE_API_PORT || 8787)
const host = process.env.MOCK_IMAGE_API_HOST || '127.0.0.1'
const defaultMode = process.env.MOCK_IMAGE_API_MODE || 'url-cors-block'

const tinyPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII='
const tinyPng = Buffer.from(tinyPngBase64, 'base64')

const pathModes = new Set([
  'api-no-cors',
  'b64',
  'empty',
  'http-error',
  'invalid-json',
  'no-recognizable',
  'slow',
  'url-404',
  'url-cors-block',
  'url-ok',
  'url-redirect-cors-block',
  'wrong-shape',
])

function appendCors(headers, enabled = true) {
  if (!enabled) return headers
  return {
    ...headers,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  }
}

function send(res, status, headers, body) {
  res.writeHead(status, headers)
  res.end(body)
}

function sendJson(res, status, payload, options = {}) {
  const body = JSON.stringify(payload, null, options.pretty ? 2 : 0)
  send(res, status, appendCors({ 'Content-Type': 'application/json; charset=utf-8' }, options.cors !== false), body)
}

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      const text = Buffer.concat(chunks).toString('utf8')
      if (!text) {
        resolve({ text: '', json: null })
        return
      }
      try {
        resolve({ text, json: JSON.parse(text) })
      } catch {
        resolve({ text, json: null })
      }
    })
    req.on('error', () => resolve({ text: '', json: null }))
  })
}

function getMode(url, body) {
  const queryMode = url.searchParams.get('mode')
  if (queryMode) return queryMode

  const firstSegment = url.pathname.split('/').filter(Boolean)[0]
  if (pathModes.has(firstSegment)) return firstSegment

  if (body && typeof body === 'object') {
    if (typeof body.mode === 'string' && body.mode.trim()) return body.mode.trim()
    if (typeof body.model === 'string') {
      const match = body.model.match(/^mock:(.+)$/)
      if (match) return match[1]
    }
  }

  return defaultMode
}

function getRequestedN(url, body) {
  const raw = url.searchParams.get('n') ?? (body && typeof body === 'object' ? body.n : undefined)
  const n = Number(raw)
  return Number.isFinite(n) ? Math.max(1, Math.min(10, Math.floor(n))) : 1
}

function getBaseUrl(req) {
  return `http://${req.headers.host || `${host}:${port}`}`
}

function getImageUrl(req, cors, index = 0) {
  return `${getBaseUrl(req)}/images/mock.png?cors=${cors ? '1' : '0'}&i=${index}&t=${Date.now()}`
}

function createRandomShape(req, cors, index = 0) {
  return {
    status: 'success',
    data: {
      id: 42 + index,
      name: `example-${index + 1}.jpg`,
      url: getImageUrl(req, cors, index),
      width: 1920,
      height: 1080,
      mime: 'image/png',
    },
  }
}

function createOpenAIResponse(req, mode, n = 1) {
  const created = Math.floor(Date.now() / 1000)

  if (mode === 'b64') {
    return {
      created,
      data: Array.from({ length: n }, (_, i) => ({ b64_json: tinyPngBase64, revised_prompt: `mock b64 image ${i + 1}` })),
    }
  }

  if (mode === 'empty') return { created, data: [] }
  if (mode === 'wrong-shape') return createRandomShape(req, false)
  if (mode === 'no-recognizable') return { created, data: Array.from({ length: n }, (_, i) => ({ id: 42 + i, name: `example-${i + 1}.jpg`, mime: 'image/png' })) }

  if (mode === 'url-404') {
    return { created, data: Array.from({ length: n }, (_, i) => ({ url: `${getBaseUrl(req)}/images/missing.png?cors=1&i=${i}` })) }
  }

  if (mode === 'url-redirect-cors-block') {
    return { created, data: Array.from({ length: n }, (_, i) => ({ url: `${getBaseUrl(req)}/images/redirect?cors=0&i=${i}` })) }
  }

  return {
    created,
    data: Array.from({ length: n }, (_, i) => ({ url: getImageUrl(req, mode === 'url-ok', i), revised_prompt: `mock ${mode} ${i + 1}` })),
  }
}

function isOpenAIImagesPath(pathname) {
  return pathname.endsWith('/v1/images/generations') || pathname.endsWith('/v1/images/edits')
}

function isCustomPath(pathname) {
  return pathname === '/custom/random-image' || pathname === '/custom/generate'
}

async function handleApi(req, res, url) {
  const body = req.method === 'GET' ? { json: null } : await readBody(req)
  const mode = getMode(url, body.json)
  const n = getRequestedN(url, body.json)

  if (mode === 'slow') {
    const delayMs = Math.max(1, Number(url.searchParams.get('delayMs') || 15000))
    await new Promise((resolve) => setTimeout(resolve, delayMs))
  }

  if (mode === 'api-no-cors') {
    sendJson(res, 200, createOpenAIResponse(req, 'url-ok', n), { cors: false })
    return
  }

  if (mode === 'http-error') {
    sendJson(res, 500, { error: { message: 'Mock HTTP failure from local test API' } })
    return
  }

  if (mode === 'invalid-json') {
    send(res, 200, appendCors({ 'Content-Type': 'application/json; charset=utf-8' }), '{ invalid json')
    return
  }

  sendJson(res, 200, createOpenAIResponse(req, mode, n))
}

async function handleCustom(req, res, url) {
  const body = req.method === 'GET' ? { json: null } : await readBody(req)
  const mode = getMode(url, body.json)
  const n = getRequestedN(url, body.json)

  if (mode === 'http-error') {
    sendJson(res, 500, { error: { message: 'Mock custom provider failure' } })
    return
  }

  if (mode === 'empty' || mode === 'no-recognizable') {
    sendJson(res, 200, { status: 'success', data: { id: 42, name: 'example.jpg', mime: 'image/png' } })
    return
  }

  if (n > 1) {
    sendJson(res, 200, {
      status: 'success',
      data: {
        images: Array.from({ length: n }, (_, i) => createRandomShape(req, mode === 'url-ok' || mode === 'b64', i).data),
      },
    })
    return
  }

  sendJson(res, 200, createRandomShape(req, mode === 'url-ok' || mode === 'b64'))
}

function handleImage(req, res, url) {
  const cors = url.searchParams.get('cors') === '1'
  const headers = appendCors({
    'Cache-Control': 'no-store',
    'Content-Type': 'image/png',
    'Content-Length': String(tinyPng.length),
  }, cors)

  if (url.pathname === '/images/redirect') {
    send(res, 302, appendCors({ Location: `/images/mock.png?cors=${cors ? '1' : '0'}` }, cors), '')
    return
  }

  if (url.pathname === '/images/missing.png') {
    send(res, 404, appendCors({ 'Content-Type': 'text/plain; charset=utf-8' }, cors), 'mock image missing')
    return
  }

  if (req.method === 'HEAD') {
    send(res, 200, headers, '')
    return
  }

  send(res, 200, headers, tinyPng)
}

function handleIndex(req, res) {
  sendJson(res, 200, {
    name: 'gpt-image-2 mock image API',
    openaiCompatibleBaseUrls: [
      `${getBaseUrl(req)}/url-cors-block`,
      `${getBaseUrl(req)}/url-ok`,
      `${getBaseUrl(req)}/b64`,
      `${getBaseUrl(req)}/wrong-shape`,
      `${getBaseUrl(req)}/api-no-cors`,
    ],
    customEndpoint: `${getBaseUrl(req)}/custom/random-image`,
    modes: [...pathModes].sort(),
  }, { pretty: true })
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', getBaseUrl(req))
  const mode = getMode(url, null)
  const allowCors = mode !== 'api-no-cors' && !url.pathname.startsWith('/images/')

  if (req.method === 'OPTIONS') {
    send(res, 204, appendCors({}, allowCors), '')
    return
  }

  try {
    if (isOpenAIImagesPath(url.pathname)) {
      await handleApi(req, res, url)
      return
    }

    if (isCustomPath(url.pathname)) {
      await handleCustom(req, res, url)
      return
    }

    if (url.pathname.startsWith('/images/')) {
      handleImage(req, res, url)
      return
    }

    handleIndex(req, res)
  } catch (err) {
    sendJson(res, 500, { error: { message: err instanceof Error ? err.message : String(err) } })
  }
})

server.listen(port, host, () => {
  console.log(`Mock image API listening at http://${host}:${port}`)
  console.log(`OpenAI-compatible CORS image failure: http://${host}:${port}/url-cors-block`)
  console.log(`Custom non-OpenAI JSON endpoint: http://${host}:${port}/custom/random-image`)
})
