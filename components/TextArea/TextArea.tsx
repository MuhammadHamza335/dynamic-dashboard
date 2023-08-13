import React from "react";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";

interface Props {
  title: string;
  url: string;
}

interface ApiResponse {
  number: number;
  price: number;
  percentage: number;
  totalPrice: number;
}

const TextArea: React.FC<Props> = ({ title, url }) => {
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useQuery<ApiResponse>(title, async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const { number, price, percentage, totalPrice } = apiResponse!;

  return (
    <div className="flex w-full bg-white">
      <div className="flex flex-col p-4 border border-slate-50 w-full">
        <div className="flex items-end">
          <p className="font-bold text-black">{title}</p>
          <p className="text-xs ml-2 text-black">({number})</p>
        </div>
        <div className="h-0.5 bg-gray-200 my-2"></div>
        <p className="text-2xl text-black">
          <span className="font-bold">$</span>
          {price}
        </p>
        <div className="flex justify-between mt-5">
          <p className="text-black">({percentage}%)</p>
          <p className="text-black">(${totalPrice})</p>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
