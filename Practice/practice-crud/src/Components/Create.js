import { useState } from "react";
import axios from "axios";
import { form } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = async (event) => {
    console.log(name, email);
    event.preventDefault();
    await axios.post(
      "https://6420357482bea25f6dfc268e.mockapi.io/CRUD-practice",
      {
        name: name,
        email: email,
        header,
      }
    );
  };
  return (
    <div>
      <form className="container">
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
