import React, { useState } from "react";
import "../App.css";

const Tabs = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "unselectedTab";
    }
  };

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <div style={{ width: "fit-content" }}>
      {allTabs.map((item, index) => (
        <div
          className={`tab ${tabStyle(index)}`}
          onClick={(e) => setSelectedTab(index)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
