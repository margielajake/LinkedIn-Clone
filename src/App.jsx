import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      <div className="flex ">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
