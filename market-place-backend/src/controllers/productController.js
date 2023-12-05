const Product = require("../models/product");

// Add new product
const addProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const result = await newProduct.save();
    if (result) {
      res.send({
        success: true,
        message: "Product added successfully",
      });
    } else {
      res.send({
        success: false,
        message: "Product not added",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Edit product
const editProduct = async (req, res, next) => {
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
      res.send({
        success: true,
        message: "Product updatd successfully",
      });
    } else {
      res.send({
        success: false,
        message: "Product not updated",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Get all product
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length > 0) {
      res.send({
        success: true,
        products,
      });
    } else {
      res.send({
        success: true,
        menubar: "No products available",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Get single product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (product) {
      res.send({
        success: true,
        product,
      });
    } else {
      res.send({
        success: true,
        menubar: "No product available with this product ID",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Delete product
const deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      res.send({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      res.send({
        success: false,
        message: "Product not updated",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  addProduct,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
};
