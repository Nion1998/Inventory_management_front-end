import React, {useContext, useState} from "react";
import {AuthContext} from "../../../Context/UserContext";
import {Link, useNavigate} from "react-router-dom";
import companyLogo from "../../../Images/CompanyLogo.png";
import {BiEnvelope} from "react-icons/bi";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
const NewPassword = () => {
  const {codeEmail, verificationCode, new_password, setCentralErr} =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newShowPassword, setNewShowPassword] = useState(false);
  const navigate = useNavigate();

  // password show and hide
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleNewPasswordVisibility = () => {
    setNewShowPassword((newPassword) => !newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = codeEmail;
    const code = verificationCode;

    new_password(email, code, password)
      .then((rsp) => {
        console.log(rsp);
        navigate("/");
      })
      .catch((er) => {
        console.log(er);
        if (er.response.data.password) {
          setError(er.response.data);
        } else {
          if (er.response.data.email && er.response.data.code) {
            setCentralErr(["email", er.response.data.code]);
            return navigate("/forgot");
          } else if (er.response.data.email) {
            return navigate("/forgot");
          } else if (er.response.data.code) {
            setCentralErr(["code", er.response.data.code]);
            return navigate("/verify-code");
          }
        }
      });
  };
  return (
    <div>
      <div className="mb-5">
        <img src={companyLogo} alt="logo" />
      </div>
      <div>
        <h1 className="text-color-1D1D1D fs-30-700">Reset Password</h1>
        <p className="fs-18-400 text-color-1D1D1D ">
          Here easily you can reset your password
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className={`form-group position-relative  ${
            error.email ? "error" : ""
          }`}
        >
          <label>New Password</label>
          <div className="input-eye" onClick={handleNewPasswordVisibility}>
            {/* Conditionally render the eye icon based on showPassword state */}
            {newShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
          <input
            type={newShowPassword ? "text" : "password"}
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
          <label>Confirm Password</label>
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

export default NewPassword;
