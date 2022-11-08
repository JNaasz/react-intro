import { useState }  from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [showForm, toggleForm] = useState(false);

  const toggleFormHandler = () => { 
    toggleForm((currentState) => { 
      return !currentState;
    })
  }

  return (
    <div className='new-expense'>
      {
        showForm
          ? <ExpenseForm
            onToggleForm={toggleFormHandler}
            onAddExpense={props.onAddExpense} />
          : <button onClick={toggleForm} >Add New Expense</button>
      }
      
    </div>
  )
}

export default NewExpense;