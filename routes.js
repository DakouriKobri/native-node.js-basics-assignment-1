function requestHandler(req, res) {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
    <title>Greetings</title>
    </head>
    <body>
      <h1>Hello, from Native Node.js server!</h1>
    </body>
    </html>
    `);
    res.end();
  } else if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
    <title>Users</title>
    </head>
    <body>
      <h1>Users</h1>
      <ul>
        <li>Djahi Zahdih</li>
        <li>Aya Kanh</li>
        <li>Bi Gonney</li>
      </ul>
    </body>
    </html>
    `);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
    <title>Not Found</title>
    </head>
    <body>
      <h2>Resource not found</h2>
    </body>
    </html>
    `);
    res.end();
  }
}

module.exports = requestHandler;
