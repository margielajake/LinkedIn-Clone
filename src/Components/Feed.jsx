import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import ImportOption from "./ImportOption";

const Feed = () => {
  return (
    <div className="flex-[0.6] mx-5">
      <div className="bg-white p-2 pb-5 rounded-[10px] mb-5 ">
        <div className="border-[1px] rounded-[30px] flex p-2 text-gray-400 pl-[15px]">
          <CreateIcon />
          <form className="flex w-[100%]">
            <input
              type="text"
              className="border-none flex-1 ml-2 outline-none focus:outline-none font-[600]"
            />
            <button type="submit" className="hidden">
              Send
            </button>
          </form>
          <div>
            <ImportOption Icon={ImageIcon} title="Image" color="#70B5F9" />
            <ImportOption Icon={ImageIcon} title="Image" color="#70B5F9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
