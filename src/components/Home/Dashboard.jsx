import React from "react";
import { Box, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "./Header.jsx";
import Row1 from "./GRID & CHARTS/Row1/Row1.jsx";
import Row2 from "./GRID & CHARTS/Row2/Row2.jsx";

const Dashboard = () => {
  return (
    <>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Chavva" subtitle="Welcome to your dashboard" />

          <Box>
            <Button
              sx={{
                backgroundColor: "#6f6fa6",
                color: "#4e4e52",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>
      </Box>
      <Row1 />
      {/* <Row2 /> */}
    </>
  );
};

export default Dashboard;
