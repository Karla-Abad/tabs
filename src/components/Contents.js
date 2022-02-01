import React, { useState } from "react";
import "../App.css";

const Contents = (props) => {
  const { allTabs, currentTabIndex } = props;

  return <div className="contents">{allTabs[currentTabIndex].content}</div>;
};

export default Contents;
