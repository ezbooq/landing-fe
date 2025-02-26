"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  onClose,
  duration = 3000,
}) => {
  
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  
  const toastColors = {
    success: "border-l-primary",
    error: "border-l-red-500",
    info: "border-l-blue-500",
    warning: "border-l-yellow-500",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`bg-secondary fixed bottom-4 right-4 ml-4 z-50 px-4 py-4 rounded-lg shadow-lg text-black border border-l-4 ${
          toastColors[type]
        }`}
      >
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-black font-bold hover:opacity-80"
          >
            &times;
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;