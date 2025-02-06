"use client";
import { toast } from "sonner";

interface ToastNotificationProps {
  message: string; // Message to dispaly
  icon: string;
  timer?: number; // Optional timer prop to control toast visibility duration
  border?: string;
}

const ToastNotification = ({
  message,
  timer = 4000,
  icon,
  border,
}: ToastNotificationProps) => {
  // Show the toast notification
  const showToast = () => {
    toast.custom(
      (t) => (
        <div
          style={{
            background: "linear-gradient(to right, #dc00d3, #46c6fd)",
            color: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            border,
          }}
        >
          <img
            src={icon}
            alt="icon"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          <span>{message}</span>
        </div>
      ),
      {
        duration: timer,
      }
    );
  };

  return { showToast };
};

export default ToastNotification;
