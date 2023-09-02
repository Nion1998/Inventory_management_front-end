import React, {useContext, useState, useRef} from "react";
import {Button} from "react-bootstrap";
import VerificationInput from "react-verification-input";
import "./VarifyEmail.css";
import {AuthContext} from "../../../Context/UserContext";
import {useNavigate} from "react-router-dom";
import companyLogo from "../../../Images/CompanyLogo.png";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const verificationInputRef = useRef(null);
  const {setVerificationCode, codeEmail, centralErr, setCentralErr} =
    useContext(AuthContext);
  console.log(codeEmail);
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = verificationInputRef.current.value;
    if (code.length === 6) {
      setVerificationCode(code);
      navigate("/new-password");
    } else {
      setCentralErr(["code", "Please insert verification code properly "]);
    }
  };

  return (
    <div>
      <div
        className={
          centralErr[0] === "code" ? "centralErr fs-16-600 " : "d-none"
        }
      >
        {centralErr[0] === "code" ? centralErr[1] : ""}
      </div>
      <div className="mb-5">
        <img src={companyLogo} alt="logo" />
      </div>
      <div>
        <h1 className="text-color-1D1D1D fs-30-700">Verify your email</h1>
        <p className="fs-18-400 text-color-1D1D1D ">
          Please enter the 4 digits code sent to your email.
        </p>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="d-flex justify-content-center my-4 my-md-5">
          <VerificationInput
            ref={verificationInputRef}
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
            }}
            name="code"
            placeholder=" "
            validChars="0-9"
            autoFocus={true}
          />
        </div>

        <button
          type="submit"
          className="btn bg-color-004871 fs-20-700 text-center w-100   pb-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
