import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {BiEnvelope} from "react-icons/bi";
import "./SignIn.css";
import {AuthContext} from "../../../Context/UserContext";
import companyLogo from "../../../Images/CompanyLogo.png";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword, getProfile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {login, centralErr, setCentralErr} = useContext(AuthContext);
  const from = location.state?.from.pathname || "/";

  // password show and hide
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    login(email, password)
      .then((rsp) => {
        // setShowAlert(true); // Show the alert
        console.log("login data", rsp.data);
        localStorage.setItem("user", JSON.stringify(rsp.data));
        localStorage.setItem("_authToken", rsp.data.token);

        if (from === "/") {
          navigate("/admin");
        } else {
          navigate(from, {replace: true});
        }
      })
      .catch((er) => {
        console.log(er);
        if (er.code === "ERR_NETWORK") {
          setCentralErr(["ERR_NETWORK", er.code]);
        } else {
          setError(er.response.data);

          const form = event.target;
          if (er.response.data.email) {
            form.email.value = "";
          }
          if (er.response.data.password) {
            form.password.value = "";
          }
        }
      });
  };

  return (
    <div>
      <div
        className={
          centralErr[0] === "ERR_NETWORK" ? "centralErr fs-16-600 " : "d-none"
        }
      >
        {centralErr[0] === "ERR_NETWORK" ? centralErr[1] : ""}
      </div>

      <div className="mb-5">
        <img src={companyLogo} alt="logo" />
      </div>
      <div>
        <h1 className="text-color-1D1D1D fs-30-700">Sign in</h1>
        <p className="fs-18-400 text-color-1D1D1D ">
          Please Sign in to your account
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className={`form-group position-relative  ${
            error.email ? "error" : ""
          }`}
        >
          <label>Email</label>
          <div className="input-eye">
            <BiEnvelope></BiEnvelope>
          </div>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder={error.email ? error.email[0] : "Your email address"}
          />
        </div>

        <div
          className={`form-group position-relative ${
            error.password ? "error" : ""
          }`}
        >
          <label>Email</label>
          <div className="input-eye" onClick={handlePasswordVisibility}>
            {/* Conditionally render the eye icon based on showPassword state */}
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
          <input
            type={showPassword ? "text" : "password"} // Show/hide the password based on showPassword state
            name="password"
            className="form-control"
            placeholder={error.password ? error.password[0] : "Password"}
          />
        </div>

        <div className="my-2">
          <Link to={"forgot"} className="fs-16-600 text-color-FF9640 ">
            {" "}
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn bg-color-004871 fs-20-700 text-center w-100  mt-4 pb-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
