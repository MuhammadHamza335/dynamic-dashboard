"use client";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const buttonsTitle = ["TICKET", "APPOINTMENT"];
const buttonNa = ["TODAY", "THIS MONTH", "LAST MONTH"];
const TableData = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "Mark",
      col4: " M Zeshan",
      col5: "cancelled",
    },
    {
      id: 2,
      col1: "MUI X",
      col2: "is awesome",
      col3: "Mark",
      col4: " Hamza",
      col5: "pending",
    },
    {
      id: 3,
      col1: "Material UI",
      col2: "is amazing",
      col3: "Mark",
      col4: " Usama",
      col5: "done",
    },
    {
      id: 4,
      col1: "MUI",
      col2: "HI",
      col3: "Mark",
      col4: " Ibrahim",
      col5: "done",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "id",
      renderHeader: () => <strong>{"Ticket"}</strong>,
      renderCell: (params) => (
        <div className="text-cyan-500">{params.value}</div>
      ),
    },
    {
      field: "col1",
      renderHeader: () => <strong>{"Task"}</strong>,
      renderCell: (params) => (
        <div className="text-cyan-500">{params.value}</div>
      ),
      width: 150,
    },
    {
      field: "col2",
      renderHeader: () => <strong>{"Pick up Time"}</strong>,
      width: 150,
    },
    {
      field: "col3",
      renderHeader: () => <strong>{"Assign To "}</strong>,
    },
    {
      field: "col4",
      renderHeader: () => <strong>{"Customer"}</strong>,
      width: 150,
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
    },
  ];
  return (
    <div className="wrapper">
      <div className="flex items-center bg-slate-100  justify-between ">
        {/* <p className="font-bold text-black text-lg">Ticket</p> */}
        <ButtonGroup buttons={buttonsTitle} isLarge={true} />
        <ButtonGroup buttons={buttonNa} />
      </div>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            boxShadow: 2,
          }}
        />
      </Box>
    </div>
  );
};

export default TableData;
