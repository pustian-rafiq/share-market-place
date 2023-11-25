import { axiosInstance } from "../aixosInstance";

// Add product
export const AddNewProduct = async (payload) => {
  try {
    const reponse = await axiosInstance.post("/api/products/add", payload);
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};

// Get products
export const GetProducts = async () => {
  try {
    const reponse = await axiosInstance.get("/api/products");
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};
