import React, {useContext, useState} from "react";
import {AiFillEye, AiOutlineHome} from "react-icons/ai";
import {BiPlus, BiSearchAlt2} from "react-icons/bi";
import {FiChevronRight} from "react-icons/fi";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import print from "../../../Images/print.png";
import pdf from "../../../Images/pdf-icon 1.png";
import excel from "../../../Images/excel-free-download-free-png 1.png";
import {MdDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";
import {AuthContext} from "../../../Context/UserContext";

const Category = () => {
  const {changeActionStatusProduct, productDelete} = useContext(AuthContext);
  const ProductsData = useLoaderData();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  console.log("ProductsData", ProductsData);

  // Function to delete a client
  const submitClientID = (id) => {
    productDelete(id)
      .then((response) => {
        navigate("/admin/products");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);

        // Handle the error
      });
  };

  //for edit
  const submitCategoryId = (id) => {
    navigate(`view-product/${id}`);
  };

  // change Active Status
  const changeActiveStatus = (id, is_active) => {
    if (is_active === true) {
      is_active = false;
    } else {
      is_active = true;
    }

    changeActionStatusProduct(id, is_active)
      .then((response) => {
        console.log(response);
        navigate("/admin/products");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // search filter
  const filteredCategories = ProductsData.results.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination filter

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Pagination Logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCategories = filteredCategories.slice(
    firstPostIndex,
    lastPostIndex
  );
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
        <div className="overflow-table">
          <table className="custom-table   ">
            <tbody>
              {/* table header */}
              <tr className="blank_row  fs-16-600">
                <td>
                  <input type="checkbox" />
                </td>
                <td>Image</td>
                <td>Product ID</td>
                <td>Product Name</td>
                <td>Price</td>
                <td>Is Active</td>
                <td>Acton</td>
              </tr>

              {/* table data show  */}
              {currentCategories.map((category, index) => (
                <tr key={index} className="blank_row  ">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="">
                    <div className="table-img m-auto">
                      <img
                        src={category.thumbnail}
                        alt=""
                        className="img-fluid p-1 rounded"
                      />
                    </div>
                  </td>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        changeActiveStatus(category.id, category.is_active)
                      }
                      className={category.is_active ? "active" : "inActive"}
                    >
                      {category.is_active ? "Yes" : "No"}
                    </button>
                  </td>
                  <td className="acton-btn">
                    <button onClick={() => submitCategoryId(category.id)}>
                      <AiFillEye />
                    </button>
                    <button onClick={() => submitCategoryId(category.id)}>
                      <MdOutlineModeEditOutline></MdOutlineModeEditOutline>
                    </button>
                    <button onClick={() => submitClientID(category.id)}>
                      <MdDeleteOutline></MdDeleteOutline>
                    </button>
                  </td>
                </tr>
              ))}

              {/* blank row print */}

              {[...Array(10 - currentCategories.length)].map((_, index) => (
                <tr key={index} className="blank_row">
                  <td colSpan="3"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
