import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';


const NewExpnese = (props) => {
  const saveExpenseDataHandler = (enterExpenseDta) => {
    const expenseData = {
      ...enterExpenseDta,
      id: Math.random().toString()
    }
    props.onAddExpenses(expenseData);
  }
  return (
      <div className="new-expense"> 
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </div>
  );
};

export default NewExpnese;