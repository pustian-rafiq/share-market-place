import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(user);
  }, []);
  console.log("user 111", userInfo);

  return (
    <div className="flex justify-between items-center bg-primary p-5">
      <h1 className="text-2xl text-white">SHARE MARKET</h1>
      <div className="bg-white py-2 px-5 rounded flex items-center gap-1">
        <i className="ri-user-2-fill"></i>
        <span>{userInfo?.name}</span>
        <i
          className="ri-logout-circle-r-line ml-10 cursor-pointer"
          onClick={logoutUser}
        ></i>
      </div>
    </div>
  );
};

export default Header;
