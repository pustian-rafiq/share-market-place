import { Button, Divider, Form, Input } from "antd";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apiCalls/users";
import { setLoading } from "../../redux/features/loader.slice";
const rules = [
  {
    required: true,
    message: "This field is required",
  },
];
const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("Success", values);
    try {
      dispatch(setLoading(true));
      const response = await RegisterUser(values);
      console.log(response);
      if (response.success) {
        dispatch(setLoading(false));
        toast.success(response.message);
        navigate("/login");
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="h-screen bg-primary flex items-center justify-center">
        <div className="bg-white p-5 rounded w-[450px]">
          <h1 className="text-primary text-2xl">
            SMP - <span className="text-gray-400">REGISTER</span>
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
            <Form.Item name="name" label="Name" rules={rules}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={rules}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={rules}>
              <Input type="password" placeholder="Enter your password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
            <div className="mt-5 text-center">
              <span className="text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
