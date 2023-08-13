"use client";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

interface TableDataProps {
  title?: string;
  url: string;
}

const buttonsTitle = ["TICKET", "APPOINTMENT"];
const buttonNa = ["TODAY", "THIS MONTH", "LAST MONTH"];
const TableData: React.FC<TableDataProps> = ({ title, url }) => {
  const [activeButton, setActiveButton] = useState<string>(buttonNa[0]);
  const [activeCategory, setActiveCategory] = useState<string>(buttonsTitle[0]);
  const buttonNamesURL: Record<string, string> = {
    TODAY: url,
    "THIS MONTH":
      "https://run.mocky.io/v3/2dd54dda-3950-47f8-9be3-78a0cfabdfc1",
    "LAST MONTH":
      "https://run.mocky.io/v3/a75de462-9474-4738-a914-409245424596",
  };
  const buttonCallback = (name: string) => {
    if (buttonNa.includes(name)) {
      setActiveButton(name);
    } else {
      setActiveCategory(name);
    }
  };
  const {
    data: rows,
    isLoading,
    isError,
    refetch, // React Query's refetch function
  } = useQuery<any>(activeButton + "TableData", async () => {
    const response = await fetch(buttonNamesURL[activeButton]);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  useEffect(() => {
    refetch();
  }, [activeButton, refetch]);
  const columns: GridColDef[] = [
    {
      field: "id",
      renderHeader: () => <strong>{activeCategory}</strong>,
      renderCell: (params) => (
        <div className="text-cyan-500">{params.value}</div>
      ),
      flex: 1,
    },
    {
      field: "col1",
      renderHeader: () => <strong>{"Task"}</strong>,
      renderCell: (params) => (
        <div className="text-cyan-500">{params.value}</div>
      ),
      flex: 1,
    },
    {
      field: "col2",
      renderHeader: () => <strong>{"Pick up Time"}</strong>,
      flex: 1,
    },
    {
      field: "col3",
      renderHeader: () => <strong>{"Assign To "}</strong>,
      flex: 1,
    },
    {
      field: "col4",
      renderHeader: () => <strong>{"Customer"}</strong>,
      flex: 1,
    },
    {
      field: "col5",
      renderHeader: () => <strong>{"Status"}</strong>,
      renderCell: (params) => {
        let backgroundColor = "";
        let textColor = "white";
        let paddingHorizontal = "px-4";

        if (params.value === "pending") {
          backgroundColor = "bg-orange-300";
        } else if (params.value === "done") {
          backgroundColor = "bg-green-500";
        } else if (params.value === "cancelled") {
          backgroundColor = "bg-red-500";
        }

        const cellClasses = `justify-center rounded ${backgroundColor} ${paddingHorizontal} text-${textColor} `;

        return <div className={cellClasses}>{params.value}</div>;
      },
      width: 150,
      flex: 1,
    },
  ];

  return (
    <div className="bg-white">
      <div className=" space-y-3 items-center bg-slate-100  justify-between md:flex-row xs:flex-col  md:flex">
        <ButtonGroup
          buttons={buttonsTitle}
          isLarge={true}
          buttonCallback={buttonCallback}
        />
        <ButtonGroup buttons={buttonNa} buttonCallback={buttonCallback} />
      </div>
      {isLoading ? (
        <div className=" flex flex-col bg-white">
          <Loader />
        </div>
      ) : (
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              boxShadow: 2,
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default TableData;
