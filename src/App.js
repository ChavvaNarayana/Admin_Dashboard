import { React, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Global/Topbar";
import Sidebar from "./components/Global/Topbar";
import Dashboard from "./components/Home/Dashboard";
import Team from "./components/Data/Team";
import Contacts from "./components/Data/Contact";
import Invoices from "./components/Data/Invoice";
import Form from "./components/Pages/Form";
import FAQ from "./components/Pages/FAQ";
import Calendar from "./components/Pages/Calendar";
import Bar from "./components/Charts/BarChart";
import Pie from "./components/Charts/BarChart";
import Line from "./components/Charts/BarChart";
import Geography from "./components/Charts/GeographyChart";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
