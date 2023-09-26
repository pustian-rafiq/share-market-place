/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { LoginUser } from "../../apiCalls/users";
import Divider from "../../components/shared/Divider";
const rules = [
  {
    required: true,
    message: "This field is required",
  },
];

const LoginPage = () => {
  const onFinish = async (values) => {
    console.log("Success", values);
    try {
      const response = await LoginUser(values);
      console.log(response);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="h-screen bg-primary flex items-center justify-center">
        <div className="bg-white p-5 rounded w-[450px]">
          <h1 className="text-primary text-2xl">
            SMP - <span className="text-gray-400">LOGIN</span>
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
            <Form.Item name="email" label="Email" rules={rules}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={rules}>
              <Input type="password" placeholder="Enter your password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            <div className="mt-5 text-center">
              <span className="text-gray-500">
                Don't have an aacount?{" "}
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
