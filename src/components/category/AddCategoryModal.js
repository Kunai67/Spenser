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
        // .then(response => this.setState({categories : response.data.category}));
        .then(res => console.log(res.data));
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
                        <fieldset key={category}>
                            <input type="checkbox" value={category} onClick={this.onChange} />{category}
                        </fieldset>)
                    }
                </div>
                <button onClick={ this.onSubmit }>Submit</button>
            </div>
        )
    }
}
