import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center m-2">
        <img
          className="h-7 col-span-1"
          alt="user"
          src="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        ></img>
        <span className="font-bold px-3">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
