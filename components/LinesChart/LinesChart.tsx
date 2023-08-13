"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
interface LinesChartProps {
  title: string;
  url: string;
}
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
const LinesChartWithElements: React.FC<LinesChartProps> = ({ title, url }) => {
  const buttonCallback = (name: string) => {
    console.log(name);
    // if (buttonNa.includes(name)) {
    //   setActiveButton(name);
    // } else {
    //   setActiveCategory(name);
    // }
  };
  return (
    <div className="bg-white">
      <div className="flex items-start bg-slate-100 py-2 px-5">
        <p className="font-bold text-black text-lg">{title}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between px-3 py-1">
          <p className="text-lg text-gray-500">6 Aug to 12 Aug</p>
          <ButtonGroup buttons={buttonNames} buttonCallback={buttonCallback} />
        </div>
        <LineChart
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
      </div>
    </div>
  );
};

export default LinesChartWithElements;
