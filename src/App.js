import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Login isLoginShow={login}/>}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
