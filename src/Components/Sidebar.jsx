import { Avatar } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar sticky top-20 flex-1 text-center ">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center border-[1px] bg-white pb-[10px] border-b-0 rounded-t-[10px]">
          <img
            src="https://images.unsplash.com/flagged/photo-1554443883-83db889b4007?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt="linkedin-wallpaper"
            className="m-[-20px] w-[100%] h-14 object-cover rounded-t-[10px]"
          />
          <Avatar />
          <h2 className=" font-bold text-xl">Jake Campbell</h2>
          <p className="text-sm">
            Graphics Designer. Team Lead. Web Developer.
          </p>
        </div>
        <div className="sidebar-stats">
          <div className="sidebar-stat">
            <p>Who viewed you</p>
            <p>456</p>
          </div>
          <div className="sidebar-stat">
            <p>Views on post</p>
            <p>456</p>
          </div>
        </div>
      </div>
      <div className="sidebar-bottom">Recent</div>
    </div>
  );
}

export default Sidebar;
