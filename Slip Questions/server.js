const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body
    res.end('Hello, World!\n');
});

const port = 3331;

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
