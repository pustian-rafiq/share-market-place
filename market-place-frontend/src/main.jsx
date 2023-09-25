import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#405138",
            colorPrimaryHover: "#405138",
            borderRadius: "3px",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
