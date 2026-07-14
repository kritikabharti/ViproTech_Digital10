// src/components/VerificationRequired.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function VerificationRequired() {
  const { user } = useAuth();
  const [resending, setResending] = useState(false);

  const resendVerification = async () => {
    setResending(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Verification email sent! Please check your inbox.");
      } else {
        toast.error(data.message || "Failed to send verification email");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="verification-required">
      <h2>⚠️ Email Not Verified</h2>
      <p>Please verify your email address to access this page.</p>
      <p>A verification link was sent to <strong>{user?.email}</strong></p>
      <button onClick={resendVerification} disabled={resending}>
        {resending ? "Sending..." : "Resend Verification Email"}
      </button>
    </div>
  );
}