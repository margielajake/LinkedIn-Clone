import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
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
        </div>
        <div className="flex justify-evenly mt-4 cursor-pointer">
          <ImportOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <ImportOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <ImportOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <ImportOption
            Icon={CalendarViewDayIcon}
            title="WriteArticle"
            color="#7FC15E"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
