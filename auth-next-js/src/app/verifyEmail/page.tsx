"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"verified" | "error" | "idle">("idle");

  const verifyUserEmail = async (token: string) => {
    try {
      await axios.post("/api/users/verifyEmail", { token });
      setStatus("verified");
    } catch (error: any) {
      setStatus("error");
      console.error(
        "Error verifying email:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) {
      setToken(urlToken);
      verifyUserEmail(urlToken);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Verify Email</h1>

      {status === "idle" && (
        <h2 className="text-xl p-2 bg-orange-500 text-black">
          {token ? token : "No token provided!"}
        </h2>
      )}

      {status === "verified" && (
        <>
          <h2 className="text-2xl mb-4 bg-green-500 text-black">
            Email verified
          </h2>
          <Link href="/login" className="font-bold underline text-blue-500">
            Click here to login
          </Link>
        </>
      )}

      {status === "error" && (
        <h2 className="text-2xl mb-4 bg-red-500 text-black">
          Something went wrong!
        </h2>
      )}
    </div>
  );
}
