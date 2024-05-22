import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../payinreportright";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SettlementDatatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://reportapi.suvidhaabnk.com:8080/api/v1/basic/payInReport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "userMobile": "9932096277",
            "userId": "1",
            "ipAddress": "52.77.235.46,152.58.162.132",
            "jwtKey": "Qk9qdXR3M0FrbjJHaDVIbzhBVTE3VVdxakQvNXpRYkFqMnZKQnF1YTlWxZcGpEb2FNUHlsYURnQ0haaWNXa3p5dmxmUmlNNUE9PQ==",
            "apiKey": "A3Ffh6QR0bRPkKOyXDJZ5WHt7I8vuUpoEqlB2VnieF4IwGCN9rxcgadAzT1YmjLsSM",
            "loginKey": "4ab226f1e1233cf2a683a3f8e1e4025f",
            "daterange": "9 May 2023 - 9 May 2023",
            "status": "Failed",
            "amount": "17298",
            "txnNumber": "SVD82509581971",
            "rows": "200"
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log("API Response:", result);

        if (Array.isArray(result.response)) {
          const formattedData = result.response.map((item, index) => ({
            id: index + 1,
            "Id No": item.ID,
            DateTime: item.TIMESTAMP,
            "Member Name": item.MAIN_OWNER,
            "Member Mobile": item.USER_ID,
            "Order Id": item.REFFRENCE_ID, // Assuming REFFRENCE_ID as Order Id
            "Opening Balance": item.OPENING_BALANCE,
            "Order Amount": item.AMOUNT,
            "Closing Balance": item.CLOSING_BALANCE,
            "Upi Txn Id": item.UPI_TXN_ID || "", // Assuming UPI_TXN_ID field exists or is empty
            Status: item.STATUS,
            Charge: item.CHARGE,
            GST: item.GST,
            TDS: item.TDS,
            "Txn Time": item.TIMESTAMP, // Using TIMESTAMP for Txn Time
            Message: item.MESSAGE,
            Remark: item.REMARK,
            "Txn Date": item.FILTER_DATE, // Assuming FILTER_DATE as Txn Date
            "Create Date": item.CREATE_DATE || "" // Assuming CREATE_DATE field exists or is empty
          }));

          setData(formattedData);
        } else {
          console.error("API Response is not an array:", result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

