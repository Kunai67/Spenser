const Express = require('express');
const Router = Express.Router();
const Category = require('../models/category.models');
const Expense = require('../models/expense.models');

Router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/add').post((req, res) => {
    const newCategory = new Category({
        name: req.body.name
    })

    newCategory.save()
        .then(() => res.json('Category Added Succesfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/:name').delete((req, res) => {
    Category.deleteOne({ name: req.param.name})
      .then(() => res.json('Category deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// FIX SO THAT IT CAN GET ALL THE EXPENSES ON A CERTAIN CATEGORY
Router.route('/:name').get((req, res) => {
    Expense.find({ tags : req.param.name })
        .then(expense => res.json(expense)) 
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = Router;