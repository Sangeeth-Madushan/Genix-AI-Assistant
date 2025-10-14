import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Communitiy from "./pages/Communitiy";
import { assets } from "./assets/assets";
import "./assets/prism.css";
import Loading from "./pages/Loading";
import { useAppContext } from "./context/AppContext";
import Login from "./pages/Login";
import StarBouncingAnimation from "./components/FinisherHeader";

function App() {
  const { user } = useAppContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/loading") {
    return <Loading />;
  }

  return (
    <>
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          className="absolute w-8 h-8 cursor-pointer top-3 left-3 md:hidden invert dark:invert-0"
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      {user ? (
        <div className="flex h-screen bg-white dark:bg-gradient-to-b from-[#1a181b] to-[#0f0e10] transition-all duration-500">
          <div className="hidden dark:block">
            <StarBouncingAnimation
              starCount={70}
              color="#A78BFA"
              sizeRange={[2, 4]}
              speedRange={[3, 7]}
              className="opacity-40"
              interactive={false}
            />
          </div>

          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {/* 2. Wrap Routes in a main tag that grows to fill the space */}
          <main className="flex-grow p-4 overflow-y-auto md:p-6">
            <Routes>
              <Route path="/" element={<ChatBox />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/community" element={<Communitiy />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="bg-[#09090b] flex items-center justify-center h-screen w-screen">
          <Login />
        </div>
      )}
    </>
  );
}

export default App;
