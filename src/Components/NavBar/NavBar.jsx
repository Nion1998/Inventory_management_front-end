import React, {useContext, useEffect, useState} from "react";
import "./NavBar.css";
import companyLogo from "../../Images/Logo (1).png";
import {
  BiDotsVerticalRounded,
  BiSearchAlt2,
  BiSolidChevronsLeft,
} from "react-icons/bi";

import {FiChevronDown} from "react-icons/fi";
import avater from "../../Images/images.png";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../Context/UserContext";

const NavBar = (props) => {
  const {userProfile, logOut} = useContext(AuthContext);

  // useEffect(() => {
  //   userNotification()
  //     .then((response) => {
  //       setNotification(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error getting data:', error);
  //     });

  // }, [userProfile]);

  // if(!notification){
  //   return null;
  // }

  // Function to toggle the navigation
  const toggle = () => {
    props.onToggle();
  };

  return (
    <div className="navbar shadow-sm  ">
      <div className="d-flex align-items-center  w-75 position-relative  ">
        <div
          className=" toggle-btn  d-flex align-items-center "
          onClick={toggle}
        >
          <i className="toggle-icon">
            <BiSolidChevronsLeft />
          </i>
        </div>
        <div className="search position-relative d-none d-lg-block">
          <input type="text" className="w-100 " placeholder="Search here.." />
          <div className="search-icon-table">
            <BiSearchAlt2></BiSearchAlt2>
          </div>
        </div>
      </div>
      <div className=" w-25 d-flex justify-content-end align-items-center">
        {/* <div className="me-2 me-md-3 me-lg-3">
          {" "}
          <Badge badgeContent={1} color="success">
            <BsFillBellFill color="action" className="fs-27" />
          </Badge>
        </div> */}

        <div>
          <Dropdown>
            <Dropdown.Toggle
              className="nav-profile d-flex align-items-center border-0 z-10 "
              variant="success"
              id="dropdown-basic"
            >
              <div className="d-none d-lg-block">
                {userProfile && userProfile.image_url ? (
                  <img src={userProfile.image_url} alt="" />
                ) : (
                  <img src={avater} alt="" />
                )}
              </div>
              <div className=" ms-md-3 d-none d-lg-block text-start">
                <div className="fs-19-600 text-color-1D1D1D-50 ">
                  {userProfile.first_name
                    ? userProfile.first_name
                    : "Mehedi hasan "}{" "}
                  {userProfile.last_name}{" "}
                  <span>
                    <FiChevronDown></FiChevronDown>
                  </span>
                </div>
                <div className="fs-14-600 text-color-1D1D1D-50">Admin</div>
              </div>
              <div className="text-black d-flex d-lg-none align-items-center fs-4">
                <BiDotsVerticalRounded></BiDotsVerticalRounded>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 bg-light ">
              <Dropdown.Item onClick={() => logOut()}>Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link to={"/admin/profile"}>Profile</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div
          className="nav-profile d-flex align-items-center "
          onClick={logOut}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
