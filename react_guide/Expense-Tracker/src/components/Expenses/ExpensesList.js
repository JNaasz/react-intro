import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map(e => {
        return <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      })}
    </ul>
  );
}

export default ExpensesList;