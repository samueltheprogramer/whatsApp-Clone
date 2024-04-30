"use client";
import Image from "next/image";
import { messagesArray } from "../messageArray";

export default function HomeFeeds() {
  return (
    <div className="flex flex-col w-full justify-center mt-4 gap-4 mb-[80px]">
      {messagesArray?.map((message) => (
        <div className="flex" key={message.name}>
          <Image
            src={message.src}
            width={48}
            height={48}
            alt="image"
            className="w-14 h-12 rounded-full mr-3 bg-center"
          />
          <div className="flex justify-between w-full ">
            <div>
              <h1 className="text-black  font-semibold">{message.name}</h1>
              <h1 className="text-sm">{message.message}</h1>
            </div>

            <p className="text-[10px] text-gray-500">{message.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
