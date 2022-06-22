import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";
import { SelectStyles } from "../styles/SelectStyles";
import { FormStyles } from "../styles/ComponentStyles";

export default function Form({ fetchSwitch, setFetchSwitch }) {
  const [state, setState] = useState({
    description: "",
    amount: 0,
    currency: "USD",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      description: state.description,
      amount: state.amount,
      currency: state.currency,
    };
    try {
      if (data.amount === 0 && data.description === "") {
        alert("you must fill every field!");
        return;
      }
      if (data.amount === 0) {
        alert("You must fill the amount!");
        return;
      }
      if (data.description === "") {
        alert("You must fill the description!");
        return;
      }
      const fetchedData = await fetch(`http://localhost:5000/spendings`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const cleanData = await fetchedData.json();
      if (fetchedData.status !== 200) {
        console.log(cleanData);
      }
      setFetchSwitch(!fetchSwitch);
      setState({
        description: "",
        amount: 0,
        currency: "USD",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <FormStyles>
        <InputStyles
          type="text"
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <InputStyles
          type="number"
          placeholder="amount"
          name="amount"
          value={state.amount}
          onChange={handleChange}
        />
        <SelectStyles
          name="currency"
          value={state.currency}
          onChange={handleChange}
        >
          <option value="HUF">HUF</option>
          <option value="USD">USD</option>
        </SelectStyles>
        <InputStyles type="submit" value="Save" onClick={handleSubmit} />
      </FormStyles>
    </>
  );
}
