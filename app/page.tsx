"use client";
import { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CircularWithValueLabel from "@/components/CicularProgressWithValue/CircularProgressWithLabel";
import Welcome from "@/components/Header/Welcome";
import ChartPie from "@/components/PieChart/PieChart";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import TextArea from "@/components/TextArea/TextArea";
import TableData from "@/components/DataGrid/TableData";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetConfig {
  type: string;
  order: number;
  col: number;
  row: number;
  width: number;
  height: number;
  priority: number;
}

const Dashboard: React.FC = () => {
  // const initialLayout: GridLayout.Layout[] = [
  //   { i: "Welcome", x: 0, y: 0, w: 11, h: 1 },
  //   { i: "box2", x: 0, y: 1, w: 4, h: 2 },
  //   { i: "box3", x: 4, y: 1, w: 4, h: 2 },
  //   { i: "ProfileInfo", x: 8, y: 1, w: 4, h: 2 },
  //   { i: "box5", x: 0, y: 4, w: 4, h: 2 },
  //   { i: "box6", x: 4, y: 4, w: 4, h: 1 },
  //   { i: "ChartPie", x: 8, y: 5, w: 4, h: 5 },
  //   { i: "TableData", x: 0, y: 6, w: 8, h: 2 },
  //   { i: "CircularResult", x: 8, y: 11, w: 4, h: 2 },
  // ];

  // const widgetConfig: WidgetConfig[] = [
  //   {
  //     type: "Welcome",
  //     order: 1,
  //     col: 0,
  //     row: 0,
  //     width: 12,
  //     height: 1,
  //     priority: 2,
  //   },
  //   {
  //        type: "ProfileInfo",
  //     order: 2,
  //     col: 1,
  //     row: 8,
  //     width: 4,
  //     height: 2,
  //     priority: 1,
  //   },
  //   {
  //     type: "ChartPie",
  //     order: 2,
  //     col: 5,
  //     row: 8,
  //     width: 4,
  //     height: 5,
  //     priority: 3,
  //   },
  //   // ... define other widgets here
  // ];

  const widgetConfig: WidgetConfig[] = [
    {
      type: "Welcome",
      order: 1,
      col: 0,
      row: 0,
      width: 18,
      height: 2,
      priority: 1,
    },
    {
      type: "TableData",
      order: 2,
      col: 11,
      row: 0,
      width: 12,
      height: 8,
      priority: 2,
    },
    {
      type: "ProfileInfo",
      order: 2,
      col: 1,
      row: 12,
      width: 6,
      height: 2,
      priority: 3,
    },
    {
      type: "ChartPie",
      order: 2,
      col: 5,
      row: 12,
      width: 6,
      height: 6,
      priority: 4,
    },
    {
      type: "CircularWithValueLabel",
      order: 2,
      col: 11,
      row: 12,
      width: 6,
      height: 5,
      priority: 5,
    },
    // ... define other widgets here
  ];

  const initialLayout: GridLayout.Layout[] = widgetConfig.map((widget) => ({
    i: widget.type,
    x: widget.row,
    y: widget.col,
    w: widget.width,
    h: widget.height,
  }));
  const componentsMapping: Record<string, React.ComponentType<any>> = {
    Welcome: Welcome,
    TextArea: TextArea,
    ChartPie: ChartPie,
    ProfileInfo: ProfileInfo,
    TableData: TableData,
    CircularWithValueLabel: CircularWithValueLabel,
    // ... add more mappings for other widget types
  };

  const sortedWidgets = [...widgetConfig].sort(
    (a, b) => a.priority - b.priority
  );

  const renderedWidgets = sortedWidgets.map((widget) => {
    const WidgetComponent = componentsMapping[widget.type];

    return (
      <div
        key={widget.type}
        data-grid={{
          x: widget.col,
          y: widget.row,
          w: widget.width,
          h: widget.height,
        }}
      >
        <WidgetComponent />
      </div>
    );
  });

  return (
    <div className="px-5">
      <ResponsiveGridLayout
        layouts={{ lg: initialLayout }}
        breakpoints={{ lg: 1200, md: 996, sm: 849, xs: 480, xxs: 0 }}
        cols={{ lg: 19, md: 19, sm: 19, xs: 5, xxs: 1 }}
        // cols={19}
        rowHeight={70}
        isDraggable={false}
      >
        {renderedWidgets}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
