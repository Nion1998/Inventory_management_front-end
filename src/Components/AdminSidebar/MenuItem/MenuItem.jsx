import React, {useState} from "react";
import "./MenuItem.css";
import {Accordion} from "react-bootstrap";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi";
import {BsDot} from "react-icons/bs";

const MenuItem = ({id, title, submenus, iconClass, link, toggle}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = submenus.some((item) => item.link === location.pathname);

  const togglee = (link, submenus) => {
    console.log(link, submenus);
    if (!submenus) {
      navigate(link);
      toggle();
    }
  };

  return (
    <Accordion.Item eventKey={id} className="w-100 border-0 ">
      <Accordion.Header onClick={(e) => togglee(link, submenus.length > 0)}>
        <span className=" fs-23-700 mb-1">{iconClass}</span>
        <span className="  ms-3  w-100 display  fs-18-500   ">
          {title}{" "}
        </span>{" "}
        <span
          className={
            submenus.length > 0 ? " fs-4 ms-auto  darrow display" : "d-none"
          }
        >
          <BiChevronDown></BiChevronDown>
        </span>
      </Accordion.Header>

      <Accordion.Body>
        {submenus.map((item, index) => (
          <NavLink onClick={(e) => toggle()} key={index} to={item.link}>
            <li>
              <span className="display">{item.title}</span>
            </li>
          </NavLink>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default MenuItem;
