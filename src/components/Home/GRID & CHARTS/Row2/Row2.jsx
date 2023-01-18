import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../../Charts/LineChart.jsx";



function Row2() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {/* ROW 2 */}

      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor="#44adaa"
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color="#44adaa">
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#44adaa"
            >
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: "#44adaa" }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <LineChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="#44adaa"
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid "#44adaa"`}
          colors="#44adaa"
          p="15px"
        >
          <Typography color="#44adaa" variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid "#44adaa"`}
            p="15px"
          >
            <Box>
              <Typography
                color="#44adaa"
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color="#44adaa">
                {transaction.user}
              </Typography>
            </Box>
            <Box color="#44adaa">{transaction.date}</Box>
            <Box
              backgroundColor="#44adaa"
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Row2;
