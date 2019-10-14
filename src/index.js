const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const express_handlebars = require('express-handlebars');
const port = process.env.PORT || 3000;

const routes = require('./routes/router');

const app = express();

app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', express_handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/',
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.listen(port, function () {
    console.log('Editor Running on Port 3000');
});
