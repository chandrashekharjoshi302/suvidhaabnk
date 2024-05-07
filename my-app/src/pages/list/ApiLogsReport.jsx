import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ApiLogsReportDatatable from "../../components/datatable/ApiLogsReportDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ApiLogsReportDatatable/>
      </div>
    </div>
  )
}

export default List