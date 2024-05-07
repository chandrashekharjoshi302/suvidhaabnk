import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import BulkPayoutDatatable from "../../components/datatable/BulkPayoutDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <BulkPayoutDatatable/>
      </div>
    </div>
  )
}

export default List