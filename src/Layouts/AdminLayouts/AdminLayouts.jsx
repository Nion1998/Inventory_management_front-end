import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import "./AdminLayouts.css";
import NavBar from "../../Components/NavBar/NavBar";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

const AdminLayouts = () => {
  const [toggle, setToggle] = useState("false");
  function SwapMenu() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <div className=" d-flex bg-color-FAFBFE ">
      <div className="d-flex ">
        <div className={`sidebar-area  ${toggle ? "" : "sidebar-area-toggle"}`}>
          <AdminSidebar toggle={toggle} onToggle={SwapMenu}></AdminSidebar>
        </div>
      </div>

      <div className="w-100">
        <NavBar onToggle={SwapMenu}></NavBar>
        <div
          className={`w-100  admin ${
            toggle ? "outlet-area " : "outlet-area-toggle"
          }`}
        >
          <div className="outlet ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayouts;
