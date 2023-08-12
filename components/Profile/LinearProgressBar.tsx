"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface LinearProgressBarProps {
  curretValue?: number;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  curretValue,
}) => {
  return (
    <div className="flex mt-2 items-center space-x-1">
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={curretValue ? curretValue : 50}
        />
      </Box>
      <p> {curretValue}%</p>
    </div>
  );
};

export default LinearProgressBar;
