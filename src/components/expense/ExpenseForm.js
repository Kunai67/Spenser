import React, { Component } from 'react';
import AddCategoryModal from '../category/AddCategoryModal';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             date: new Date(),
             tags: [],
             cost: 0
        }

        this.submitExpense = this.submitExpense.bind(this);
        this.onChange = this.onChange.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    submitExpense(e) {
        e.preventDefault();
        fetch('http://localhost:5000/expenses/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then((data) => {
        alert('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
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
                <AddCategoryModal setCategory={this.changeCategory}/>
                <button onClick={this.submitExpense}>Submit</button>
            </form>
        )
    }
}
