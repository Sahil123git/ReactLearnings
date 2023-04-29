import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [submit, setSubmit] = useState(true);
  const [index, setIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    //this input is object which is returned by form onClicking submit

    if (submit === false) {
      setSubmit(true);
      tableData[index] = inputs;
      //here we are updating that obj
    } else {
      setTableData([...tableData, inputs]);
      //...tableData is spreading the data
      //will add inputs as a new ele to table array
    }
    setInputs({
      name: "",
      email: "",
    });
  };

  const handleDelete = (index) => {
    const modiData = tableData.filter((item, ind) => ind !== index);
    setTableData(modiData);
  };

  const handleEdit = (index) => {
    let obj = tableData[index];
    setSubmit(false);
    setInputs({ name: obj.name, email: obj.email });
    setIndex(index);
  };
  // console.log(tableData);
  return (
    <div className="App">
      <h1 className="text-center">CRUD</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              name="name"
              value={inputs.name}
              onChange={(e) => {
                setInputs({ ...inputs, name: e.target.value });
                //will create new object that copies all properties of input by using spread operator then update name
              }}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              value={inputs.email}
              onChange={(e) => {
                setInputs({ ...inputs, email: e.target.value });
              }}
            />
          </div>
          <button type="submit">{submit === true ? "Submit" : "Update"}</button>
        </form>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                {/*When there is no key at that time we can use index as unique key */}
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
