import React from "react";
import "./AdminSidebar.css";
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SidebarData} from "./MenuItem/SidebarData";
import MenuItem from "./MenuItem/MenuItem";
import {SlHome} from "react-icons/sl";
import companyLogo from "../../Images/CompanyLogo.png";
import companyName from "../../Images/companyName.png";
import {AiOutlineHome} from "react-icons/ai";
const AdminSidebar = (props) => {
  const toggle = () => {
    if (props.toggle === false) {
      props.onToggle();
    }
  };

  return (
    <div className="side-nav shadow-sm position-relative ">
      <div className="company-logo-section  d-flex align-items-center shadow-sm">
        <img src={companyLogo} alt="" className="img-fluid" />
        <img src={companyName} alt="" className="img-fluid ms-2 display" />
      </div>

      <div className="scrollable-content">
        <Accordion flush>
          <div className="dashboard mt-2 ">
            <Accordion.Item className="my-0">
              <Link to="/admin">
                <Accordion.Header onClick={toggle}>
                  <span className="fs-23-700 mb-1">
                    <AiOutlineHome></AiOutlineHome>
                  </span>
                  <span className="ms-3 fs-18-500  display">Dashboard</span>
                </Accordion.Header>
              </Link>
            </Accordion.Item>
          </div>

          {SidebarData.map((item, index) => (
            <MenuItem
              key={index}
              id={index}
              title={item.title}
              link={item.link}
              iconClass={item.iconClass}
              submenus={item.submenus || []}
              toggle={toggle}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AdminSidebar;
