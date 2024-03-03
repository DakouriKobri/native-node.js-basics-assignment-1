function requestHandler(req, res) {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
    <title>New User Form</title>
    </head>

    <body>
      <h2>New User Form</h2>
      <form action="/create-user" method="POST">
        <label for="username">User Name</label>
        <input id="username" name="username" type="text">

        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
    `);
    res.end();
  } else if (url === '/create-user') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
    <title>User Created</title>
    </head>
    <body>
      <h2>User created!</h2>
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
