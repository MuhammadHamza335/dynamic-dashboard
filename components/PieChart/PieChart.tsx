"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
export default function ChartPie() {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  return (
    <div>
      <PieChart
        series={[
          {
            arcLabel: (item) => ` ${item.value}%`,
            arcLabelMinAngle: 45,
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
    </div>
  );
}
