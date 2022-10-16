import { useState } from "react";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const dec = () => {
    setCounter((counter) => counter - 1);
  };

  const inc = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <Header />
      <h2 className="counter">{counter}</h2>
      <button onClick={dec}>Decrement</button>
      <button onClick={inc}>Increment</button>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
