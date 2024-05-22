import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Settlement from "./pages/list/Settlement";
import BulkPayout from "./pages/list/BulkPayout";
import PayoutReport from "./pages/list/PayoutReport";
import PayinReport from "./pages/list/PayinReport";
import ApiLogsReport from "./pages/list/ApiLogsReport";
import Reports from "./pages/list/Reports";
import AnalyticsData from "./pages/list/AnalyticsData";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Profile from "./pages/new/Profile";
import Authmain from "./pages/login/Auth/Authmain"
import Reset from "./pages/login/Reset";
import Api from "./pages/new/Api";
import Fund from "./components/fund/Fund"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import store from './store/store'
import { Provider } from "react-redux";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
        <Provider store={store}>
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
        <Route exact element={<PrivateRoutes />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="settlement">
              <Route index element={<Settlement />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="bulkpayout">
              <Route index element={<BulkPayout />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="payoutreport">
              <Route index element={<PayoutReport />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="payinreport">
              <Route index element={<PayinReport />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="apiLogsreport">
              <Route index element={<ApiLogsReport />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="reports">
              <Route index element={<Reports />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="analyticsdata">
              <Route index element={<AnalyticsData />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
          <Route path="fund" element={<Fund />} /> 
          <Route path="profile" element={<Profile  inputs={userInputs} title="Add New User" />}/>
          <Route path="api" element={<Api />} /> 
     
           </Route>
 
          <Route path='/user' element={<Authmain/>} />
          <Route path='/reset' element={<Reset/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}


export default App;
