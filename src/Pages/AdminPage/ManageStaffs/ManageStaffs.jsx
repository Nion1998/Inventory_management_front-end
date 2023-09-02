import React, {useContext, useState} from "react";
import {AiFillEye, AiOutlineHome} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import {
  MdDeleteOutline,
  MdOutlineInsertChartOutlined,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import {BiPlus, BiSearchAlt2} from "react-icons/bi";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import print from "../../../Images/print.png";
import pdf from "../../../Images/pdf-icon 1.png";
import excel from "../../../Images/excel-free-download-free-png 1.png";
import {AuthContext} from "../../../Context/UserContext";

const ManageStaffs = () => {
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
        <button className=" bg-color-004871 fs-20-500  btn-custom">
          {" "}
          <BiPlus className="fs-5 me-2 " />
          Add New
        </button>
      </div>

      {/*table card */}
      <div className="card card-border mt-5 p-4">
        <div className="d-flex justify-content-between ">
          <div className="table-search position-relative d-none d-lg-block">
            <input
              type="text"
              className="w-100 form-control "
              placeholder="Search.."
            />
            <div className="search-icon-table">
              <BiSearchAlt2></BiSearchAlt2>
            </div>
          </div>

          <div className="pdf d-flex align-items-center me-2 me-md-3 ">
            <button>
              <img src={pdf} alt="" />
            </button>
            <button>
              <img src={excel} alt="" />
            </button>
            <button>
              <img src={print} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStaffs;
