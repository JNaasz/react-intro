import './ExpenseDate.css';

function ItemDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { year: '2-digit' });

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default ItemDate;
