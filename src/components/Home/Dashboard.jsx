import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "./Header.jsx";
import Row1 from "./GRID & CHARTS/Row1/Row1.jsx";
import Row2 from "./GRID & CHARTS/Row2/Row2.jsx";
import Row3 from "./GRID & CHARTS/Row3/Row3.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
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
      <Row2 />
      <Row3 />
    </>
  );
};

export default Dashboard;