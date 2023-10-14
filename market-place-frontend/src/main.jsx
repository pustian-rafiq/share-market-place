import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#405138",
            colorPrimaryHover: "#405138",
            borderRadius: "3px",
          },
        },
        token: {
          borderRadius: "3px",
        },
      }}
    >
      <App />
      <Toaster />
    </ConfigProvider>
  </Provider>
);
