var connect = require("connect");
var serveStatic = require("serve-static");

connect()
  .use(serveStatic(__dirname))
  .listen(5500, "0.0.0.0", function() {
    console.log("Server running on 8080...");
  });
