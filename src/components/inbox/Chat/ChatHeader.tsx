/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { ArrowLeft, X } from "react-feather";

interface IChatHeader {
  title?: string;
  sender?: string;
  isGroup?: boolean;
  isRead?: boolean;
  timestamp?: string;
  handleSelectChat: (chat: any) => void;
}

export default function ChatHeader({
  title,
  sender,
  handleSelectChat,
  isGroup,
}: IChatHeader) {
  return (
    <div tw="flex items-center p-6 border-b mb-4">
      <div tw="w-12 h-auto">
        <ArrowLeft onClick={() => handleSelectChat(null)} tw="cursor-pointer" />
      </div>
      <div tw="flex-grow ">
        <p style={{ color: "#2F80ED" }} tw="font-semibold">
          {title ? title : sender}
        </p>
        {isGroup && <p tw="text-sm font-semibold"> 3 Participants </p>}
        {/* <p tw="text-xs">3 Paricipant</p> */}
      </div>
      <div tw="flex w-20 justify-end">
        <X onClick={() => handleSelectChat(null)} tw="cursor-pointer" />
      </div>
    </div>
  );
}
