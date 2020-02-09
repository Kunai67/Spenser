import React, { Component } from 'react'
import axios from 'axios';

export default class AddCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    } 
    
    onSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/category/add', this.state)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.onChange(e)} type="text"/>
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}

