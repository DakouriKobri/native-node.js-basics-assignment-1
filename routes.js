function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  } else if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => body.push(chunk));

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const nonFormattedUsername = parsedBody.split('=')[1];
      const username = nonFormattedUsername.replace(/[^a-zA-Z0-9]/g, ' ');
      const result = username
        ? `username:  ${username}`
        : 'No user created. Please, provide a username.';
      console.log(result);

      res.setHeader('Content-Type', 'text/html');
      res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User ${username ? '' : 'not'} Created</title>
    </head>
    <body>
      <h2> ${
        username
          ? 'User <i>' + username + '</i>'
          : 'Please, provide a username. No user was'
      } created.
    </body>
    </html>
    `);
      res.end();
    });
  } else if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
