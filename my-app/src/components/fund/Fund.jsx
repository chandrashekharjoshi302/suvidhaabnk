import "./fund.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

import React from "react";

function Fund() {
  return (
    <>
      {" "}
      <div className="fund">
        <Sidebar />
        <div className="fundContainer">
          <Navbar />
          <div className="papa">
          <div className="firstPart">
            <div className="text-center">
              <h3>Fund Request</h3>
            </div>
            <form action="" method="post">
              <div className="FundDiv">
                <div className="gap">
                  <label htmlFor="">Bank Account *</label>

                  <select id="bankSelect" value="selectedBank">
                    <option value="">Select Bank</option>
                    <option value="Ruaanya Fintech 923020058003169 UTIB0004797">
                      Ruaanya Fintech 923020058003169 UTIB0004797
                    </option>
                    <option value="Ruaanya Fintech 10147912461 IDFB0020154">
                      Ruaanya Fintech 10147912461 IDFB0020154
                    </option>
                    <option value="Ruaanya Fintech 2048891305 KKBK0000180">
                      Ruaanya Fintech 2048891305 KKBK0000180
                    </option>
                    <option value="Suvidhaa Group 0948609099 KKBK0000180">
                      Suvidhaa Group 0948609099 KKBK0000180
                    </option>
                    <option value="Suvidhaa Group 35095070896 SBIN0016739">
                      Suvidhaa Group 35095070896 SBIN0016739
                    </option>
                  </select>
                </div>
                <div className="gap">
                  <label htmlFor=""> Amount *</label>
                  <input type="text" placeholder="Enter Amount" />
                </div>
                <div className="gap">
                  <label htmlFor="">Transfer Type * </label>
                  <select id="bankSelect" value="select">
                    <option value="">Select Bank</option>
                    <option value="UPI">UPI</option>
                    <option value="NEFT">NEFT</option>
                    <option value="IMPS">IMPS</option>
                    <option value="RTGS">RTGS</option>
                  </select>
                </div>
                <div className="gap">
                  <label htmlFor="">Utr *</label>
                  <input type="text" placeholder="Enter Utr" />
                </div>
                <div className="gap">
                  <label htmlFor="">Remark *</label>
                  <input type="text" placeholder="Enter Remark" />
                </div>
                <div>
                  <button className="btnS">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="secondPart">
          <div className="text-center">
            <h3>Add Fund</h3>
          </div>
          <div>
            <div>
              <label htmlFor="">Amount *</label>
              <input type="text" />
            </div>
            <div>
            <label htmlFor="">Transfer Type * </label>
                  <select id="bankSelect" value="select">
                    <option value="">Payment Link</option>
                    <option value="QR">QR</option>
                    <option value="Payment Link">Payment Link</option>
                  </select>
            </div>
            <div>
              <button className="btnS">Submit</button>
            </div>
          </div>


          </div>
        </div>

        <div>
      
          <div className="papa2">
   
            <div className="Bank1">
            <div className="font">Account Details</div>
              <ul>
                <li>Company name: Suvidhaa Group</li>
                <li>Account number: 0948609099</li>
                <li>IFSC: KKBK0000180</li>
                <li>Bank name: Kotak Bank</li>
                <li>Branch: Noida - Sector 18 Branch</li>
              </ul>
            </div>
            <div className="Bank2">
            <div className="font">Account Details</div>
              <ul>
                <li>Company name: Suvidhaa Group</li>
                <li>Account number: 35095070896</li>
                <li>IFSC: SBIN0016739</li>
                <li>Bank name: SBI BANK</li>
                <li>Branch: Noida - Sector 18 Branch</li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        

        
      </div>
    </>
  );
}

export default Fund;
