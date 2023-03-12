const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    res.end('Welcome to our home page')
    
    if(req.url==='/about')
    res.end('Here is the short story');

    res.end(`
        <h1>OOPS!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">homepage</a>  <a href="/about">about</a>`
    )
})
 

server.listen(5000)