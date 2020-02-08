import React, { Component } from 'react';
// import AddCategoryModal from '../category/AddCategoryModal';
import axios from 'axios';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             date: new Date(),
             tags: [],
             cost: ""
        }

        this.submitExpense = this.submitExpense.bind(this);
        this.onChange = this.onChange.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    submitExpense(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/expenses/add', this.state)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }

    onChange(e) {
        let obj = this.state;
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    }

    changeCategory(categoryArr) {
        this.setState({tags: categoryArr});
    }
    
    render() {
        return (
            <form>
                <input type="text" placeholder="Expense Name" name="name" value={this.state.name} onChange={this.onChange}/>
                <input type="text" placeholder="Price / Cost" name="cost" value={this.state.cost} onChange={this.onChange}/>
                {/* <AddCategoryModal setCategory={this.changeCategory}/> */}
                <button onClick={this.submitExpense}>Submit</button>
            </form>
        )
    }
}
