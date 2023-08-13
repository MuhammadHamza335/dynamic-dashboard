"use client";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
// interface ApiResponse {
//   subtitle: string;
//   date: string;
//   data: PieData[];
// }
interface ProgressCicularProps {
  title: string;
  url?: string;
}
const buttonNamesURL: Record<string, string> = {
  TODAY: "https://run.mocky.io/v3/51dca2cc-5b17-4ad3-aabf-90dc7138a193",
  "THIS MONTH": "https://run.mocky.io/v3/4e23786c-39c1-4d6a-a05c-97de60edba3b",
  "LAST MONTH": "https://run.mocky.io/v3/816b781e-c969-4528-a350-d35ef7665a7e",
};
const buttonNames = ["TODAY", "THIS MONTH", "LAST MONTH"];

const CircularProgressWithLabel: React.FC<ProgressCicularProps> = ({
  title,
  url,
}) => {
  const [activeButton, setActiveButton] = useState<string>(buttonNames[0]);
  const buttonCallback = (name: string) => {
    setActiveButton(name);
  };
  const {
    data: apiResponse,
    isLoading,
    isError,
    refetch, // React Query's refetch function
  } = useQuery<any>(activeButton + "CicularProgress", async () => {
    const response = await fetch(buttonNamesURL[activeButton]);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  useEffect(() => {
    refetch();
  }, [activeButton, refetch]);

  const { subtitle, date, value } = apiResponse || {};

  return (
    <Wrapper
      title={title}
      subtitle={subtitle}
      date={date}
      buttonNa={buttonNames}
      buttonCallback={buttonCallback}
    >
      <div className="flex justify-center">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>Error fetching data</div>
        ) : (
          <div className="relative inline-flex">
            <CircularProgress
              variant="determinate"
              className="text-gray-200"
              size={190}
              thickness={5}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              value={value}
              size={190}
              thickness={7}
              className=" text-opacity-10 absolute left-0"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
              <Typography
                variant="caption"
                component="div"
                className="text-4xl text-blue-500 font-bold"
              >
                {`${Math.round(value)}%`}
              </Typography>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default CircularProgressWithLabel;
