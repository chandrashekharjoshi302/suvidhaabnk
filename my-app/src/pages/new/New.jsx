
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {/* New input fields for adding account */}
              <div className="formInput">
                <label htmlFor="account">Account *</label>
                <input type="text" placeholder="Enter Account" />
              </div>
              <div className="formInput">
                <label htmlFor="ifsc">Ifsc Code *</label>
                <input type="text" placeholder="Enter Ifsc Code" />
              </div>
              <div className="formInput">
                <label htmlFor="accountType">Account Type *</label>
                <input type="text" placeholder="Enter Account Type" />
              </div>
              <div className="formInput">
                <label htmlFor="bankName">Bank Name *</label>
                <input type="text" placeholder="Enter Bank Name" />
              </div>
              <div className="formInput">
                <label htmlFor="beneName">Bene Name *</label>
                <input type="text" placeholder="Enter Bene Name" />
              </div>
              <div className="formInput">
                <label htmlFor="beneMobile">Bene Mobile *</label>
                <input type="text" placeholder="Enter Bene Mobile" />
              </div>
              <div className="formInput">
                <label htmlFor="beneEmail">Bene Email *</label>
                <input type="text" placeholder="Enter Bene Email" />
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

export default New;
