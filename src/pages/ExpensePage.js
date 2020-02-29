import React from 'react';
import { ExpenseForm, ExpenseList } from "../components/expense/expense.export";

export default function ExpensePage() {
    return (
        <div>
            <h2>Add New Expense</h2>
            <ExpenseForm/>
            <ExpenseList onMountURL="http://localhost:5000/expenses/"/>
        </div>
    )
}
