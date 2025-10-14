import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BouncingBallsAnimation = ({
  ballCount = 40,
  color = "#ffffff",
  sizeRange = [8, 15],
  speedRange = [2, 6],
  className = "",
  interactive = true,
  brightness = "normal",
}) => {
  const [balls, setBalls] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate floating balls
  useEffect(() => {
    const newBalls = Array.from({ length: ballCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
      duration:
        Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
      delay: Math.random() * 2,
      opacity:
        brightness === "high"
          ? Math.random() * 0.4 + 0.6
          : Math.random() * 0.3 + 0.4,
    }));
    setBalls(newBalls);
  }, [ballCount, sizeRange, speedRange, brightness]);

  // Shooting stars: fall from top-right to 3 random left locations
  useEffect(() => {
    const possibleEndPositions = [10, 40, 70]; 
    const interval = setInterval(() => {
      const id = Date.now();

      const endX = possibleEndPositions[Math.floor(Math.random() * 3)];
      const endY = Math.random() * 60 + 30;

      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 2.5 + 2.8; 

      const newStar = {
        id,
        size,
        duration,
        endX,
        endY,
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, duration * 1000);
    }, Math.random() * 3000 + 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Floating Bouncing Balls */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute rounded-full"
          style={{
            left: `${ball.left}%`,
            top: `${ball.top}%`,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            backgroundColor: color,
            opacity: ball.opacity,
            border: `1px solid ${color}40`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [ball.opacity, ball.opacity * 1.6, ball.opacity],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={
            interactive
              ? {
                  scale: 1.8,
                  opacity: 0.8,
                  transition: { duration: 0.2 },
                }
              : {}
          }
        />
      ))}

      {/* Shooting Stars (top-right to random left positions) */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full shadow-md"
          style={{
            width: `${star.size * 5}px`,
            height: `${star.size}px`,
            top: "0%",
            right: "0%",
            background: `linear-gradient(90deg, ${color}, transparent)`,
            opacity: 0.8,
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: `-${100 - star.endX}vw`, 
            y: `${star.endY}vh`,
            opacity: 0,
          }}
          transition={{
            duration: star.duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBallsAnimation;

