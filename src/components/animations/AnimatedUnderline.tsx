"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedUnderlineProps {
  children: ReactNode;
  color?: string;
  delay?: number;
  className?: string;
}

export function AnimatedUnderline({
  children,
  color = "#FCBA04",
  delay = 0,
  className = "",
}: AnimatedUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.div
        className="absolute -bottom-1 left-0 h-[6px]"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
    </span>
  );
}
