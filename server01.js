'use strict';

const {createServer}= require('http');
const server = createServer();
const { createReadStream } = require('fs');


server.on('request',(req,res)=>{
  const stream = createReadStream('index.html')
  stream
  .on('error',(err)=>{
    res.end(error);
  })
  .on('open',()=>{
    stream.pipe(res)
  })

});
server.listen(8080)
