const express = require('express');
const morgan = require("morgan")
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const ip = process.env.IP || 'localhost';


 app.use('/', express.static(path.join(__dirname, './../client/dist')))
 app.use('/products/:product_id', express.static(path.join(__dirname, './../client/dist/index.html')));
 app.get('*', (req, res) => {
  console.log('ok');
   res.sendFile(path.join(__dirname, './../client/dist/index.html'));
 });
 



 app.listen(port, () => {
  console.log(`Starting Proxy at ${port}`);
  console.log('hello');
});