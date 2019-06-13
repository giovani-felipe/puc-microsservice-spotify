const api = require('./src');
const http = require('http');
const PORT = process.env.PORT;

http.createServer(api).listen(PORT||3001,()=>{
  console.log("Start %s", new Date().toLocaleString());
})
