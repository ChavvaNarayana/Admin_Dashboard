import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "./StatBox";

function Row1() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {/* ROW 1 */}
      <Box
        gridColumn="span 3"
        backgroundColor="#6f6fa6"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={<EmailIcon sx={{ color: "#44adaa", fontSize: "26px" }} />}
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="#44adaa"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.50"
          increase="+21%"
          icon={<PointOfSaleIcon sx={{ color: "#44adaa", fontSize: "26px" }} />}
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="#44adaa"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.30"
          increase="+5%"
          icon={<PersonAddIcon sx={{ color: "#44adaa", fontSize: "26px" }} />}
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="#44adaa"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,325,134"
          subtitle="Traffic Received"
          progress="0.80"
          increase="+43%"
          icon={<TrafficIcon sx={{ color: "#44adaa", fontSize: "26px" }} />}
        />
      </Box>
    </Box>
  );
}

export default Row1;
