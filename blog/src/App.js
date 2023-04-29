import "./App.css";
import NavBar from "./component/NavBar";
import PropEg from "./PropEg";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="App">
      <h1>Hello</h1>
      <NavBar />
      <PropEg name="Sahil" brand={carInfo} />
    </div>
  );
}

export default App;
