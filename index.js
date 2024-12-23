const http= require("http")
const fs=require('fs')
const url=require("url")
const path=3000
function ContentType(request,response) {
  response.writeHead(200, {'Content-Type': 'text/JSON'});
  response.write('Hello World!\n');
  response.write('Hello World!\n');
  response.write('Hello World!\n');
  response.write('Hello dosto\n');
  response.write('kya ha hai\n');
  response.write('aur batao\n');
  response.write('Sab badhiya\n');
  response.end()
  
}
const server=http.createServer(ContentType)
server.listen(path,()=>(console.log("Servar started")))


function main(req,res){
  if(req.url==='/favicon.ico') return res.end()
  const myURL=url.parse(req.url,true)
  console.log(myURL)
  let log=`${Date.now().toString()}:${req.url}  New Request Resived\n`
  fs.appendFile('./log.txt',log,function(err){
    res.end("Home Server is throw")
  })
  switch (myURL.pathname) {
    case "/":
      res.end("Home Page")
      break;
    case "/about":
      res.end("This is Rohit")
      break;
    case "/contect":
      res.end("9027737557")
      break;
    case "/search":
      const username=myURL.query.name
      res.end(`hi my name is ${username}`)
      break;
  
    default:
      res.end("404,Page not fount")
      // res.writeHead(200,{'content-type':"text/html"})
      // res.write(req.url)
      // res.end()
      // break;
  }
}
const server2=http.createServer(main)
// server2.listen(path,()=>(console.log("Servar started")))






