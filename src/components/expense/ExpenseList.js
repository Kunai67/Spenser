import React, { Component } from 'react';
import axios from 'axios';

export default class ExpenseList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             expenses: []
        }

        this.deleteById = this.deleteById.bind(this);
    }
    
    render() {
        return (
            <ul>
                {this.state.expenses.map(val => 
                    <li key={val._id}>{val.name} : {val.cost.$numberDecimal}
                        <button onClick={() => this.deleteById(val._id)}>X</button>
                    </li>
                )}
            </ul>
        )
    }

    componentDidMount() {
        axios.get(this.props.onMountURL)
        .then(res => {
            this.setState({ expenses : res.data });
        });
    }

    deleteById(id) {
        let updatedExpenseArr = this.state.expenses.filter(val => val._id !== id.toString());

        axios.delete(`http://localhost:5000/expenses/${id}`)
        .then(res => {
            console.log(res.data);
            this.setState({ expenses :  updatedExpenseArr});
        });
    }
}
