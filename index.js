const express = require('express');
const app = express();
const port=3000;
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sample App</title>
      </head>
      <body>
        <h1>Hello Aruna Ma'am!</h1>
        <p>This is a very simple HTML page .</p>
      </body>
    </html>
  `);
});
app.listen(3000,'0.0.0.0' ,() => {
  console.log(`Server running at http://localhost:${port}`);
});
