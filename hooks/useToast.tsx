"use client";

import Toast from "@/components/customToast/Toast";
import React, { createContext, useContext, useState, ReactNode } from "react";


type ToastType = "success" | "error" | "info" | "warning";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    duration: number;
  } | null>(null);

  const showToast = (
    message: string,
    type: ToastType = "info",
    duration: number = 7000
  ) => {
    setToast({ message, type, duration });
  };

  const closeToast = () => setToast(null);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
