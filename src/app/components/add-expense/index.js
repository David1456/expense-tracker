import React, { useState } from 'react';
import { Title, StyledInput, Button } from '../../styled-components';

const AddExpense = ({ type }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = () => {
        const newTransaction = {
            title, amount, date: getCurrentTime(), type
        }

        if (localStorage.getItem("transactions")) {
            let transactions = JSON.parse(localStorage.getItem("transactions"))
            transactions = [...transactions, newTransaction]
            localStorage.setItem("transactions", JSON.stringify(transactions))
        }
        else localStorage.setItem("transactions", JSON.stringify([newTransaction]))
    }

    return (
        <div style={containerStyle}>
            <Title>Add New Expense</Title>
            <div>
                <Title>Add Title</Title>
                <StyledInput onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <Title>Add Amount</Title>
                <StyledInput type="number" min="0" onChange={(e) => setAmount(e.target.value)} value={amount} />
            </div>
            <Button primary onClick={handleAddExpense}>{`Add ${
                type === 'income' ? 'Income' : 'Spending'
                }`}</Button>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const getCurrentTime = () => {
    const instance = new Date()
    const date = instance.getDate()
    const month = instance.getMonth()
    const year = instance.getFullYear()

    return {
        date, month, year
    }
}
export default AddExpense;