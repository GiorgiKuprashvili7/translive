import { useState } from "react";

interface ToastProps {
  title: string;
  message: string;
  type: "success" | "error" | "warning";
}

const useToastNotification = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);
  let timeoutId: number | undefined;

  const showToast = (
    title: string,
    message: string,
    type: ToastProps["type"]
  ): void => {
    setToast({ title, message, type });
    timeoutId = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const closeToast = (): void => {
    if (toast) {
      clearTimeout(timeoutId);
      setToast(null);
    }
  };

  return { toast, showToast, closeToast };
};

export default useToastNotification;
