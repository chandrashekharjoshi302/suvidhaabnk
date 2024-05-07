import React, { useState } from "react";
import './sattlement.css'

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Sl. No.",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Settlement",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Time",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Status",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];
  



  export const DateRangeSelect = () => {

      const [selectedOption, setSelectedOption] = useState("All");
      const [customRange, setCustomRange] = useState({ startDate: "", endDate: "" });
    
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const handleCustomRangeChange = (event) => {
        const { name, value } = event.target;
        setCustomRange((prevRange) => ({
          ...prevRange,
          [name]: value,
        }));
      };
    
      return (
        <div>
          <label style={{color:"black",margin:'10px'}}>Select Date Range</label>
    
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="All">All</option>
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
            <option value="Last7Days">Last 7 Days</option>
            <option value="Last30Days">Last 30 Days</option>
            <option value="ThisMonth">This Month</option>
            <option value="LastMonth">Last Month</option>
            <option value="CustomRange">Custom Range</option>
          </select>
          <button
  style={{
    padding: '2px 5px',
    borderRadius: '5px',
    color: 'darkblue',
    border: '1px dotted rgba(0, 0, 139, 0.596)',
    cursor: 'pointer',
    marginLeft:'10px'
  }}
>
  Submit
</button>

          {/* Render custom range inputs if Custom Range is selected */}
          {selectedOption === "CustomRange" && (
            <div>
              <input
                type="date"
                name="startDate"
                value={customRange.startDate}
                onChange={handleCustomRangeChange}
                placeholder="Start Date"
              />
              <input
                type="date"
                name="endDate"
                value={customRange.endDate}
                onChange={handleCustomRangeChange}
                placeholder="End Date"
              />
            
            </div>
          )}
        </div>
      );
    };
    
    export default DateRangeSelect;