
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Communitiy from "./pages/Communitiy";

function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#2A2A2A] dark:to-[#1E1E1E] ">
        <Sidebar />
        {/* 2. Wrap Routes in a main tag that grows to fill the space */}
        <main className="flex-grow p-4 md:p-6">
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Communitiy />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;