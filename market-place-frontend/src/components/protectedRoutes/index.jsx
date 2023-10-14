import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../../apiCalls/users";

const ProtectedRoutes = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();
      console.log("GetCurrentUser", response.user);
      if (response.success) {
        setUser(response.user);
      } else {
        navigate("/login");
        toast.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      toast.error(error.message);
    }
  };
  console.log("user", user);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);
  return <div>{user && <div>{children}</div>}</div>;
};

export default ProtectedRoutes;
