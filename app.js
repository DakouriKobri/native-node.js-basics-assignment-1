// NPM Packages
const http = require('node:http');

// Project Imports
const routes = require('./routes');

const server = http.createServer(routes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
