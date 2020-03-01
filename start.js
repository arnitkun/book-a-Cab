const express = require('express');
const {paymentHandler} = require('./routes/payment');
const path = require('path')
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/payment', paymentHandler);

// create todo
app.use('/', function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//get todo

// do

// app.use('/', todoHandler);

// app.use()

app.listen(3000, () => {
    console.log("Listening at 3000");
})