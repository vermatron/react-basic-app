import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");

  const onFilterSelectedHandler = (filterSelectionValue) => {
    setFilterValue(filterSelectionValue);
    console.log(filterSelectionValue);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterValue}
        onFilterSelected={onFilterSelectedHandler}
      ></ExpenseFilter>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
