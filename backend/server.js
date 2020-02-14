var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

app.use(cors());
// app.use(express.static(path.join(__dirname, './uploaded')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/authen/', require('./api_authen'));
app.use('/api/v1/stock/', require('./api_stock'));

app.listen(8081, () => {
  console.log('Server start at port : 8081');
});
