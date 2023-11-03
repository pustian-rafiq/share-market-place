import { axiosInstance } from "../aixosInstance";

// Register
export const RegisterUser = async (payload) => {
  try {
    const reponse = await axiosInstance.post("/api/auth/register", payload);
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};

// Login
export const LoginUser = async (payload) => {
  try {
    const reponse = await axiosInstance.post("/api/auth/login", payload);
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};

// Get Logged in user
export const GetCurrentUser = async (payload) => {
  console.log("bbbb");
  try {
    const reponse = await axiosInstance.get("/api/users/loggedin", payload);
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};
