import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10"
          alt="menu"
          src="https://cdn0.iconfinder.com/data/icons/basic-ui-vol-1/32/UI_stroke-05-512.png"
        ></img>
        <a href="/">
          <img
            className="h-11 mx-3"
            alt="Youtube"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border broder-gray-400  p-1 rounded-l-full"
          type="text"
        ></input>
        <button className="border border-gray-400 p-1 px-5 py-1 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="user"
          src="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
