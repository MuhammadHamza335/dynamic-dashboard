import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import CircularWithValueLabel from "@/components/CicularProgressWithValue/CircularProgressWithLabel";
import TableData from "@/components/DataGrid/TableData";
import LinesChart from "@/components/LinesChart/LinesChart";
import ChartPie from "@/components/PieChart/PieChart";
import TextArea from "@/components/TextArea/TextArea";

export default function Home() {
  return (
    <div>
      {/* <ChartPie />
       <LinesChart />
      <TableData /> */}
      <LinesChart />
      {/* <ChartPie />
      <CircularWithValueLabel /> */}
      {/*<TextArea
        title="Trade in"
        number={10}
        price="7653.45"
        percentage={25}
        totalPrice="150000"
      /> */}
      {/* <ButtonGroup
        buttonOne="LAST WEEK"
        buttonTwo="LAST TWO WEEKS"
        buttonThree="LAST MONTH"
      /> */}
    </div>
  );
}
