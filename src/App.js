import Expense from "./components/Expense";

function App() {
  const expenseItems = [
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
      id: "id1",
      title: "Health insurance",
      amount: 4150.0,
      date: new Date(2022, 3, 23),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenseItems} />
    </div>
  );
}

export default App;
