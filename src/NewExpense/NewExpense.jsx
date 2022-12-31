import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onExpenseSaveHandler = (expenseData) => {
    const updatedExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(updatedExpenseData);
    props.updateExpenseList(updatedExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave={onExpenseSaveHandler} />
    </div>
  );
};

export default NewExpense;
