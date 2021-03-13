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
      <div
        style={{
          margin: "0 auto",
          maxWidth: "500px",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "40%",
          }}
        >
          <CardForm />
        </div>
      </div>
    </Elements>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
