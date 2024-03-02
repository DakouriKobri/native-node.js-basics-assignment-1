const http = require('node:http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Assignment 1: Node.js-Driven Server Basics</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Assignment 1: Node.js-Driven Server Basics</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
