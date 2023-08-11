"use client";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Wrapper from "../Wrapper/Wrapper";
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
  const buttonNames = ["TODAY", "THIS MONTH", "LAST MONTH"];

  return (
    <Wrapper
      title="SALES TARGET"
      subtitle="Store: Apple Store"
      date="11 Aug 2023"
      buttonNa={buttonNames}
    >
      <div className="flex justify-center">
        <div className="relative inline-flex">
          <CircularProgress
            variant="determinate"
            className="text-gray-200"
            size={190}
            thickness={5}
            value={100}
          />
          <CircularProgress
            variant="determinate"
            value={value}
            size={190}
            thickness={7}
            className="text-opacity-10 absolute left-0"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
            <Typography variant="caption" component="div" color="text.primary">
              {`${Math.round(value)}%`}
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = useState(20);

  return <CircularProgressWithLabel value={progress} />;
}
