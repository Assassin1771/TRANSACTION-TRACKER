import { useState, useEffect } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import Transactions from "./Components/Transactions";
import NewTransaction from "./Components/NewTransaction";

const useStyle = makeStyles({
  header: {
    margin: "10px 0",
    color: "blue",
    fontSize: 36,
    textTransform: "uppercase",
  },
  component: {
    background: "#FFF",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    width: 800,
    "& > *": {
      padding: 10,
      width: "50%",
      height: "70vh",
    },
  },
});

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState(
    () => JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    console.log(transactions);
  };

  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  };

  return (
    <div className="App">
      <Typography className={classes.header}>Transaction Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
