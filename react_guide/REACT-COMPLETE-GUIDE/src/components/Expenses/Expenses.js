import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">{
      props.items.map(e => {
        return <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      })
    }</Card>

  )
  //props.items.forEach()
}

export default Expenses;