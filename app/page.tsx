"use client";
import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CircularWithValueLabel from "@/components/CicularProgressWithValue/CircularProgressWithLabel";
import Welcome from "@/components/Header/Welcome";
import ChartPie from "@/components/PieChart/PieChart";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import TextArea from "@/components/TextArea/TextArea";
import TableData from "@/components/DataGrid/TableData";
const Dashboard: React.FC = () => {
  const initialLayout: GridLayout.Layout[] = [
    { i: "box1", x: 0, y: 0, w: 10, h: 1 },
    { i: "box2", x: 0, y: 1, w: 4, h: 2 },
    { i: "box3", x: 4, y: 1, w: 4, h: 2 },
    { i: "box4", x: 8, y: 1, w: 4, h: 2 },
    { i: "box5", x: 0, y: 4, w: 4, h: 2 },
    { i: "box6", x: 4, y: 4, w: 4, h: 1 },
    { i: "box7", x: 8, y: 5, w: 4, h: 5 },
    { i: "TableData", x: 0, y: 6, w: 8, h: 2 },
    { i: "CircularResult", x: 8, y: 11, w: 4, h: 2 },
  ];

  const [layout, setLayout] = useState<GridLayout.Layout[]>(initialLayout);

  const onLayoutChange = (newLayout: GridLayout.Layout[]): void => {
    setLayout(newLayout);
    // You can save the new layout in your storage here.
  };

  return (
    <div className="px-5">
      <GridLayout layout={layout} cols={12} rowHeight={70} width={1920}>
        <Welcome key="box1" />
        <div key="box2">
          <TextArea
            title="Repairs"
            number={10}
            percentage={25}
            price="5335.99"
            totalPrice="5345"
          />
        </div>

        <div key="box3">
          <TextArea
            title="Network Unblocks"
            number={10}
            percentage={25}
            price="5335.99"
            totalPrice="5345"
          />
        </div>
        <div key="box4" className="mb-5">
          <ProfileInfo />
        </div>

        <div key="box5">
          <TextArea
            title="Accessories & Parts"
            number={10}
            percentage={25}
            price="5335.99"
            totalPrice="5345"
          />
        </div>
        <div key="box6">
          <TextArea
            title="Trade In"
            number={10}
            percentage={25}
            price="5335.99"
            totalPrice="5345"
          />
        </div>
        <div key="box7" className="mt-9">
          <ChartPie />
        </div>
        <div key="TableData">
          <TableData />
        </div>
        <div key="CircularResult">
          <CircularWithValueLabel />
        </div>
      </GridLayout>
    </div>
    // <div style={{ padding: "20px" }}>
    //   <GridLayout
    //     layout={layout}
    //     onLayoutChange={onLayoutChange}
    //     cols={12}
    //     rowHeight={100}
    //     width={1200}
    //   >
    //     <div key="box1" style={{ backgroundColor: "lightblue" }}>
    //       Box 1
    //     </div>
    //     <div key="box2" style={{ backgroundColor: "lightgreen" }}>
    //       Box 2
    //     </div>
    //     <div key="box3" style={{ backgroundColor: "lightpink" }}>
    //       Box 3
    //     </div>
    //     <div key="box4" style={{ backgroundColor: "lightpink" }}>
    //       Box 4
    //     </div>
    //   </GridLayout>
    // </div>
  );
};

export default Dashboard;
