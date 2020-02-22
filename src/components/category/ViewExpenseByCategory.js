import React from 'react';
import ExpenseList from '../expense/ExpenseList';

export default function ViewExpenseByCategory(props) {
    return (
        <div>
            <ExpenseList onMountURL={`http://localhost:5000/expenses/tags/${props.tagName}`}/>
        </div>
    )
}