/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useState } from "react";

interface IChatItem {
  title?: string;
  sender?: string;
  isGroup?: boolean;
  isRead?: boolean;
  timestamp?: string;
  handleSelectChat: (chat: any) => void;
}

export default function ChatItem({
  isGroup,
  isRead,
  sender,
  title,
  handleSelectChat,
}: IChatItem) {
  return (
    <div
      onClick={() => handleSelectChat({ id: 1 })}
      tw="flex items-center py-6  hover:bg-gray-100 border-b cursor-pointer"
    >
      <div tw="w-20 h-auto">
        {isGroup && sender ? (
          <div tw="w-full relative flex justify-center">
            <div
              style={{ backgroundColor: "#E0E0E0" }}
              tw="w-8 h-8 rounded-full flex items-center justify-center "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1755 5.02924C12.3969 5.02924 10.1463 7.27982 10.1463 10.0585C10.1463 12.8371 12.3969 15.0877 15.1755 15.0877C17.9542 15.0877 20.2048 12.8371 20.2048 10.0585C20.2048 7.27982 17.9542 5.02924 15.1755 5.02924ZM17.6901 10.0585C17.6901 8.67546 16.5585 7.54388 15.1755 7.54388C13.7924 7.54388 12.6609 8.67546 12.6609 10.0585C12.6609 11.4415 13.7924 12.5731 15.1755 12.5731C16.5585 12.5731 17.6901 11.4415 17.6901 10.0585ZM22.7193 22.6316C22.4678 21.7389 18.5702 20.117 15.1754 20.117C11.7933 20.117 7.92076 21.7263 7.63158 22.6316H22.7193ZM5.117 22.6316C5.117 19.2871 11.8185 17.6023 15.1755 17.6023C18.5325 17.6023 25.234 19.2871 25.234 22.6316V25.1462H5.117V22.6316Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <div
              style={{
                backgroundColor: "#2F80ED",
              }}
              tw="w-8 h-8 rounded-full flex items-center justify-center -ml-4"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1755 5.02924C12.3969 5.02924 10.1463 7.27982 10.1463 10.0585C10.1463 12.8371 12.3969 15.0877 15.1755 15.0877C17.9542 15.0877 20.2048 12.8371 20.2048 10.0585C20.2048 7.27982 17.9542 5.02924 15.1755 5.02924ZM17.6901 10.0585C17.6901 8.67546 16.5585 7.54388 15.1755 7.54388C13.7924 7.54388 12.6609 8.67546 12.6609 10.0585C12.6609 11.4415 13.7924 12.5731 15.1755 12.5731C16.5585 12.5731 17.6901 11.4415 17.6901 10.0585ZM22.7193 22.6316C22.4678 21.7389 18.5702 20.117 15.1754 20.117C11.7933 20.117 7.92076 21.7263 7.63158 22.6316H22.7193ZM5.117 22.6316C5.117 19.2871 11.8185 17.6023 15.1755 17.6023C18.5325 17.6023 25.234 19.2871 25.234 22.6316V25.1462H5.117V22.6316Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div tw="w-full flex justify-center">
            <div
              style={{
                backgroundColor: "#2F80ED",
              }}
              tw="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <h1 tw="text-white text-2xl"> {(sender && sender[0]) || "A"} </h1>
            </div>
          </div>
        )}
      </div>
      <div tw="flex-grow ">
        <p style={{ color: "#2F80ED" }} tw="font-semibold">
          {title ? title : sender}
        </p>
        {isGroup && <p tw="text-sm font-semibold">{sender} : </p>}
        <p tw="text-xs">Please check this out!</p>
      </div>
      <div tw="flex-none w-28 h-auto text-right px-2">
        <p tw="text-xs"> 09/06/2021 19:10 </p>
        <br />
        {isRead && (
          <div tw="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="red"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
