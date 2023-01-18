import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Home/Dashboard";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <Dashboard /> } />
      </Routes>

    </div>
  );
}

export default App;
