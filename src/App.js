import Tabs from "./components/Tabs";
import Contents from "./components/Contents";
import React, { useState } from "react";
import "./App.css";

function App() {
  const tabsArr = [
    { label: "Tab 1", content: "Tab 1 content is showing here." },
    { label: "Tab 2", content: "Tab 2 content is showing here." },
    { label: "Tab 3", content: "Tab 3 content is showing here." },
  ];

  const [allTabs, setAllTabs] = useState(tabsArr);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <Tabs
        allTabs={allTabs}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <Contents allTabs={allTabs} currentTabIndex={currentTabIndex} />
    </div>
  );
}

export default App;
