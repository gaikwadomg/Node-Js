const http = require('http');
const port = 5000;

const server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.write('Home page');
    }
    if(req.url === '/about'){
        res.write('About page');
    }
    else{
        res.write(`
        <h1>OOps You Got Lost !</h1>
        `);

    }
    res.end();




}).listen(port);

console.log(`Listening in port ${port}`);