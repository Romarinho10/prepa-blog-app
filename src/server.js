require('dotenv').config();

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


//getting database
const {mongoose} = require('./database');

//require model
const model = require('./models/aviso');

//settings
app.set('port', process.env.PORT || 3000);

//app.get('/', (req, res) => {
//    res.send('hello world');
//});


//handlebars config
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(require('./routes/index.routes'));


//static files
app.use(express.static(path.join(__dirname, 'public')));



//starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port: ', app.get('port'));
});