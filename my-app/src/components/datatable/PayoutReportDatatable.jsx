import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../payoutreportright";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SettlementDatatable = () => {
  const [result, setData] = useState([]);

  const handleDelete = (id) => {
    setData(result.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://reportapi.suvidhaabnk.com:8080/api/v1/basic/payOutReport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "userMobile": "9932096277",
            "userId": "1",
            "ipAddress": "52.77.235.46,152.58.162.132",
            "jwtKey": "Qk9qdXR3M0FrbjJHaDVIbzhBVTE3VVdxakQvNXpRYkFqMnZKQnF1YTlUbWxZcGpEb2FNUHlsYURnQ0haaWNXa3p5dmxmUmlNNUE9PQ==",
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
  
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.response)) {
          const formattedData = data.response.map((item, index) => ({
            id: index + 1,
            "Id No": item.ID,
            DateTime: item.TIMESTAMP,
            "Member Name": item.MAIN_OWNER,
            "Member Mobile": item.USER_ID,
            "Account No": item.ACCOUNT,
            "Transaction ID": item.TR_ID,
            "Ref ID": item.REFFRENCE_ID,
            "Opening Balance": item.OPENING_BALANCE,
            Amount: item.AMOUNT,
            Charge: item.CHARGE,
            GST: item.GST,
            TDS: item.TDS,
            "Closing Balance": item.CLOSING_BALANCE,
            Mode: item.TRANS_TYPE,
            Utr: item.UTR,
            Status: item.STATUS,
            Message: item.MESSAGE,
            Remark: item.REMARK
          }));
  
          setData(formattedData);
        } else {
          console.error("API Response is not an array:", data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const actionColumn = {
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
  };

  const columns = userColumns.concat(actionColumn);

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
        rows={result}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default SettlementDatatable;
