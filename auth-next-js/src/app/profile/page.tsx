"use client";

import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful!");
      router.push("/login");
    } catch (error: any) {
      console.log("Something went wrong! ", error);
      toast.error("Something went wrong with logout!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded hover:bg-blue-700 cursor-pointer"
      >
        Logout
      </button>
      <ToastContainer position="top-right" />
    </div>
  );
}
