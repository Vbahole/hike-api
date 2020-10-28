const express = require('express');
const app = express();
const appRoot = require('app-root-path');
const { getStats } = require(`${appRoot}/utils/dynamo-utils`);
const TABLENAME = 'hike';

app.get('/', function(req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
})

app.post('/', function(req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

app.delete('/del_user', function(req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

app.get('/stats', async function(req, res) {
  console.log("Got a GET request for /stats");
  const statResponse = await getStats(TABLENAME);
  console.log('got stats', statResponse);
  res.send(statResponse);
})

app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log(`${appRoot}/utils/dynamo-utils Example app listening at http://${host}:${port}`);
})
