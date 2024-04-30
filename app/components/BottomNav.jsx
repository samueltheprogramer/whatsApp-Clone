"use client"
import React from "react";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineCall } from "react-icons/md";
export default function BottomNav() {
  return (
    <div className="flex items-center justify-around w-full p-2 mt-2 fixed bottom-0 left-0  transition-transform duration-300 transform translate-y-0 bg-white">
      <div className="flex flex-col items-center justify-around gap-2 ">
        <div className="hover:bg-green-300  rounded-3xl">
          <BsChatSquareText className="font-semibold text-xl w-10 m-2" />
        </div>
        <h1 className="text-sm text-black">Chats</h1>
      </div>
      <div className="flex flex-col items-center justify-around gap-2">
        <div className="hover:bg-green-300  rounded-3xl">
          <MdOutlineTipsAndUpdates className="font-semibold text-xl w-10 m-2" />
        </div>
        <h1 className="text-sm text-black">Updates</h1>
      </div>
      <div className="flex flex-col items-center justify-around gap-2">
        <div className="hover:bg-green-300  rounded-3xl">
          <IoIosPeople className="font-semibold text-xl w-10 m-2" />
        </div>
        <h1 className="text-sm text-black">Communites</h1>
      </div>
      <div className="flex flex-col items-center justify-around gap-2">
        <div className="hover:bg-green-300  rounded-3xl">
          <MdOutlineCall className="font-semibold text-xl w-10 m-2" />
        </div>
        <h1 className="text-sm text-black">Calls</h1>
      </div>
    </div>
  );
}
