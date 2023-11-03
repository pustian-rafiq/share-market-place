import { Col, Form, Input, Modal, Row, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useRef } from "react";

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
const ProductForm = ({ showProductForm, setShowProductForm }) => {
  const onFinish = (values) => {
    console.log("values", values);
  };
  const formRef = useRef(null);
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
      <h1>Product Form</h1>
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
    </Modal>
  );
};

export default ProductForm;
