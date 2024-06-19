import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";


function App() {
  const [number, setNumber] = useState(0);

  

  return (
      <div className="Background">
        <div className="App">
          <Routes>
            
            <Route path="/" element={<Main/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
