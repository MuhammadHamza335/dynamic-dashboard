"use client";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const { value } = props;

  // Calculate the color based on the completion value
  const getColor = (value: number) => {
    if (value === 0) {
      return "rgba(127, 0, 0, 0.1)"; // Gray for 0% completion
    }
    return "primary.main"; // Use the primary color for completion
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={90}
        thickness={5}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={90}
        thickness={7}
        sx={{
          color: "rgba(127,, 0, 0.1)",
          position: "absolute",
          left: 0,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.primary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = useState(20);

  return <CircularProgressWithLabel value={progress} />;
}
