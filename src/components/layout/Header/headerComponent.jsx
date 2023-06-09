import React from "react";
import {Layout,Menu, Row} from 'antd';
import { MENU_ITEM } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
const {Header} = Layout;
const [current, setCurrent] = useState('1');
const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
};
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
    <Row justify="space-between">
    <Link to="/home">
    <div
        style={{
          float: "left",
          width: 120,
          height: 31,
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.2)",
        }}
        onClick = {() => setCurrent("")}
      />
    </Link>
      
      <Menu
      // onClick={onClick} selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={MENU_ITEM}
        disabledOverflow
        onClick={onClick} 
        selectedKeys={[current]}
      />
    </Row>
    </Header>
  );
};

export default HeaderComponent;
