// const http = require('http');
// const url = require('url');
// const fs = require('fs');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   var q = url.parse(req.url, true);
//   var filename = '.' + q.pathname;
//   if(filename='.'){
//     filename += '/index.html'
//   }
//   fs.readFile(filename, (err, data) => {
//     if(err){
//       res.writeHead(404, {'Content-Type':'text/html'});
//       return res.end('404 Not Found');
//     }
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(data);
//   res.end();
//   });
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)});

const express = require('express');
const url = require('url');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
  var filename = './index.html';
  fs.readFile(filename, (err, data) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

app.listen(port, () => console.log('Listening on port ${port}!'));
