// server create help of Node js

const http = require("http");

const server = http.createServer((req, res) => {
   res.end("Server created successfully");
});

server.listen(8000, (req,res) => {
   console.log("Server is ready and listening on port 8000");
});




