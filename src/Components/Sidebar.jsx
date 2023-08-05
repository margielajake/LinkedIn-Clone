import { Avatar } from "@mui/material";
import React from "react";

function Sidebar() {
  const recentItems = (topic) => (
    <div className="flex my-3 text-[14px] text-gray-500 cursor-pointer hover:rounded-[5px] hover:text-black hover:bg-gray-200">
      <span className="mx-1">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar sticky top-20 flex-[0.2] text-center">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center border-[1px] bg-white pb-[10px] border-b-0 rounded-t-[10px]">
          <img
            src="https://images.unsplash.com/flagged/photo-1554443883-83db889b4007?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt="linkedin-wallpaper"
            className="m-[-20px] w-[100%] h-14 object-cover rounded-t-[10px]"
          />
          <Avatar className="mb-2" />
          <h2 className=" font-bold text-xl mb-1">Jake Campbell</h2>
          <p className="text-[12px] text-gray-500 px-1">
            Graphics Designer. Team Lead. Web Developer.
          </p>
        </div>
        <div className="sidebar-stats text-[13px] font-[600]  text-gray-500 p-[10px] mb-[10px] border-[1px] rounded-b-[10px]">
          <div className="sidebar-stat flex justify-between ">
            <p>Who viewed you</p>
            <p className="text-blue-600">456</p>
          </div>
          <div className="sidebar-stat flex justify-between">
            <p>Views on post</p>
            <p className="text-blue-600">1,756</p>
          </div>
        </div>
      </div>
      <div className="sidebar-bottom  border-[1px] bg-white p-[10px] rounded-[10px] mt-[10px] text-left">
        Recent
        {recentItems("webdevelopment")}
        {recentItems("Officeclerk")}
        {recentItems("Humanresource")}
        {recentItems("programming")}
        {recentItems("Softwareengineering")}
        {recentItems("design")}
      </div>
    </div>
  );
}

export default Sidebar;
