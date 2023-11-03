import { useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProtectedRoutes from "./components/protectedRoutes";
import Loader from "./components/shared/Loader";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";

function App() {
  const { loading } = useSelector((state) => state.loading);
  const Layout = () => {
    return (
      <div>
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          ),
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ]);

  return (
    <div>
      {loading && <Loader />}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
