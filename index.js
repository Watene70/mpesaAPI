const express = require('express'),
  // const axios = require('axios')
  app = express(),
  port = process.env.PORT || 1433,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const customer = require('./routes/custRouter');
app.use("/customer", customer);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "GET, POST, OPTIONS, PUT, DELETE");

  next();

});
// routes(app);
app.listen(port);
console.log("connected");

module.exports = app;