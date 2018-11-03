const express = require('express');
const bodyParser = require("body-parser");

console.log("server connected");


const app = express();

let PORT = process.env.PORT || 1308;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


// ROUTER
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });