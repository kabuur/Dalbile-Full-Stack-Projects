const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url == '/') {
        response.end("this is home page");
        return
    }
    if (request.url == '/about') {
        response.end("this is about page");
        return
    }
    if (request.url == '/contact') {
        response.end("this is contact page");
        return
    }
    return

});

server.listen(1000 , ()=>{
    console.log('Server is running on port  http://localhost:1000');
});