import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2020);
  const onChangeFilter = (selectedYear) => { 
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={onChangeFilter} />
        {
        props.items.filter(item => {
          const itemYear = item.date.getFullYear();
          return itemYear.toString() === filterYear;
        })
            .map(e => {
          return <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        })
      }</Card>
    </div>

  )
  //props.items.forEach()
}

export default Expenses;