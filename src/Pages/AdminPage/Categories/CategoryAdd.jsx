import React from "react";
import {AiOutlineHome} from "react-icons/ai";
import {BiPlus} from "react-icons/bi";
import {FiChevronRight} from "react-icons/fi";
import {Link} from "react-router-dom";

const CategoryAdd = () => {
  return (
    <div>
      <div className="d-flex align-items-center  justify-content-between">
        <div>
          <div className="d-flex align-items-center fs-18-400 text-color-1D1D1D ">
            <Link to={"/admin"}>
              <AiOutlineHome className="fs-3 text-color-1D1D1D-50" />
            </Link>{" "}
            <div className="text-color-1D1D1D-50 px-1">
              <FiChevronRight />{" "}
            </div>
            <Link to={"/admin"}>Manage Staffs</Link>{" "}
            <div className="text-color-1D1D1D-50 px-1">
              <FiChevronRight />{" "}
            </div>
            <Link to={"/admin"}>
              {" "}
              <span className="text-color-1D1D1D-50">All Staff</span>{" "}
            </Link>{" "}
          </div>
          <div className="fs-30-700 text-color-1D1D1D-80">All Staff</div>
        </div>
        <Link
          to={"category-add"}
          className=" bg-color-004871 fs-20-500  btn-custom"
        >
          {" "}
          <BiPlus className="fs-5 me-2 " />
          Add New
        </Link>
      </div>
    </div>
  );
};

export default CategoryAdd;
