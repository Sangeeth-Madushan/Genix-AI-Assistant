
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Communitiy from "./pages/Communitiy";

function App() {
  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-gradient-to-b from-[#1a181b] to-[#0f0e10] transition-all duration-500 ">
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