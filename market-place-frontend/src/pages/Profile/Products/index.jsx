import { Button } from "antd";
import React, { useState } from "react";
import ProductForm from "./ProductForm";

const Products = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={() => setShowProductForm(true)} type="default">
          Add Product
        </Button>
      </div>
      {showProductForm && (
        <ProductForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
        />
      )}
    </div>
  );
};

export default Products;
