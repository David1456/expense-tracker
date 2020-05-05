import React from 'react';
import { Title, StyledInput, Button } from '../../styled-components';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const AddExpense = ({ type }) => {

    return <div style={containerStyle}>
        <Title>Add New Expense</Title>
        <div>
            <Title>Add Text</Title>
            <StyledInput />
        </div>
        <div>
            <Title>Add Amount</Title>
            <StyledInput type="number" min="0" />
        </div>
        <Button primary>{`Add ${
            type === 'income' ? 'Income' : 'Spending'
            }`}</Button>
    </div>
}

export default AddExpense;