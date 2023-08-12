"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import Wrapper from "../Wrapper/Wrapper";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const zData = [3300, 2058, 7800, 3908, 3800, 4800, 5300];
const xLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const elementData = [
  {
    title: "NUMBER OF INVOICES",
    value: "99",
  },
  {
    title: "SALES",
    value: "$5000",
  },
  {
    title: "COGS",
    value: "$2400",
  },
];
const buttonNames = ["LAST WEEK", "LAST TWO WEEKS", "LAST MONTH"];
const LinesChartWithElements = () => {
  return (
    <Wrapper
      title="SALES VS COGS"
      date="6 Aug to 12 Aug"
      buttonNa={buttonNames}
      Width={650}
    >
      <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: "pv" },
          { data: uData, label: "uv" },
          { data: zData, label: "uz" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />

      <div className="flex justify-around text-center">
        {elementData.map((element, index) => (
          <div key={index} className="ml-3">
            <p className="element-title  text-black ">{element.title}</p>
            <p className="element-value  text-black font-extrabold justify-center">
              {element.value}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default LinesChartWithElements;
