import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      <div className="flex mt-5 ">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
