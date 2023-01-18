import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  return (
    <Box
      sx={{
        background: "#44adaa",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
