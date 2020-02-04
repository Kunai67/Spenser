import React, { Component } from 'react'

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
        fetch('https://5e21946c6867a0001416f53a.mockapi.io/spenser/api/getCategories',
        {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            this.setState({categories: json.category});
        });
    }

    onChange(e) {
        let current = this.state.categoriesToBeAdded;
        current.push(e.target.value);
        this.setState({categoriesToBeAdded: current});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.setCategory({category: this.state.categoriesToBeAdded});
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
