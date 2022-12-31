import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHAndler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHAndler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHAndler = (event) => {
    setDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onExpenseSave(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHAndler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHAndler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHAndler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitForm}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
