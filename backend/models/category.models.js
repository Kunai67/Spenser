// Defines a model for Category

let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    name: String,
});

let Category = new mongoose.model('Category', categorySchema);

module.exports = Category;