import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
