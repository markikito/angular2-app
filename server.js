const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

// serve static contents
app.use(express.static('dist'));

// proxy api request
app.all("/api/*", (req, res) => {
  apiProxy.web(req, res, {
    target: 'http://localhost:8080' || process.env.BACK_URL
  });
});

// fallback to index.html for SPA.
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(4200,"0.0.0.0", function() {
  console.log('Listening on port %d', server.address().port);
});

console.log("server is running on http://localhost:3000");
