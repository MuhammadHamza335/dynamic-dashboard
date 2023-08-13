import { useState } from "react";
import { useQuery } from "react-query";
import { LineChart } from "@mui/x-charts/LineChart";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Loader from "../Loader/Loader";

interface LinesChartProps {
  title: string;
  url: string;
}

interface ChartData {
  pData: number[];
  uData: number[];
  zData: number[];
  xLabels: string[];
}
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
const LinesChartWithElements: React.FC<LinesChartProps> = ({ title, url }) => {
  const buttonNames = ["LAST WEEK", "LAST TWO WEEKS", "LAST MONTH"];

  const [activeButton, setActiveButton] = useState<string>(buttonNames[0]);

  const { data, isLoading, isError } = useQuery<ChartData>(
    ["LinesChart", activeButton],
    async () => {
      const response = await fetch(buttonNamesURL[activeButton]);
      return response.json();
    }
  );

  const buttonNamesURL: Record<string, string> = {
    "LAST WEEK": url,
    "LAST TWO WEEKS":
      "https://run.mocky.io/v3/17d31e49-0c3f-4a93-bbe7-add93368636e",
    "LAST MONTH":
      "https://run.mocky.io/v3/cecad73e-a858-4003-afaa-844176bf715e",
  };

  const buttonCallback = (name: string) => {
    setActiveButton(name);
  };

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const chartData = data as ChartData;

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
        {isLoading ? (
          <Loader />
        ) : (
          <LineChart
            height={300}
            series={[
              { data: chartData.pData, label: "pv" },
              { data: chartData.uData, label: "uv" },
              { data: chartData.zData, label: "uz" },
            ]}
            xAxis={[{ scaleType: "point", data: chartData.xLabels }]}
          />
        )}

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
