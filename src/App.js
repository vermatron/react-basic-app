import React, { useState } from "react";

import NewExpense from "./NewExpense/NewExpense";
import Expense from "./Expense/Expense";

const DUMMY_EXPENSE = [
  {
    id: "id1",
    title: "car insurance",
    amount: 450.0,
    date: new Date(2022, 3, 23),
  },
  {
    id: "id2",
    title: "Home insurance",
    amount: 4520.0,
    date: new Date(2022, 3, 23),
  },
  {
    id: "id3",
    title: "Health insurance",
    amount: 4150.0,
    date: new Date(2022, 3, 23),
  },
];

function App() {
  const [expenses, setExpences] = useState(DUMMY_EXPENSE);

  const updateExpenses = (expense) => {
    setExpences((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense updateExpenseList={updateExpenses} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
