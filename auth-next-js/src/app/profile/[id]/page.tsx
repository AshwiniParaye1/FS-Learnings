import React from "react";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1> User Profile </h1>
      <hr />
      <h1>
        This is{" "}
        <span className="font-bold bg-orange-500 text-black text-3xl">
          {params.id}
        </span>{" "}
        's profile page
      </h1>
    </div>
  );
}
