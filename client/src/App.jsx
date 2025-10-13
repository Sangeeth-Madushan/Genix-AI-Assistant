
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Communitiy from "./pages/Communitiy";
import { assets } from "./assets/assets";

function App() {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>

    {!isMenuOpen && <img src={assets.menu_icon} className="absolute w-8 h-8 cursor-pointer top-3 left-3 md:hidden not-dark:invert" onClick={()=>setIsMenuOpen(true)} />}
      <div className="flex min-h-screen bg-white dark:bg-gradient-to-b from-[#1a181b] to-[#0f0e10] transition-all duration-500 ">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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