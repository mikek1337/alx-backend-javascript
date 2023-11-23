const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(404).send();
  }
});

app.listen(7865, "localhost", () => {
  console.log("API available on localhost port 7865");
});

module.exports = app;
