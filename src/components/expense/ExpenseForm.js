import React, { Component } from 'react';
import AddCategoryModal from './category/AddCategoryModal';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             date: new Date(),
             category: [],
             cost: 0
        }

        this.submitExpense = this.submitExpense.bind(this);
        this.onChange = this.onChange.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    submitExpense(e) {
        e.preventDefault();
        // AJAX Code to Send to DB
        console.log(this.state);
    }

    onChange(e) {
        let obj = this.state;
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    changeCategory(categoryArr) {
        this.setState({category: categoryArr});
    }
    
    render() {
        return (
            <form>
                <input type="text" placeholder="Expense Name" name="name" value={this.state.name} onChange={this.onChange}/>
                <input type="text" placeholder="Price / Cost" name="cost" value={this.state.cost} onChange={this.onChange}/>
                <AddCategoryModal setCategory={this.changeCategory}/>
                <button onClick={this.submitExpense}>Submit</button>
            </form>
        )
    }
}
