"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Wrapper from "../Wrapper/Wrapper";
export default function ChartPie() {
  const data = [
    { value: 5, label: "Alpha" },
    { value: 10, label: "Beta" },
    { value: 15, label: "Gama" },
    { value: 20, label: "Delta" },
  ];

  const size = {
    width: 400,
    height: 200,
  };
  const buttonNames = ["LAST WEEK", "LAST TWO WEEKS", "LAST MONTH"];
  return (
    <Wrapper
      title="HOW DID YOU HEAR ABOUT US?"
      subtitle="Store: Apple Store"
      date="11 Aug 2023"
      buttonNa={buttonNames}
    >
      <PieChart
        series={[
          {
            arcLabel: (item) => ` ${item.value}%`,
            // arcLabelMinAngle: 45,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </Wrapper>
  );
}
