import { Avatar } from "@mui/material";
import React from "react";
import ImportOption from "./ImportOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { grey } from "@mui/material/colors";

function Posts({ name, description, message, photoUrl }) {
  return (
    <div className="bg-white p-4 mb-2 rounded-[10px]">
      <div className="flex mb-3">
        <Avatar />
        <div className="ml-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-[12px] text-gray-400">{description}</p>
        </div>
      </div>
      <div className=" flex-wrap">
        <p className="mb-2">{message}</p>
      </div>
      <div className="flex items-center text-gray-400 ">
        <ImportOption Icon={ThumbUpAltOutlinedIcon} title="Like" color={grey} />
        <ImportOption Icon={ChatOutlinedIcon} title="Comment" color={grey} />
        <ImportOption Icon={ShareOutlinedIcon} title="Share" color={grey} />
        <ImportOption Icon={SendOutlinedIcon} title="Send" color={grey} />
      </div>
    </div>
  );
}

export default Posts;
