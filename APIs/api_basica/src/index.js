//Modules
const express = require('express');
const morgan = require('morgan');


const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));   // dev | combined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
})