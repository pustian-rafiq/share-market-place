import { Button, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteProduct, GetProducts } from "../../../apiCalls/productsApi";
import { setLoading } from "../../../redux/features/loader.slice";
import ProductForm from "./ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-5">
            <i
              className="ri-delete-bin-line cursor-pointer"
              onClick={() => {
                deleteProductHandler(record._id);
              }}
            ></i>
            <i
              className="ri-pencil-line cursor-pointer"
              onClick={() => {
                setEditProduct(record);
                setShowProductForm(true);
              }}
            ></i>
          </div>
        );
      },
    },
  ];
  const getProductsData = async () => {
    try {
      // dispatch(setLoading(true));
      const result = await GetProducts();
      dispatch(setLoading(false));
      console.log(result);
      if (result.success) {
        setProducts(result.products);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };
  const deleteProductHandler = async (id) => {
    try {
      dispatch(setLoading(true));

      const response = await DeleteProduct(id);
      if (response.success) {
        message.success(response.message);
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    console.log("useEffect() called");
    getProductsData();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button onClick={() => setShowProductForm(true)} type="default">
          Add Product
        </Button>
      </div>

      <Table columns={columns} dataSource={products} />
      {showProductForm && (
        <ProductForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          editProduct={editProduct}
          getProductsData={getProductsData}
        />
      )}
    </div>
  );
};

export default Products;
