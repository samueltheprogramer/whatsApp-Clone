"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar() {
  return (
    <div className="flex w-full bg-gray-200 rounded-2xl p-2 items-center gap-2 mt-[45px]">
      <div>
        <IoSearchOutline className="text-xl text-gray-500 font-extrabold " />
      </div>
      <h1 className="text-sm text-gray-500 font-normal ">Search...</h1>
    </div>
  );
}
