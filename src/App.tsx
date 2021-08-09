/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, keyframes } from "@emotion/react";
import tw from "twin.macro";
import Inbox from "./components/inbox";
function App() {
  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d( -30px ,0, 0);
  }

  70% {
    transform: translate3d( -15px ,0, 0);
  }

  90% {
    transform: translate3d(-4px, 0, 0);
  }
`;
  const [showButtons, setShowButtons] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  return (
    <div tw="min-h-screen">
      <button
        onClick={() => setShowButtons(!showButtons)}
        style={{ backgroundColor: "#2F80ED", bottom: 25, right: 25 }}
        tw="h-12 w-12 flex items-center justify-center rounded-full fixed"
      >
        <svg
          width="14"
          height="28"
          viewBox="0 0 18 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3333 2L2 16H16L6.66667 30"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {showButtons && (
        <>
          <button
            onClick={() => {
              setShowInbox(!showInbox);
              setShowTodo(false);
            }}
            css={css`
              animation: ${bounce} 1s ease;
            `}
            style={{
              position: "fixed",
              bottom: 25,
              right: 100,
              backgroundColor: "#F2F2F2",
            }}
            tw="h-12 w-12 flex items-center justify-center rounded-full fixed"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
                fill="#8885FF"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              setShowTodo(!showTodo);
              setShowInbox(false);
            }}
            css={css`
              animation: ${bounce} 1s ease;
            `}
            style={{
              position: "fixed",
              bottom: 25,
              right: 175,
              backgroundColor: "#F2F2F2",
            }}
            tw="h-12 w-12 flex items-center justify-center rounded-full fixed"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.92984 4.40063H26.5614C27.9445 4.40063 29.076 5.53221 29.076 6.91526V23.2603C29.076 24.6433 27.9445 25.7749 26.5614 25.7749H3.92984C2.5468 25.7749 1.41522 24.6433 1.41522 23.2603V6.91526C1.41522 5.53221 2.5468 4.40063 3.92984 4.40063ZM3.9298 6.91528V23.2603H13.9883V6.91528H3.9298ZM26.5614 23.2603H16.5029V6.91528H26.5614V23.2603ZM25.3042 11.3158H17.7603V13.2018H25.3042V11.3158ZM17.7603 14.4591H25.3042V16.3451H17.7603V14.4591ZM25.3042 17.6024H17.7603V19.4883H25.3042V17.6024Z"
                fill="#F8B76B"
              />
            </svg>
          </button>
        </>
      )}
      {showInbox && <Inbox />}
    </div>
  );
}
export default App;
