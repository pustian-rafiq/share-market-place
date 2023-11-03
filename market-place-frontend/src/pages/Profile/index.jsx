import { Tabs } from "antd";
import React from "react";
import Products from "./Products";

const ProfilePage = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Buy / Sell" key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bid" key="2">
          <h1>Bids</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="General" key="3">
          <h1>General</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
