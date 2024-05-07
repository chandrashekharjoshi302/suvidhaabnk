import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PayoutReportDatatable from "../../components/datatable/PayoutReportDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PayoutReportDatatable/>
      </div>
    </div>
  )
}

export default List