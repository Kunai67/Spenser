import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledTable = styled.table`
    border: 1px solid #0b4f6c;
    border-radius: 10px;
    border-spacing: 0;
    text-align: center;
    width: 80%;
    margin: 1rem auto;
    overflow: hidden;

    & tr:last-child td {
        border: 0;
    }
`;

const StyledHeadingRow = styled.tr`
    background: #0b4f6c;
`;

const StyledHeadingCell = styled.th`
    color: #FBFBFF;
    font-family: 'Roboto';
    font-weight: 700;
    letter-spacing: 1.1px;
    padding: 1rem;
`;

const StyledCell = styled.td`
    color: #333;
    font-family: 'Roboto Condensed';
    padding: .5rem;
    border-bottom: 1px solid #0b4f6c;
`;

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
                <StyledTable>
                    <thead>
                        <StyledHeadingRow> 
                            <StyledHeadingCell>Name</StyledHeadingCell>
                            <StyledHeadingCell>Cost</StyledHeadingCell>
                            <StyledHeadingCell>Delete</StyledHeadingCell>
                        </StyledHeadingRow>
                    </thead>
                    <tbody>
                        { this.state.expenses.map(val => 
                            <tr key={val._id}>
                                <StyledCell>{val.name}</StyledCell>
                                <StyledCell>{val.cost.$numberDecimal}</StyledCell>
                                <StyledCell><button onClick={() => this.deleteById(val._id)}>X</button></StyledCell>
                            </tr>
                        ) }
                    </tbody>
                </StyledTable>
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
