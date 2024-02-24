const http = require('http');

const server = http.createServer((req,res)=>{
        // console.log(req);
        if(req.url === '/'){
            res.end("This is a home page");
        }
        if(req.url === '/about'){
            res.end("This is about page !");
        }

         res.end("OOps You got lost ");
    }
);
server.listen(3393);
