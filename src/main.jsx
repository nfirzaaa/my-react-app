// import { ConfigProvider } from 'antd'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <ConfigProvider>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </ConfigProvider>
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import "./index.css";
import { ThemeConfig } from "./themes/themeConfig";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={ThemeConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);