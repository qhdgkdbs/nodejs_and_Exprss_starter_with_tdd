const express = require('express');
const morgan = require('morgan')
const app = express();

logger = (res, req, next) => {
    console.log('i am logger');
    next();
}

logger2 = (res, req, next) => {
    console.log('i am logger2');
    next();
}

app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, () => {
    console.log('Server is Running');
})