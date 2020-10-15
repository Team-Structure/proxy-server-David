const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const ip = "localhost";
app.use(morgan('dev'));

app.get('/product', (req, res) => {
    res.send('This is a proxy service which proxies to Product Information Services API');
 });

const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";


app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: '',
    },
 }));

 app.listen(port, ip, () => {
    console.log(`Starting Proxy at ${ip}:${port}`);
 });