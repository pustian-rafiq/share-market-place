import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../../apiCalls/users";
import { setLoading } from "../../redux/features/loader.slice";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const validateToken = async () => {
    try {
      dispatch(setLoading(true));
      const response = await GetCurrentUser();
      console.log("GetCurrentUser", response.user);
      if (response.success) {
        dispatch(setLoading(false));
        setUser(response.user);
      } else {
        dispatch(setLoading(false));
        navigate("/login");
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      navigate("/login");
      toast.error(error.message);
    }
  };

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
