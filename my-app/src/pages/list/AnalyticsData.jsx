import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AnalyticesReportDatatable from "../../components/datatable/AnalyticesReportDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AnalyticesReportDatatable/>
      </div>
    </div>
  )
}

export default List