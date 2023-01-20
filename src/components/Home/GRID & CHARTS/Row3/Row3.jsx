import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme.js";
import GeographyChart from "../../../Charts/GeographyChart.jsx";
import ProgressCircle from "../../../Charts/ProgressCircle.jsx";
import BarChart from "../../../Charts/BarChart.jsx";

const Row3 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Row3;
