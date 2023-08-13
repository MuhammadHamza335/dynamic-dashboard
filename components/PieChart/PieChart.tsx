"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Wrapper from "../Wrapper/Wrapper";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

interface ChartPieProps {
  title: string;
  url?: string;
}

interface PieData {
  value: number;
  label: string;
}

interface ApiResponse {
  subtitle: string;
  date: string;
  data: PieData[];
}

const buttonNamesURL: Record<string, string> = {
  "LAST WEEK": "https://run.mocky.io/v3/3b9b6aa7-b7f2-432b-92ad-f7f33693db99",
  "LAST TWO WEEKS":
    "https://run.mocky.io/v3/538ea4e4-bf61-4981-a458-6699f4de4861",
  "LAST MONTH": "https://run.mocky.io/v3/44d1b329-0ed6-4327-826a-f929db80b293",
};

const buttonNames = ["LAST WEEK", "LAST TWO WEEKS", "LAST MONTH"];

const ChartPie: React.FC<ChartPieProps> = ({ title, url }) => {
  const [activeButton, setActiveButton] = useState<string>(buttonNames[0]);

  const buttonCallback = (name: string) => {
    setActiveButton(name);
  };

  const {
    data: apiResponse,
    isLoading,
    isError,
    refetch, // React Query's refetch function
  } = useQuery<ApiResponse>(activeButton + "Piechart", async () => {
    const response = await fetch(buttonNamesURL[activeButton]);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  useEffect(() => {
    // Whenever ActiveButton changes, refetch the data
    refetch();
  }, [activeButton, refetch]);

  const size = {
    width: 350,
    height: 200,
  };

  const { subtitle, date, data } = apiResponse || {}; // Destructuring with default empty object

  return (
    <Wrapper
      title={title}
      subtitle={subtitle}
      date={date ?? ""}
      buttonNa={buttonNames}
      buttonCallback={buttonCallback}
    >
      <div className="w-full flex justify-center">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>Error fetching data</div>
        ) : data ? (
          <PieChart
            series={[
              {
                arcLabel: (item) => ` ${item.value}%`,
                data: data,
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
        ) : null}
      </div>
    </Wrapper>
  );
};

export default ChartPie;
