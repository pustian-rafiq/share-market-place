import { Col, Form, Input, Modal, Row, Tabs, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewProduct, EditProduct } from "../../../apiCalls/productsApi";
import { setLoading } from "../../../redux/features/loader.slice";

const additionalThings = [
  {
    label: "Bill Available",
    name: "billAvailable",
  },
  {
    label: "Warranty Available",
    name: "warrantyAvailable",
  },
  {
    label: "Accessories Available",
    name: "accessoriesAvailable",
  },
  {
    label: "Box Available",
    name: "boxAvailable",
  },
];
const rules = [
  {
    required: true,
    message: "Please fill up this field",
  },
];

const ProductForm = ({
  showProductForm,
  setShowProductForm,
  editProduct,
  getProductsData,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const onFinish = async (values) => {
    console.log("user", user);
    let result;
    try {
      dispatch(setLoading(true));

      if (editProduct) {
        result = await EditProduct(editProduct._id, values);
      } else {
        values.seller = user?._id;
        values.status = "pending";
        result = await AddNewProduct(values);
      }
      dispatch(setLoading(false));
      if (result.success) {
        message.success(result.message);
        setShowProductForm(false);
      } else {
        message.error(result.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      message.error(error);
    }
  };
  const formRef = useRef(null);

  useEffect(() => {
    if (editProduct) {
      formRef.current.setFieldsValue(editProduct);
    }
  }, [editProduct]);
  return (
    <Modal
      title=""
      open={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
      width={1000}
      okText="Save"
      onOk={() => formRef.current.submit()}
    >
      <div>
        <h1 className="text-2xl text-center text-semibold text-primary">
          {editProduct ? "Edit Product" : "Add Product"}
        </h1>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="General" key="1">
            <Form layout="vertical" ref={formRef} onFinish={onFinish}>
              <Form.Item label="Name" name="name" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={rules}>
                <TextArea type="text" />
              </Form.Item>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Price" name="price" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Category" name="category" rules={rules}>
                    <select name="" id="" className="bg-white p-1">
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home</option>
                      <option value="sports">Sports</option>
                    </select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Age" name="age" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <div className="flex gap-10">
                {additionalThings?.map((item) => {
                  return (
                    <Form.Item
                      key={item.name}
                      label={item.label}
                      name={item.name}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldValue(item.name)}
                      />
                    </Form.Item>
                  );
                })}
              </div>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Images" key="2">
            <h1>Images</h1>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
};

export default ProductForm;
