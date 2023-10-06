import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Api } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 230);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  /*
key - when i write (i)
-render the component
-useEffect();
start timer=>

key - when i write (ip)
-destroy the component(useEffect return method)
-re-render the component
-useEffect()
-start timer=> make api call after 200ms

*/

  const getSearchSuggestions = async () => {
    console.log("API CALL" + searchQuery);
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer ">
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
        <div>
          <input
            className="w-1/2 border broder-gray-400  p-1 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-400 p-1 px-5 py-1 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 rounded lg shadow-lg cursor-pointer border border-gray-100 ">
            <ul>
              {suggestions.map((sugg) => (
                <li key={sugg} className="py-2 hover:bg-gray-100">
                  🔍 {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
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
