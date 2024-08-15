"use client";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = React.useState("");
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

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/user");

    const userData = response.data.data._id;

    setData(userData);
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
      <button
        onClick={getUserDetails}
        className="bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded hover:bg-green-900 cursor-pointer"
      >
        Get User Details
      </button>
      <h2 className="rounded-lg bg-purple-600 p-4  mt-4 font-bold hover:bg-purple-800 cursor-pointer">
        {data === "" ? (
          "No user data found"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <ToastContainer position="top-right" />
    </div>
  );
}
