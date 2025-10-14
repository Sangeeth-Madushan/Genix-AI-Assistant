import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BouncingBallsAnimation = ({
  ballCount = 40, 
  color = "#ffffff",
  sizeRange = [8, 15],
  speedRange = [2, 6],
  className = "",
  interactive = true,
  brightness = "normal"
}) => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const generateBalls = () => {
      const newBalls = Array.from({ length: ballCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        duration: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
        delay: Math.random() * 2,
        opacity: brightness === "high" 
          ? Math.random() * 0.4 + 0.6 
          : Math.random() * 0.3 + 0.4, 
      }));
      setBalls(newBalls);
    };

    generateBalls();
  }, [ballCount, sizeRange, speedRange, brightness]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
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
          whileHover={interactive ? { 
            scale: 1.8, 
            opacity: 0.8,
            transition: { duration: 0.2 }
          } : {}}
        />
      ))}
    </div>
  );
};

export default BouncingBallsAnimation;