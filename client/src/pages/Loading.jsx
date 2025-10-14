

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; 

const loadingMessages = [
  'Initializing session...',
  'Loading assets...',
  'Connecting to servers...',
  'Almost there...',
];

const Loading = () => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // navigation after a delay
  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      navigate('/');
    }, 8000); 

    return () => clearTimeout(navigateTimeout);
  }, [navigate]);

  // loading messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2000); 

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#531B81] to-[#29184B] text-white'>
      <div className='flex flex-col items-center gap-6'>
        
        <img
          src={assets.logo_full} 
          alt="Loading Logo"
          className="w-48 animate-pulse"
        />

        <div className="flex items-center gap-4">
          <p className="text-lg text-gray-300 transition-opacity duration-500">
            {loadingMessages[currentMessageIndex]}
          </p>

          <div className="dot-flashing">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Loading;
