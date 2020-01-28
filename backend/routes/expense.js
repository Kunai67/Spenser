const Express = require('express');
const Router = Express.Router();
const Expense = require('../models/expense.models');

Router.route('/').get((req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/add').post((req, res) => {
    const newExpense = new Expense({
        name: req.body.name,
        cost: req.body.cost,
        tags: req.body.tags
    });

    newExpense.save()
        .then(() => res.json('Expense Added Succesfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;