import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import ImportOption from "./ImportOption";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import { colRef } from "../features/firebase";
import {
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(colRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(postsArray);
    });
    return () => unsubscribe();
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: "Jake Campbell",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="flex-[0.6] mx-5">
      <div className="bg-white p-2 pb-5 rounded-[10px] mb-5 ">
        <div className="border-[1px] rounded-[30px] flex p-2 text-gray-400 pl-[15px]">
          <CreateIcon />
          <form className="flex w-[100%]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-none flex-1 ml-2 outline-none focus:outline-none font-[600]"
            />
            <button onClick={sendPost} type="submit" className="hidden">
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
