import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../payinreportright"; // Importing columns only
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SettlementDatatable = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      
      const fetchData = async () => {
        try {
          const response = await fetch('http://reportapi.suvidhaabnk.com:8080/api/v1/basic/payInReport', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userMobile: parsedData.response.map.mobile,
              userId: parsedData.response.map.user_id.toString(),
              ipAddress: parsedData.response.map.ip,
              jwtKey: parsedData.response.map.jwt_key,
              apiKey: parsedData.response.map.api_key,
              loginKey: parsedData.response.map.login_key,
              daterange: '24 May 2023 - 24 May 2023',
              status: 'Created',
              amount: '10.00',
              txnNumber: 'PAY245992466',
              rows: '200'
            })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const responseData = await response.json();
          setData(responseData); // Assuming the response data is in the correct format
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default SettlementDatatable;
