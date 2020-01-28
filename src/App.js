import React from "react";
import PizzaList from "./components/PizzaList";
import PizzaDetails from "./components/PizzaDetails";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <PizzaList />
      <PizzaDetails />
    </div>
  );
}

export default App;
