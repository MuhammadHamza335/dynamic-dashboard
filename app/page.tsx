"use client";
import { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CircularWithValueLabel from "@/components/CicularProgressWithValue/CircularProgressWithLabel";
import Welcome from "@/components/Header/Welcome";
import ChartPie from "@/components/PieChart/PieChart";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import TableData from "@/components/DataGrid/TableData";
import { Responsive, WidthProvider } from "react-grid-layout";
import TextSection from "@/components/TextArea/TextSection";
const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetConfig {
  type: string;
  order: number;
  col: number;
  row: number;
  width: number;
  height: number;
  priority: number;
  url: string;
  title: string;
}

const Dashboard: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widgetConfig: WidgetConfig[] = [
    {
      type: "Welcome",
      order: 1,
      col: 1,
      row: 0,
      width: 18,
      height: 1,
      priority: 1,
      title: "Welcome",
      url: "",
    },

    {
      type: "TextSection",
      order: 3,
      col: 1,
      row: 0,
      width: 12,
      height: windowWidth > 760 ? 5 : 9,
      priority: 3,
      title: "Repairs",
      url: "https://run.mocky.io/v3/9b974211-a383-4518-9f88-f3b737e9ed5f",
    },
    {
      type: "TableData",
      order: 2,
      col: 7,
      row: 0,
      width: 12,
      height: 9,
      priority: 4,
      title: "TableData",
      url: "https://run.mocky.io/v3/4a31d4f8-bb12-48e2-b3f4-0c608c4ee716",
    },
    {
      type: "ProfileInfo",
      order: 2,
      col: 1,
      row: 12,
      width: 6,
      height: 3,
      priority: 5,
      title: "ProfileInfo",
      url: "",
    },
    {
      type: "ChartPie",
      order: 2,
      col: 4,
      row: 12,
      width: 6,
      height: 6,
      priority: 6,
      title: "How did you hear about us?",
      url: "https://run.mocky.io/v3/3b9b6aa7-b7f2-432b-92ad-f7f33693db99",
    },
    {
      type: "CircularWithValueLabel",
      order: 2,
      col: 11,
      row: 12,
      width: 6,
      height: 5,
      priority: 7,
      title: "Sales",
      url: "https://run.mocky.io/v3/51dca2cc-5b17-4ad3-aabf-90dc7138a193",
    },
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
    TextSection: TextSection,
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
        <WidgetComponent
          title={widget.title}
          url={widget.url}
          key={widget.title}
        />
      </div>
    );
  });

  return (
    <>
      <div className="px-5 my-20">
        <ResponsiveGridLayout
          layouts={{ lg: initialLayout }}
          breakpoints={{ lg: 1200, md: 996, sm: 849, xs: 480, xxs: 0 }}
          cols={{ lg: 19, md: 19, sm: 19, xs: 5, xxs: 1 }}
          rowHeight={70}
          isDraggable={false}
        >
          {renderedWidgets}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Dashboard;
