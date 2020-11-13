const express = require('express');
const morgan = require("morgan")
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const ip = process.env.IP || 'localhost';


 app.use('/', express.static(path.join(__dirname, './../client/dist')))
 app.use('/products/:product_id', express.static(path.join(__dirname, './../client/dist/index.html')));
//  app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, './../client/dist/index.html'));
//  });
 
 app.use('/test', (req, res) => {
   res.send('hello');
 });

 app.listen(port, () => {
    console.log(`Starting Proxy at ${port}`);
    console.log(process.env.IP);
 });

//  app.listen(port, ip, () => {
//   console.log(`Starting Proxy at ${ip}:${port}`);
//   console.log(process.env.IP);
// });