var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.DEV_PORT || 3000);
