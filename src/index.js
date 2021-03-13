import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./CardForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm />
    </Elements>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
