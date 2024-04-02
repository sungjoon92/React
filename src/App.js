import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";



function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/input">Input</Link>

        {/* Link는 <a href=""></a>와 같음  */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
      </Routes>
    </div>
  );
}

export default App;
