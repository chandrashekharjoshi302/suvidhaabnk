
import "./api.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Api = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 style={{color:'black'}}>API Credential / Generate Key</h1>
        </div>
        <div className="bottom">
          <div className="left">
       
          </div>
          <div className="right">
            <form>
        
              {/* New input fields for adding account */}
              <div className="formInput">
                <label htmlFor="account">Merchant Name *</label>
                <input type="text" placeholder="Enter Uat Demo Account" value={'Uat Demo Account'} />
              </div>
              <div className="formInput">
                <label htmlFor="ifsc">Register Mobile Number *</label>
                <input type="text" placeholder="Enter Register Mobile Number" value={'9999999999'} />
              </div>
              <div className="formInput">
                <label htmlFor="accountType">Ip WhiteList *</label>
                <input type="text" placeholder="Enter Ip WhiteList" value={'13.232.166.238'}/>
              </div>
              <div className="formInput">
                <label htmlFor="bankName">JWT Key *</label>
                <input type="text" placeholder="Enter Bank Name" value={'Qk9qdXR3M0FrbjJHaDVIdjhBVTE3VVdxakQvNXpRYkFqMnZKQnF1YThqaW1ZWnpIb2FNTXhGYURnQ0haaWNXa3p5dmxmUmlNNUE9PQ='} />
              </div>
              <div className="formInput">
                <label htmlFor="beneName">Api Key *</label>
                <input type="text" placeholder="Enter Api Key" value={'KFUgIV8RyF2uZIhERNiD4nQesSoTMA5kOr31Xbtw9PY7ABlfz6CJHj0pGxacLqvmWd'}/>
              </div>
              <div className="formInput">
                <label htmlFor="beneMobile">Login Key *</label>
                <input type="text" placeholder="Enter Login Key" value={'d709a5b760f2a732bf39abf9b4161ff7'} />
              </div>
              <div className="formInput">
                <label htmlFor="beneEmail">Callback Url: *</label>
                <input type="text" placeholder="Enter Callback Url:" value={'https://api.popssquare.world/api/withdrawNotify1/SuvidhaaWithdraw09'} />
              </div>
              {/* End of new input fields */}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
