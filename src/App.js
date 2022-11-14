import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Login from "./components/Login";
import Detail from "./components/Detail";

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
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/" element={<Login isLoginShow={login}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
