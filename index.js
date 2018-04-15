// Primary file for the api

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all request with a string
const server = http.createServer((req, res) => {

  // Get the URL and parse it
  let parsedUrl = url.parse(req.url, true);

  // Get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g,"");

  // Get the path
  const method = req.method.toLowerCase();

  // Send the response
    res.end('hello world\n');

  // Log the request path
  console.log('Request is received on path: ' + trimmedPath + "with method " + method);

})

// Start the server, and have it listen on port 3000
server.listen(3000, () => {
  console.log("The server is listening on port 3000 now")
})
