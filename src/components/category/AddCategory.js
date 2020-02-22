import React, { Component } from 'react'
import axios from 'axios';

export default class AddCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             tags: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category/')
        .then(res => this.setState({ tags: res.data }));
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
                {
                    this.state.tags.map((tag) => 
                        <div key={tag._id}>
                            <a href={`http://localhost:3000/categories/${tag.name}`}>{tag.name}</a>
                        </div>)
                }

                <input onChange={(e) => this.onChange(e)} type="text"/>
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}

