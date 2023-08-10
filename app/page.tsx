import CircularWithValueLabel from "@/components/CicularProgressWithValue/CircularProgressWithLabel";
import TableData from "@/components/DataGrid/TableData";
import LinesChart from "@/components/LinesChart/LinesChart";
import ChartPie from "@/components/PieChart/PieChart";

export default function Home() {
  return (
    <div>
      <ChartPie />
      <LinesChart />
      <TableData />
      <CircularWithValueLabel />
    </div>
  );
}
