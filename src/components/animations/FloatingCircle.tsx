"use client";

import { motion } from "framer-motion";

interface FloatingCircleProps {
  size: number;
  color: string;
  className?: string;
  delay?: number;
  floatRange?: number;
  duration?: number;
}

export function FloatingCircle({
  size,
  color,
  className = "",
  delay = 0,
  floatRange = 10,
  duration = 4,
}: FloatingCircleProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatRange, 0, floatRange, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    />
  );
}
