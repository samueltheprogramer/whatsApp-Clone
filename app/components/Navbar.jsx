"use client";

import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="bg-white flex p-2 w-full rounded-sm justify-between items-center fixed top-0 left-0  transition-transform duration-300 transform translate-y-0">
      <h1 className="text-green-400 font-semibold text-2xl">WhatsApp</h1>
      <div className="flex gap-4">
        <h1 className="">
          <IoCameraOutline className="w-5 text-xl font-bold" />
        </h1>
        <h1>
          <BsThreeDotsVertical className="w-5 text-xl font-bold" />
        </h1>
      </div>
    </div>
  );
}
