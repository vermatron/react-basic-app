import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle("test Title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div
          style={{ padding: "5px", backgroundColor: "grey" }}
          onClick={changeTitle}
        >
          Click here
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
