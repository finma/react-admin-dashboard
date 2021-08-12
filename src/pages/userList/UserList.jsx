import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { userRows } from "../../dummyData";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <img
              src={params.row.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            {params.row.user}
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="space-x-2">
            <Link to={"/user/" + params.row.id}>
              <button className="rounded-md px-2 py-1 font-medium text-base bg-green-100 text-green-700 hover:bg-green-200">
                <Edit /> Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(params.row.id)}
              className="rounded-md px-2 py-1 font-medium text-base bg-red-100 text-red-700 hover:bg-red-200"
            >
              <Delete /> Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-full p-5">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
