import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import PayinReportDatatable from "../../components/datatable/PayinReportDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PayinReportDatatable/>
      </div>
    </div>
  )
}

export default List