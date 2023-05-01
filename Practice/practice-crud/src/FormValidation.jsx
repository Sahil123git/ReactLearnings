import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const resultData = document.querySelector(".result");

  const validateForm = () => {
    if (name.length < 3 || password.length < 3) {
      return "Name and password must be at least 3 characters long";
    } else {
      return "Everything seems correct";
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(name, password);
    let response = validateForm();

    resultData.innerHTML = response;
  }
  return (
    <div className="form-validation">
      <br />
      <h1>FormValidation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h4 className="result">Once Submit to see the results</h4>
    </div>
  );
};

export default FormValidation;
