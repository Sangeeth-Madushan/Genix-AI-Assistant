import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import moment from "moment";

const Sidebar = () => {
  const { user, chats, setSelectedChat, theme, setTheme, navigate } = useAppContext();
    
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col h-screen p-5 min-w-72 
  bg-white dark:bg-gradient-to-b from-[#1a181b] to-[#0f0e10] border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-10">
      {/* logo */}
      <img
        src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
        alt=""
        className="w-full max-w-48"
      />

      {/* New Chat Button */}
      <button className="flex items-center justify-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#2404a5] text-sm rounded-md cursor-pointer">
        <span className="mr-2 text-xl">+</span> New Chat
      </button>

      {/* Search Bar */}
      <div className="flex items-center gap-2 p-3 mt-4 bg-gray-300 border rounded-md dark:border-white /15">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 invert dark:invert-0 opacity-80"
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search conversations"
          className="text-xs text-gray-800 bg-transparent outline-none placeholder:text-gray-700"
          type="text"
        />
      </div>

      {/* Chats List */}
      {chats.length > 0 && <p className="mt-4 text-sm invert-0 dark:invert">Recent Chats</p>}
      <div className="flex-1 mt-3 space-y-3 overflow-y-scroll text-sm">
        {chats
          .filter((chat) =>
            chat.messages[0]
              ? chat.messages[0]?.content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              key={chat._id}
              className="flex justify-between p-2 px-4 border border-gray-300 rounded-md cursor-pointer dark:border-white /15 group "
            >
              <div>
                <p className="w-full truncate invert-0 dark:invert">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>

                <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                  {moment(chat.updatedAt).fromNow()}
                </p>
              </div>
              <img
                src={assets.bin_icon}
                className="hidden w-4 cursor-pointer group-hover:block invert dark:invert-0"
              />
            </div>
          ))}
      </div>

      {/* community Images */}

      <div
        onClick={() => {
          navigate("/community");
        }}
        className="flex items-center gap-2 p-3 mt-4 transition-transform duration-300 ease-in-out border border-gray-300 rounded-md cursor-pointer hover:scale-103 dark:border-white /15 hover:scale-105"
      >
        <img src={assets.gallery_icon} className="w-4 invert dark:invert-0" alt="" />
        <div className="flex flex-col text-sm">
          <p className="invert-0 dark:invert">Community Images</p>
        </div>
      </div>

      {/* Credits Purchases Option */}

      <div
        onClick={() => {
          navigate("/credits");
        }}
        className="flex items-center gap-2 p-3 mt-4 transition-transform duration-300 ease-in-out border border-gray-300 rounded-md cursor-pointer hover:scale-103 dark:border-white /15 hover:scale-105"
      >
        <img src={assets.diamond_icon} className="w-4 invert-0 dark:invert" alt="" />
        <div className="flex flex-col text-sm">
          <p className="invert-0 dark:invert">Credits : {user?.credits}</p>
          <p className="text-xs text-gray-400">
            Purchase credits to use quickgpt
          </p>
        </div>
      </div>

      {/* Mode Toggle */}

      <div className="flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 rounded-md dark:border-white /15">
        <div className="flex items-center gap-2 text-sm">
          <img src={assets.theme_icon} className="w-4 invert dark:invert-0" alt=""/>
          <p className="invert-0 dark:invert">Dark Mode</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="checkbox"
            className="sr-only peer"
            checked={theme === "dark"}
            readOnly
          />

          {/* Track */}
          <div className="h-5 transition-all bg-gray-300 rounded-full w-9 dark:bg-gray-600 peer-checked:bg-purple-600"></div>

          {/* Thumb */}
          <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
        </label>
      </div>


      {/* User Account */}
      <div 
        className="flex items-center gap-3 p-3 mt-4 border border-gray-300 rounded-md cursor-pointer dark:border-white /15 group "
      >
        <img src={assets.user_icon} className="rounded-full w-7 invert-0 dark:invert-0" alt="" />
          <p className="invert-0 dark:invert">{user? user.name : 'Login your account'}</p>
            {user && <img src={assets.logout_icon}  className="absolute hidden h-5 cursor-pointer right-8 invert dark:invert-0 group-hover:block"/>}
      </div>

    </div>
  );
};

export default Sidebar;



