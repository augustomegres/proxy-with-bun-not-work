const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const proxy = createProxyMiddleware({
  target: 'http://localhost:3000',
  ws: true,
  logLevel: 'debug'
});

app.use('/', proxy);

const server = app.listen(8080, () => {
  console.log('Proxy server is running on port 8080');
});

server.on('upgrade', proxy.upgrade);
