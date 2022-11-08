import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item" key={props.id}>
      <ExpenseDate  date={props.date} />
      <li className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </li>
    </Card>
  )
}

export default ExpenseItem;