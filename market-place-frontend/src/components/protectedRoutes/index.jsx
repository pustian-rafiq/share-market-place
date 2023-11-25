import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../../apiCalls/users";
import { setLoading } from "../../redux/features/loader.slice";
import { setUser } from "../../redux/features/users.slice";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const validateToken = async () => {
    try {
      //This setLoading gets multiple times call the api
      // dispatch(setLoading(true));
      const response = await GetCurrentUser();

      dispatch(setLoading(false));
      if (response.success) {
        dispatch(setLoading(false));
        dispatch(setUser(response.user));
      } else {
        // dispatch(setLoading(false));
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
