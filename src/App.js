import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false)

  const handleClickLogin = () => {
    setLogin(!login)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header handleClickLogin={handleClickLogin}/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Login isLoginShow={login}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
