const Express = require('express');
const Router = Express.Router();
const Expense = require('../models/expense.models');

Router.route('/').get((req, res) => {
    Expense.find()
        .then(expense => res.json(expense))
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

Router.route('/:id').delete((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
      .then(() => res.json('Expense deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
Router.route('/update/:id').post((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => {
        expense.name = req.body.name;
        expense.cost = req.body.cost;
        expense.tags = req.body.tags;

        expense.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;