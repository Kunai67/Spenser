import React, { useState } from 'react';

function ExpenseInput(props) {
    
    const [expense, setExpense] = useState(0);

    function submitExpense(e) {
        e.preventDefault();
        // SEND TO DB
    }

    return (
        <div>
            <input type="text" value={expense} onChange={(e) => setExpense(e.target.value)}/>
            <button onClick={submitExpense}>Submit</button>
        </div>
    )
}

export default ExpenseInput;