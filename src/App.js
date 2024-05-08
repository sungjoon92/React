import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/about">About | </Link>
        <Link to="/Counter">Counter | </Link>
        <Link to="/input">Input | </Link>
        <Link to="/input2">Input2 | </Link>
        <Link to="/List">List</Link>

        {/* Link는 <a href=""></a>와 같음  */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/List" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
