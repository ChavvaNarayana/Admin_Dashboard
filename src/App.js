import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Home/Dashboard";
import Topbar from "./components/Home/Topbar.jsx";

function App() {
  return (
    <div className="App">
      <main>
        < Topbar />
      </main>

      <Routes>
        <Route path='/' element={ <Dashboard /> } />
      </Routes>

    </div>
  );
}

export default App;
