import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const onChangeFilter = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={onChangeFilter}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        </Card>
    </div>
  );
}

export default Expenses;