/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { ChevronDown, ChevronUp, Clock, PenTool } from "react-feather";
import tw from "twin.macro";

const TodoTitle = ({ isComplete, children }: any) => (
  <b css={[tw`text-gray-500 ml-4`, isComplete && tw`line-through`]}>
    {children}
  </b>
);

export default function TodoItem({
  id,
  title,
  description,
  date,
  isComplete,
  setTodo,
}: any) {
  const [showDetail, setshowDetail] = useState(false);
  //   const [isComplete, setIsComplete] = useState(false);
  //   const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const setIsComplete = useCallback(() => {
    setTodo((todos: any) => {
      let tmp = todos.find((todo: any) => todo.id === id);
      let data = todos.filter((todo: any) => todo.id !== id);
      tmp = { ...tmp, isComplete: !isComplete };
      return [...data, tmp];
    });
  }, [isComplete]);

  const setDescription = useCallback(
    (val) => {
      setTodo((todos: any) => {
        let tmp = todos.find((todo: any) => todo.id === id);
        let data = todos.filter((todo: any) => todo.id !== id);
        tmp = { ...tmp, description: val };
        return [...data, tmp];
      });
    },
    [description]
  );

  return (
    <div tw="border-b-2 border-gray-300 pb-4">
      {/* head collapse */}
      <div tw="flex items-center mt-5 justify-between">
        <div tw="flex items-center">
          <label tw="inline-flex items-center">
            <input
              onChange={() => setIsComplete()}
              type="checkbox"
              tw="h-5 w-5 text-gray-600 outline-none border-2 border-gray-300 rounded"
            />
          </label>
          <TodoTitle isComplete={isComplete}>{title}</TodoTitle>
        </div>
        <div tw="flex items-center ">
          <span tw="text-red-600 text-sm mr-4">
            {!isComplete && "2 Days Left"}
          </span>
          <span tw="text-sm mr-4">{date.toString()}</span>
          {showDetail ? (
            <ChevronUp
              onClick={() => setshowDetail(false)}
              tw="w-5 cursor-pointer mr-5"
            />
          ) : (
            <ChevronDown
              onClick={() => setshowDetail(true)}
              tw="w-5 cursor-pointer mr-5"
            />
          )}
          <svg
            tw="w-6"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>
      </div>
      {/* head */}

      {/* body */}
      {showDetail && (
        <div tw="pl-14">
          <div tw="flex items-center my-4">
            <Clock color="#2F80ED" />
            <input
              value={date}
              type="date"
              placeholder="Set Date"
              tw="w-56 outline-none border border-gray-200 rounded-md py-1 px-3 ml-4"
            />
          </div>
          <div tw="flex items-center my-4">
            <svg
              tw="w-5"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3092 9.63713e-06C18.9949 9.63713e-06 18.6679 0.125741 18.4291 0.36463L16.1282 2.66551L20.8431 7.38042L23.144 5.07954C23.6343 4.58919 23.6343 3.79709 23.144 3.30674L20.2019 0.36463C19.9504 0.113168 19.6361 9.63713e-06 19.3092 9.63713e-06ZM14.7831 7.56901L15.9398 8.72573L4.54857 20.117H3.39184V18.9602L14.7831 7.56901ZM0.877193 17.9167L14.783 4.01082L19.498 8.72573L5.59211 22.6316H0.877193V17.9167Z"
                fill={!isEdit ? "#DADADA" : "#2F80ED"}
              />
            </svg>
            {!isEdit ? (
              <p onClick={() => setIsEdit(!isEdit)} tw="ml-5">
                {description === "" ? "No Description" : description}
              </p>
            ) : (
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                tw="ml-5 outline-none border-2 w-full px-3 py-1 rounded-md"
                onKeyDown={(e) => e.key === "Enter" && setIsEdit(!isEdit)}
                type="text"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
