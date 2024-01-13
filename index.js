
// create a simple server in nodejs

// import http module
const http = require('node:http');
const path = require("path");
const fs = require("fs");
const os = require("os");
const hostname = '127.0.0.1';
const port = 8900;

// create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('My Name is Olumide Adenigba');
    res.end();
  });

server.listen(8900, '127.0.0.1', null, null, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});