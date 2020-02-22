import React, { Component } from 'react';
import axios from 'axios';

export default class AddCategoryModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories: [],
             categoriesToBeAdded: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {  
        axios.get('http://localhost:5000/category/')
        .then(res => this.setState({categories : res.data}));
    }

    onChange(e) {
        let current = this.state.categoriesToBeAdded;
        current.push(e.target.value);
        this.setState({categoriesToBeAdded: current});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.setCategory(this.state.categoriesToBeAdded);
    }

    render() {
        return (
            <div>
                <p>Add Category</p>
                <div className="categories">
                    {
                        this.state.categories.map((category) => 
                        <fieldset key={category._id}>
                            <input type="checkbox" value={category.name} onClick={this.onChange} />{category.name}
                        </fieldset>)
                    }
                </div>
                <button onClick={ this.onSubmit }>Submit Categories</button>
            </div>
        )
    }
}
