import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* not good to use index as key */}
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Dinesh Pun",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border black p-2 w-80"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="px-2 mx-2 bg-green-100">Submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
