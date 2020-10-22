const express = require('express');
const morgan = require("morgan")
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const ip = "localhost";
app.use(morgan('dev'));

 app.use('/', express.static(path.join(__dirname, './../client/dist')))
 app.use('/products/:product_id', express.static(path.join(__dirname, './../client/dist/index.html')));
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './../client/dist/index.html'));
 });
 

 app.listen(port, ip, () => {
    console.log(`Starting Proxy at ${ip}:${port}`);
 });

