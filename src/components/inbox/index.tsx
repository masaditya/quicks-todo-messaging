/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useState } from "react";
import { Search } from "react-feather";
import ChatItem from "./Chat/ChatItem";

export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState<any>();

  return (
    <div
      tw="border-2 rounded-md py-6 px-8"
      style={{
        width: 734,
        height: 734,
        position: "fixed",
        bottom: 100,
        right: 30,
      }}
    >
      {!selectedChat ? (
        <>
          <div tw="border rounded-md">
            <div tw="flex flex-wrap w-full relative items-center">
              <input
                type="text"
                tw=" flex-grow border-0 h-9 px-3 relative outline-none bg-transparent"
                placeholder="Search"
              />
              <div tw="flex -mr-px">
                <span tw="flex items-center bg-transparent rounded rounded-l-none border-0 px-3 text-gray-600">
                  <Search size={20} />
                </span>
              </div>
            </div>
          </div>

          <ChatItem
            handleSelectChat={setSelectedChat}
            isRead
            sender={"Aditya Eka"}
          />
          <ChatItem
            handleSelectChat={setSelectedChat}
            isRead={false}
            isGroup
            title="Backoffice Group"
            sender={"Aditya Eka"}
          />
        </>
      ) : (
        <> Detail Chat </>
      )}
    </div>
  );
}
