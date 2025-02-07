"use client";
import { toast } from "sonner";
import { ReactNode } from "react"; // Import ReactNode for JSX support

interface ToastNotificationProps {
  message: ReactNode; // Now supports multi-line JSX messages
  timer?: number; // Optional timer prop to control toast visibility duration
  border?: string;
}

const ToastNotification = ({
  message,
  timer = 7000,
  border,
}: ToastNotificationProps) => {
  // Show the toast notification
  const showToast = () => {
    toast.custom(
      () => (
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
            flexDirection: "column", // Ensure multiple lines align properly
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "4px" }}>
            Message Status
          </span>
          <span style={{ fontSize: "1.1rem", lineHeight: "2" }}>{message}</span>
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
