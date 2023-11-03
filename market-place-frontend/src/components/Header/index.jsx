import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    navigate("/login");
  };

  console.log("user 111", user);

  return (
    <div className="flex justify-between items-center bg-primary p-5">
      <h1 className="text-2xl text-white">SHARE MARKET</h1>
      <div className="bg-white py-2 px-5 rounded flex items-center gap-1">
        <i className="ri-user-2-fill"></i>
        <span onClick={() => navigate("/profile")}>{user?.name}</span>
        <i
          className="ri-logout-circle-r-line ml-10 cursor-pointer"
          onClick={logoutUser}
        ></i>
      </div>
    </div>
  );
};

export default Header;
