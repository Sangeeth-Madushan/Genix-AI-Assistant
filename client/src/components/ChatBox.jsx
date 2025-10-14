import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Message from "./Message";

const ChatBox = () => {
  const messagesEndRef = useRef(null);

  const { selectedChat, theme } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("text");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  return (
    <div className="flex flex-col flex-1 m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40 h-[calc(100vh-100px)]">
      {/* chat messages */}
      <div className="flex-1 pr-2 mb-4 overflow-y-auto">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-primary">
            <img
              src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
              className="w-full max-w-56 sm:max-w-68"
            />
            <p className="mt-5 text-4xl text-center text-gray-400 sm:text-6xl dark:text-white">
              Ask me anything.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {loading && (
          <div className="flex items-center loader gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* image publish checkbox */}
      {mode === "image" && (
        <label className="inline-flex items-center gap-2 mx-auto mb-2 text-sm">
          <p className="text-sm invert-0 dark:invert">Publish Generated Image to Community</p>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </label>
      )}

      {/* input box (fixed at bottom) */}
      <form
        onSubmit={onSubmit}
        className="sticky bottom-0 bg-primary/20 dark:bg-[#583C79]/30 border border-primary dark:border-[#80609F]/30 
        rounded-full w-full max-w-4xl md:p-3 md:pl-4 p-2 pl-3 mx-auto flex gap-2 md:gap-4 items-center 
        transition-all duration-300 backdrop-blur-lg"
      >
        <select
          onChange={(e) => setMode(e.target.value)}
          value={mode}
          className="w-20 pl-2 pr-1 text-sm text-gray-800 bg-transparent outline-none appearance-none md:pl-3 md:pr-2 dark:text-gray-200 dark:bg-transparent md:w-28 shrink-0"
        >
          <option
            className="dark:bg-[#2a2038] bg-white text-gray-800 dark:text-gray-200"
            value="text"
          >
            Text
          </option>
          <option
            className="dark:bg-[#2a2038] bg-white text-gray-800 dark:text-gray-200"
            value="image"
          >
            Image
          </option>
        </select>

        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 min-w-0 text-base text-gray-800 placeholder-gray-500 bg-transparent outline-none dark:text-gray-200 dark:placeholder-gray-400"
        />

        <button disabled={loading} className="shrink-0">
          <img
            src={loading ? assets.stop_icon : assets.send_icon}
            className="cursor-pointer w-7 h-7 md:w-8 md:h-8"
          />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
