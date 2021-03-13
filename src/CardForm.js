import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import styled from "styled-components";

const Button = styled.button`
  white-space: nowrap;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  background-color: #6772e5;
  transition: all 150ms ease;
  margin-top: 10px;
  transform: translateZ(0);
  &:hover {
    color: #fff;
    background-color: #7795f8;
    transform: translateY(-1px) translateZ(0);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

const Label = styled.label`
  color: #6b7c93;
  font-weight: 300;
  letter-spacing: 0.025em;
  input,
  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    width: min(500px, calc(100vw - 20px));
    padding: 10px 14px;
    font-size: 1rem;
    font-family: "Source Code Pro", monospace;
    box-shadow: rgba(9, 9, 12, 0.149) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
    line-height: 1.2;
    height: calc(1.2rem + 20px);
  }
  input::placeholder {
    color: #aab7c4;
  }
  input::focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    transition: all 150ms ease;
  }
`;

const options = {
  style: {
    base: {
      fontSize: "1.125rem",
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log("[PaymentMethod]", payload);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Card details
        <CardElement
          options={options}
          onReady={() => {
            console.log("CardElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardElement [blur]");
          }}
          onFocus={() => {
            console.log("CardElement [focus]");
          }}
        />
      </Label>
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
};

export default CardForm;
