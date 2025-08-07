const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sample App</title>
      </head>
      <body>
        <h1>Hello!</h1>
        <p>This is a simple HTML page .</p>
      </body>
    </html>
  `);
});
app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});