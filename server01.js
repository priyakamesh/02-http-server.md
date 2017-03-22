'use strict';

const http= require('http');
const server = http.createServer();
const { createReadStream } = require('fs');
const stream = createReadStream('index.html')
server.on('request',(req,res)=>{
  stream.pipe(res)
});
server.listen(8080)
