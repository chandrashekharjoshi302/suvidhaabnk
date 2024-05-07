import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SettlementDatatable from "../../components/datatable/SettlementDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <SettlementDatatable/>
      </div>
    </div>
  )
}

export default List