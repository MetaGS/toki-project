import React from "react";
import { Counter } from "./features/counter/Counter";
import KatalCalculator from "./pages/KatalCalculator";

function App() {
  console.log("run");
  return (
    <div className="App">
      <KatalCalculator />
    </div>
  );
}

export default App;
