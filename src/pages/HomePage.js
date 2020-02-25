import React from 'react';
import ExpenseList from '../components/expense/ExpenseList';

export default function HomePage() {
    return (
        <div>
            <h2>Current Expenses</h2>
            <ExpenseList onMountURL='http://localhost:5000/expenses'/>
        </div>
    )
}