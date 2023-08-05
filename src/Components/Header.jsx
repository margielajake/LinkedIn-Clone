import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="flex justify-evenly my-2 border-b-2">
      <div className="sticky top-0 flex items-center m-0 ">
        <img
          src="https://img.icons8.com/doodle/256/linkedin--v2.png"
          alt="linkedin-icon"
          style={{ objectFit: "contain", height: 40 }}
          className="mr-[10px]"
        />
        <div className="search-input m-2 flex items-center justify-center border bg-gray-200 rounded-md h-10 px-2">
          <SearchIcon />
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent outline-transparent border-0 focus:outline-none"
          />
        </div>
      </div>
      <div className="header-right flex justify-evenly">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="" title="Me" />
      </div>
    </div>
  );
}

export default Header;
