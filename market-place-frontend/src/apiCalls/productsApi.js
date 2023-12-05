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

// Edit product
export const EditProduct = async (id, payload) => {
  try {
    const reponse = await axiosInstance.put(
      `/api/products/edit/${id}`,
      payload
    );
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};

// Delete product
export const DeleteProduct = async (id) => {
  try {
    const reponse = await axiosInstance.delete(`/api/products/${id}`);
    return reponse.data;
  } catch (error) {
    return error.message;
  }
};
