import React, { useState } from 'react';
import { Title, StyledInput, Button } from '../../styled-components';
import { useHistory } from 'react-router-dom';

const AddExpense = ({ type }) => {
    const history = useHistory()
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = () => {
        if (!title) alert('Title is required')
        else if (!amount) alert('Amount is required')
        else {
            const newTransaction = {
                title, amount, date: getCurrentTime(), type
            }

            if (localStorage.getItem("transactions")) {
                let transactions = JSON.parse(localStorage.getItem("transactions"))
                transactions = [...transactions, newTransaction]
                localStorage.setItem("transactions", JSON.stringify(transactions))
            }
            else localStorage.setItem("transactions", JSON.stringify([newTransaction]))

            // setTitle(''); setAmount('')
            alert('Expense Added Successfully')
            history.push('/')
        }
    }

    return (
        <div style={containerStyle}>
            <Title>Add New Expense</Title>
            <div>
                <Title>Add Title</Title>
                <StyledInput
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                />
            </div>
            <div>
                <Title>Add Amount</Title>
                <StyledInput type="number" min="0"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    placeholder="Amount in $"
                />
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
    alignItems: 'center',
    maxWidth: '500px',
    width: '100%'
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