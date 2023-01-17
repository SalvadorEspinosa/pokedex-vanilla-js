const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());
app.use(express.static('website'));

app.listen(8081, function () {

  console.log('Pokedex running on port 8081!');

});