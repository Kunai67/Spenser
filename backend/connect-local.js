let mongoose = require('mongoose');
const Expense = require('./models/expense');

mongoose.connect('mongodb://localhost:27017/expenses-db', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const conn = mongoose.connection;

conn.on('error', (err) => console.log(err));
conn.once('open', function() {
    const newExpense = new Expense({
        name: 'Kwek-kwek',
        cost: 15.0,
        tags: ['necessities', 'food']
    });

    newExpense.save().catch((err) => console.log(err));
});