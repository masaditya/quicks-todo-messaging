/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useState } from "react";
import { Search } from "react-feather";
import ChatItem from "./Chat/ChatItem";
import ChatHeader from "./Chat/ChatHeader";
import ChatBalloon from "./Chat/ChatBalloon";

export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState<any>();

  return (
    <div
      tw="border-2 rounded-md "
      style={{
        width: 734,
        height: 734,
        position: "fixed",
        bottom: 100,
        right: 30,
      }}
    >
      {!selectedChat ? (
        <div tw="py-6 px-8">
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
        </div>
      ) : (
        <>
          <ChatHeader
            handleSelectChat={setSelectedChat}
            isRead={false}
            isGroup
            title="Backoffice Group"
            sender={"Aditya Eka"}
          />
          <div style={{ overflow: "hidden", height: 550 }}>
            <div style={{ overflow: "auto", height: "100%" }} tw="px-4">
              <ChatBalloon position="left" />
              <ChatBalloon />
              <ChatBalloon />
              <ChatBalloon />
              <ChatBalloon position="left" />
              <ChatBalloon />
              <ChatBalloon />
            </div>
          </div>
          <div tw="flex pl-4 pr-6 justify-between mt-3">
            <input
              tw="outline-none border-2 w-full mr-4 px-3 py-2"
              type="text"
              placeholder="Type a new message"
            />
            <button
              tw="px-3 py-2 w-20 rounded-md text-white font-semibold"
              style={{ backgroundColor: "#2F80ED" }}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
