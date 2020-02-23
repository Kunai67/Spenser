require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.DB_PORT || 27017;
const serverPort = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());

mongoose.connect(`mongodb://localhost:${port}/expense-db`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('error', (err) => console.log(err));
conn.once('open', function() {
    console.log('Connected to Database');
});

const expenseRouter = require('./routes/expense');
const categoryRouter = require('./routes/category');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${process.env.APP_PORT || 3000}`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/expenses', expenseRouter);
app.use('/category', categoryRouter);

app.listen(serverPort, () => `Listening on port: ${serverPort}`);