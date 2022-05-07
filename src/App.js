import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

 
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 16),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 14),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpensesHandler = (expense) => {
    setExpenses(preExpenses => {
      return [expense, ...preExpenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses expenses={expenses}> </Expenses>
    </div>
  );
};

export default App;
