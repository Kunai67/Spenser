const express = require('express');
const mongoose = require('mongoose');

const port = 27017;

const app = express();
app.use(express.json());

mongoose.connect(`mongodb://localhost:${port}/expenses-db`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const conn = mongoose.connection;

conn.on('error', (err) => console.log(err));
conn.once('open', function() {
    console.log('Connected to Database');
});

const expenseRouter = require('./routes/expense');
const categoryRouter = require('./routes/category');

app.use('/expenses', expenseRouter);
app.use('/category', categoryRouter);


app.listen(port, () => `Listening on port: ${port}`);