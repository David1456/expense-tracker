import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddExpense from '../../components/add-expense'

const Add = () => {
    const params = useParams();
    const { type } = params;

    return (
        <AddExpense type={type} />
    );
}

export default Add;