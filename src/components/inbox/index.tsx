/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useCallback, useState } from "react";
import { Search } from "react-feather";
import ChatItem from "./Chat/ChatItem";
import ChatHeader from "./Chat/ChatHeader";
import ChatBalloon from "./Chat/ChatBalloon";

const INIT_CHATS : {
  position: string,
  text: string,
  sender: string
}[] = [{
  position: "left",
  text: "Hello There!",
  sender: "Alex",
},
{
  position: "left",
  text: "Hello There!",
  sender: "Alex",
},
{
  position: "left",
  text: "Hello There!",
  sender: "Alex",
}]

export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState<any>();
  const [textChat, setTextChat] = useState<string>("");
  const [chats, setChats] = useState(INIT_CHATS);

  const handleSendChats = useCallback(() => {
    setChats([...chats, { position: "right", text: textChat, sender: "You" }]);
    setTextChat("");
  }, [chats, textChat]);

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
              {chats.map((chat, i) => {
                return (
                  <ChatBalloon
                    key={i}
                    position={chat.position === "left" ? "left" : "right"}
                    sender={chat.sender}
                    text={chat.text}
                  />
                );
              })}
            </div>
          </div>
          <div tw="flex pl-4 pr-6 justify-between mt-3">
            <input
              tw="outline-none border-2 w-full mr-4 px-3 py-2"
              type="text"
              value={textChat}
              onChange={(e) => setTextChat(e.target.value)}
              placeholder="Type a new message"
              onKeyDown={(e) => e.key === "Enter" && handleSendChats()}
            />
            <button
              tw="px-3 py-2 w-20 rounded-md text-white font-semibold"
              style={{ backgroundColor: "#2F80ED" }}
              onClick={handleSendChats}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
