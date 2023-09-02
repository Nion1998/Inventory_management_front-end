import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();
const UserContext = ({children}) => {
  const [centralErr, setCentralErr] = useState([]);
  const [userProfile, setUserProfile] = useState();
  const [codeEmail, setCodeEmail] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = `Token ${localStorage.getItem("_authToken")}`;

  const login = (email, password) => {
    return axios.post("https://inventory.privateyebd.com/api/v1/auth/login/", {
      email,
      password,
    });
  };

  const postEmailForgot = (email) => {
    return axios.post(
      "https://inventory.privateyebd.com/api/v1/auth/forget/password/",
      {email}
    );
  };

  const new_password = (email, code, password) => {
    console.log("new_password context", email, code, password);
    return axios.post(
      "https://inventory.privateyebd.com/api/v1/auth/forget/password/confirm/",
      {email, code, password}
    );
  };

  const getProfile = () => {
    const token = `Token ${localStorage.getItem("_authToken")}`;
    return axios.get("https://inventory.privateyebd.com/api/v1/auth/profile/", {
      headers: {Authorization: token},
    });
  };

  //send authInfo
  const authInfo = {
    login,
    postEmailForgot,
    setCodeEmail,
    codeEmail,
    setVerificationCode,
    verificationCode,
    new_password,
    centralErr,
    setCentralErr,
    getProfile,
    userProfile,
    setUserProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
