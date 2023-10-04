import React from "react";

const lists = [
  "All",
  "Live",
  "Songs",
  "Live",
  "Football",
  "Web Development",
  "News",
  "Software Development",
  "Basketball",
  "Data Structure",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {lists.map((list) => (
        <button className="px-3 py-1 m-2 bg-gray-200 rounded-lg">{list}</button>
      ))}
    </div>
  );
};

export default ButtonList;
