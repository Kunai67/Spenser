let mongoose = require('mongoose');

let expenseSchema = new mongoose.Schema({
    name: String,
    cost: { 
        type: mongoose.Decimal128,
        required: true, 
    },
    tags: [ String ]
}, { timestamps: true });

let Expense = new mongoose.model('Expense', expenseSchema);

module.exports = Expense;