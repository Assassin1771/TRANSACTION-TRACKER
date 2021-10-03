import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
    },
  },
  button: {
    background: "#445A6F",
    color: "#fff",
  },
});

const NewTransaction = ({ addTransaction }) => {
  const classes = useStyle();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const newTransaction = (e) => {
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(transaction);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        value={text}
        label="Enter Transaction Info."
        onChange={(e) => setText(e.target.value)}
        id="a"
      />
      <TextField
        value={amount}
        label="Enter Transaction Amount with + or -"
        onChange={(e) => setAmount(e.target.value)}
        id="b"
      />
      <Button
        className={classes.button}
        variant="contained"
        onClick={newTransaction}
      >
        Add Transaction
      </Button>
    </Box>
  );
};

export default NewTransaction;
