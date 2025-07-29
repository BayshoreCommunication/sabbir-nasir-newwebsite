"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
  duration?: number;
  whileHover?: any;
  whileTap?: any;
  onClick?: () => void;
}

const MotionDiv = ({
  children,
  className = "",
  variants,
  delay = 0,
  duration,
  whileHover,
  whileTap,
  onClick,
}: MotionDivProps) => {
  const customVariants = variants
    ? {
        ...variants,
        transition: {
          ...variants.transition,
          delay: delay,
          duration: duration || variants.transition?.duration,
        },
      }
    : undefined;

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="initial"
      animate="animate"
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
