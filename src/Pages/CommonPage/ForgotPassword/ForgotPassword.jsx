import React, {useContext, useState} from "react";
import {BiEnvelope} from "react-icons/bi";
import companyLogo from "../../../Images/CompanyLogo.png";
import {AuthContext} from "../../../Context/UserContext";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {postEmailForgot, setCodeEmail, centralErr, setCentralErr} =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    console.log(email);
    postEmailForgot(email)
      .then((rsp) => {
        console.log("login data", rsp);
        setCodeEmail(email);
        navigate("/verify-code");
      })
      .catch((er) => {
        console.log(er.code);
        if (er.code === "ERR_NETWORK") {
          setCentralErr(["ERR_NETWORK", er.code]);
        } else {
          setError(er.response.data);
          const form = event.target;
          if (er.response.data.email) {
            form.email.value = "";
          }
        }
      });
  };

  return (
    <div>
      <div
        className={
          centralErr[0] === "email" || centralErr[0] === "ERR_NETWORK"
            ? "centralErr fs-16-600 "
            : "d-none"
        }
      >
        {centralErr[0] === "email" || centralErr[0] === "ERR_NETWORK"
          ? centralErr[1]
          : ""}
      </div>
      <div className="mb-5">
        <img src={companyLogo} alt="logo" />
      </div>
      <div>
        <h1 className="text-color-1D1D1D fs-30-700">Forgot Password?</h1>
        <p className="fs-18-400 text-color-1D1D1D ">
          Please enter the email address associated with the account.
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

export default ForgotPassword;
