const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const ip = "localhost";
app.use(morgan('dev'));

const endpoint = '/api/products/:product_id';

const API_PRODUCT_INFO = "http://localhost:3004";
const API_REVIEWS = "http://localhost:3001";
const API_IMAGES= "http://localhost:3003";
const API_SELLER = "http://localhost:3002";


const productInfo = createProxyMiddleware({
    target: API_PRODUCT_INFO + endpoint,
    changeOrigin: true,  
 });

 const reviews = createProxyMiddleware({
    target: API_REVIEWS + endpoint,
    changeOrigin: true,  
 });

 const images = createProxyMiddleware({
    target: API_IMAGES + endpoint,
    changeOrigin: true,  
 });

 const seller = createProxyMiddleware({
    target: API_SELLER + endpoint,
    changeOrigin: true,  
 });

 app.use("/reviews", reviews);
 app.use("/seller", seller);
 app.use("/images", images);
 app.use("/productInfo", productInfo);
 

 app.listen(port, ip, () => {
    console.log(`Starting Proxy at ${ip}:${port}`);
 });

 // pathRewrite: {
//     "/api/products/": '',
// },