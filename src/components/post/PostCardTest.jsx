import { Button, Card } from "@heroui/react";
import { useState } from "react";

export default function PostCardTest({ className }) {
  const [visible, setVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState({
    emoji: false,
    text: false,
    style: false,
  });

  function ToggleSelectedEmoji(emoji, text, style) {
    const objectCopy = structuredClone(selectedEmoji);
    if (selectedEmoji.emoji == emoji) {
      objectCopy.emoji = false;
      objectCopy.text = false;
      objectCopy.style = false;
      setSelectedEmoji(objectCopy);
    } else {
      objectCopy.emoji = emoji;
      objectCopy.text = text;
      objectCopy.style = style;
      setSelectedEmoji(objectCopy);
    }
  }

  return (
    <Card
      className={` w-full ${className} border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
      onClick={() => {
        setVisible(false);
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt=""
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          </a>
          <div className="min-w-0 flex-1">
            <div className="flex align-center space-x-1 ">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold  flex items-center gap-2"
              >
                <span className="text-gray-900 hover:underline truncate">
                  Alex Johnson
                </span>
                <i className="fa-solid fa-check-circle text-blue-400  transition-colors align-baseline"></i>
              </a>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:underline"
            >
              @userhandle
            </a>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="cursor-pointer p-2 rounded-[50%] bg-transparent will-change-auto text-gray-500 hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <circle cx={5} cy={12} r={2} />
              <circle cx={12} cy={12} r={2} />
              <circle cx={19} cy={12} r={2} />
            </svg>
          </div>
          <div className="cursor-pointer p-2 rounded-[50%] bg-transparent will-change-auto text-gray-500 hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* <a href="" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors" >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a> */}
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
          Just finished reading an amazing book on web development! 📚 The
          future of frontend is looking bright ✨ What's everyone else reading
          lately? Drop your recommendations below! 👇
        </p>
      </div>

      {/* Image */}
      <div className="mb-3">
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/template/placeholder_01.svg"
            alt=""
            className="w-full h-64 object-cover"
            // aspect-video
          />
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-gray-500 text-xs text-end">
        2:30 PM · Dec 20, 2024
      </div>

      {/* Reactions */}
      <div className="flex justify-between items-center py-2.5 px-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="flex">
            {/* <a className="inline-flex items-center" target="_blank">
              <span className="-m-1 rounded-full border-2 border-white">
                <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png" />
              </span>
              <span className="-m-1 rounded-full border-2 border-white">
                <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png" />
              </span>
              <span className="-m-1 rounded-full border-2 border-white">
                <img className="w-6" src="https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png" />
              </span>
              <span className="text-lg font-bold ml-3">237</span>
            </a> */}

            <div className="relative w-6 h-6 flex justify-center items-center ml-0 p-0 cursor-pointer z-3  rounded-full text-[20px]">
              <span>👍</span>
            </div>
            <div className="relative w-6 h-6 flex justify-center items-center -ml-1 p-0 cursor-pointer z-2  rounded-full text-[20px]">
              <span>❤️</span>
            </div>
            <div className="relative w-6 h-6 flex justify-center items-center -ml-0 p-0 cursor-pointer z-1  rounded-full text-[20px]">
              <span>😮</span>
            </div>
          </div>
          <span>1.2K</span>
        </div>

        <div className="flex gap-2">
          <span className="cursor-pointer decoraction-none text-medium will-change-auto hover:underline transition-all duration-250">
            89 comments
          </span>
          <div className="relative">
            <span className="cursor-pointer decoraction-none text-medium will-change-auto hover:underline transition-all duration-250">
              34 shares
            </span>
          </div>
        </div>
      </div>

      {/* divider line */}
      <div className="h-px bg-[#dadde1] my-0 mx-4"></div>

      {/* buttons */}
      <div className="flex pt-1 px-4 pb-1.5 h-11">
        <div className="flex-1 relative">
          <Button
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer text-gray-500 text-sm font-semibold rounded-sm will-change-auto hover:bg-gray-100 z-31 transition-colors peer peer "
            tabIndex={0}
            onMouseEnter={() => {
              setVisible(true);
            }}
          >
            {selectedEmoji.emoji ? (
              <>
                <span className="flex items-center h-5 leading-5 text-xl">
                  {selectedEmoji.emoji}
                </span>
                <span className={`font-bold text-lg ${selectedEmoji.style}`}>
                  {selectedEmoji.text}
                </span>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span>Like</span>
              </>
            )}
          </Button>
          <div
            id="emoji-dropdown"
            data-checked="true"
            className={`  absolute left-0 bottom-full mb-2 bg-white rounded-[40px] opacity-0 gap-0.5 py-2 px-3 shadow-[0px_2px_12px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.05)] z-30  transform-none will-change-auto ${visible ? "animate-growOut flex" : "hidden"}  `}
          >
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/like">
              <button
                className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/like:-translate-y-3 group-hover/like:scale-125 transition-all duration-300   ${visible ? "animate-[popIn_0.8s_0.2s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                onClick={() => {
                  ToggleSelectedEmoji(`👍`, "Like", "text-blue-400");
                }}
              >
                👍
                {/* translateY(-8px) scale(1.3) */}
              </button>
            </div>
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/love  ">
              <div
                className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/love:-translate-y-3 group-hover/love:scale-125 transition-all duration-300  ${visible ? "animate-[popIn_0.6s_0.3s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,23,77,0.4)]" : ""} `}
                onClick={() => {
                  ToggleSelectedEmoji(`❤️`, "Love", "text-rose-400");
                }}
              >
                ❤️
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/laugh">
              <div
                className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/laugh:-translate-y-3 group-hover/laugh:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.4s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                onClick={() => {
                  ToggleSelectedEmoji(`😆`, "Haha", "text-blue-400");
                }}
              >
                😆
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/wow">
              <div
                className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/wow:-translate-y-3 group-hover/wow:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.5s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""}`}
                onClick={() => {
                  ToggleSelectedEmoji(`😮`, "Wow", "text-amber-400");
                }}
              >
                😮
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/sad">
              <div
                className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/sad:-translate-y-3 group-hover/sad:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.6s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                onClick={() => {
                  ToggleSelectedEmoji(`😢`, "Sad", "text-yellow-400");
                }}
              >
                😢
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/angry">
              <div
                className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/angry:-translate-y-3 group-hover/angry:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.7s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                onClick={() => {
                  ToggleSelectedEmoji(`😠`, "Angry", "text-orange-400");
                }}
              >
                😠
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Button
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer text-gray-500 text-sm font-semibold rounded-sm will-change-auto hover:bg-gray-100 transition-colors"
            tabIndex={0}
          >
            <svg
              viewBox="0 0 24 24"
              width={18}
              height={18}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Comment</span>
          </Button>
        </div>
        <div className="flex-1">
          <Button
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer text-gray-500 text-sm font-semibold rounded-sm will-change-auto hover:bg-gray-100 transition-colors"
            tabIndex={0}
          >
            <svg
              viewBox="0 0 24 24"
              width={18}
              height={18}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1={12} y1={2} x2={12} y2={15} />
            </svg>
            <span>Share</span>
          </Button>
        </div>
      </div>
      {/* another buttons */}

      <div className="">
        <button type="button" className="focus:outline-none Like">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button type="button" className="focus:outline-none Comment">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
        <button type="button" className="focus:outline-none save">
          <svg
            className="w-7 h-7 mb-1 ml-1 text-gray-600  z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
        <button type="button" className="focus:outline-none Like">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      <div className="left flex flex-row">
        <div className="like mr-4">
          <svg
            aria-label="Like"
            className="_8-yf5 "
            fill="#262626"
            height={24}
            viewBox="0 0 48 48"
            width={24}
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
          </svg>
        </div>
        <div className="comment mr-4">
          <svg
            aria-label="Comment"
            className="_8-yf5 "
            fill="#262626"
            height={24}
            viewBox="0 0 48 48"
            width={24}
          >
            <path
              clipRule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="share mr-4">
          <svg
            aria-label="Share Post"
            className="_8-yf5 "
            fill="#262626"
            height={24}
            viewBox="0 0 48 48"
            width={24}
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
          </svg>
        </div>
        <div className="save">
          <svg
            aria-label="Save"
            className="_8-yf5 "
            fill="#262626"
            height={24}
            viewBox="0 0 48 48"
            width={24}
          >
            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center py-4 ">
        <div className="flex-1 flex items-center  text-sm font-medium text-slate-500 hover:text-blue-400 transition duration-350 ease-in-out">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
            </g>
          </svg>
          12.3 k
        </div>
        <div className="flex-1 flex items-center  text-sm font-medium  hover:text-green-400 transition duration-350 ease-in-out text-slate-500">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <g>
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
            </g>
          </svg>
          14 k
        </div>
        <div className="flex-1 flex items-center  text-sm font-medium text-slate-500 hover:text-red-600 transition duration-350 ease-in-out">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
            </g>
          </svg>
          14 k
        </div>
        <div className="flex-1 flex items-center  text-sm font-medium text-slate-500 hover:text-blue-400 transition duration-350 ease-in-out">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <g>
              <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
              <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
            </g>
          </svg>
        </div>
      </div>

      {/* create comment */}
      <div className="relative hidden">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
          type="text"
          placeholder="Write a comment"
        />
        <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
          <svg
            className="mr-2"
            style={{ width: 26, height: 26 }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
            ></path>
          </svg>
          <svg
            className="fill-blue-500 dark:fill-slate-50"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
          >
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </span>
      </div>
      {/* another shape */}
      <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
        <img
          className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
          >
            <svg
              className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
          style={{ borderRadius: 25 }}
          placeholder="Post a comment..."
          autoComplete="off"
        />
      </div>
      {/* End Create Comment */}

      {/* comments */}
      <div className="pt-6">
        {/* Comment row */}
        <div className="media flex pb-4">
          <a className="mr-4" target="_blank">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/men/82.jpg"
            />
          </a>
          <div className="media-body">
            <div>
              <a
                className="inline-block text-base font-bold mr-2"
                target="_blank"
              >
                Leslie Alexander
              </a>
              <span className="text-slate-500 text-xs dark:text-slate-300">
                25 minutes ago
              </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <div className="mt-2 flex items-center">
              <a className="inline-flex items-center py-2 mr-3" target="_blank">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400"
                    style={{ width: 22, height: 22 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                  </svg>
                </span>
                <span className="text-base font-bold">12</span>
              </a>
              <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                Reply
              </button>
            </div>
          </div>
        </div>
        {/* End comments row */}
        {/* comments row */}
        <div className="media flex pb-4">
          <a className="inline-block mr-4" target="_blank">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/women/59.jpg"
            />
          </a>
          <div className="media-body">
            <div>
              <a
                className="inline-block text-base font-bold mr-2"
                target="_blank"
              >
                Eleanor Pena
              </a>
              <span className="text-slate-500">3 minutes ago</span>
            </div>
            <p>
              Dolor sit ameteiusmod Dolor sit ameteiusmod ??✌?consectetur
              adipiscing elitconsectetur adipiscing elit.
            </p>
            <div className="mt-2 flex items-center">
              <a className="inline-flex items-center py-2 mr-3" target="_blank">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600"
                    style={{ width: 22, height: 22 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </span>
                <span className="text-base font-bold">2</span>
              </a>
              <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
                Repply
              </button>
            </div>
            {/* Repply content */}
            <div className="mt-4">
              {/* Comment row */}
              <div className="media flex pb-4">
                <a className="mr-4" target="_blank">
                  <img
                    className="rounded-full max-w-none w-10 h-10"
                    src="https://randomuser.me/api/portraits/men/23.jpg"
                  />
                </a>
                <div className="media-body">
                  <div>
                    <a
                      className="inline-block text-base font-bold mr-2"
                      target="_blank"
                    >
                      Joseph Diaz
                    </a>
                    <span className="text-slate-500">5 minutes ago</span>
                  </div>
                  <p>Dolor sit ameteiusmod consectetur.</p>
                  <div className="mt-2 flex items-center">
                    <a
                      className="inline-flex items-center py-2 mr-3"
                      target="_blank"
                    >
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600"
                          style={{ width: 22, height: 22 }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </span>
                      <span className="text-base font-bold">8</span>
                    </a>
                    <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              {/* End comments row */}
            </div>
            {/* End repply content */}
          </div>
        </div>
        {/* End comments row */}
        {/* comments row */}
        <div className="text-black p-4 antialiased flex">
          <img
            className="rounded-full h-8 w-8 mr-2 mt-1 "
            src="https://picsum.photos/id/1027/200/200"
          />
          <div>
            <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
              <div className="font-semibold text-sm leading-relaxed">
                Sara Lauren
              </div>
              <div className="text-xs leading-snug md:leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="text-xs  mt-0.5 text-gray-500">14 w</div>
            <div className="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
              <svg
                className="p-0.5 h-5 w-5 rounded-full z-20 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
              >
                <defs>
                  <linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#18AFFF" />
                    <stop offset="100%" stopColor="#0062DF" />
                  </linearGradient>
                  <filter
                    id="c1"
                    width="118.8%"
                    height="118.8%"
                    x="-9.4%"
                    y="-9.4%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur
                      in="SourceAlpha"
                      result="shadowBlurInner1"
                      stdDeviation={1}
                    />
                    <feOffset
                      dy={-1}
                      in="shadowBlurInner1"
                      result="shadowOffsetInner1"
                    />
                    <feComposite
                      in="shadowOffsetInner1"
                      in2="SourceAlpha"
                      k2={-1}
                      k3={1}
                      operator="arithmetic"
                      result="shadowInnerInner1"
                    />
                    <feColorMatrix
                      in="shadowInnerInner1"
                      values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"
                    />
                  </filter>
                  <path
                    id="b1"
                    d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"
                  />
                </defs>
                <g fill="none">
                  <use fill="url(#a1)" xlinkHref="#b1" />
                  <use fill="black" filter="url(#c1)" xlinkHref="#b1" />
                  <path
                    fill="white"
                    d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
                  />
                </g>
              </svg>
              <svg
                className="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
              >
                <defs>
                  <linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6680" />
                    <stop offset="100%" stopColor="#E61739" />
                  </linearGradient>
                  <filter
                    id="c2"
                    width="118.8%"
                    height="118.8%"
                    x="-9.4%"
                    y="-9.4%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur
                      in="SourceAlpha"
                      result="shadowBlurInner1"
                      stdDeviation={1}
                    />
                    <feOffset
                      dy={-1}
                      in="shadowBlurInner1"
                      result="shadowOffsetInner1"
                    />
                    <feComposite
                      in="shadowOffsetInner1"
                      in2="SourceAlpha"
                      k2={-1}
                      k3={1}
                      operator="arithmetic"
                      result="shadowInnerInner1"
                    />
                    <feColorMatrix
                      in="shadowInnerInner1"
                      values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"
                    />
                  </filter>
                  <path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z" />
                </defs>
                <g fill="none">
                  <use fill="url(#a2)" xlinkHref="#b2" />
                  <use fill="black" filter="url(#c2)" xlinkHref="#b2" />
                  <path
                    fill="white"
                    d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
                  />
                </g>
              </svg>
              <span className="text-sm ml-1 pr-1.5 text-gray-500">3</span>
            </div>
          </div>
        </div>

        {/* End comments row */}
        {/* More comments */}
        <div className="w-full">
          <a
            className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
            target="_blank"
          >
            Show more comments
          </a>
        </div>
        {/* End More comments */}
      </div>
    </Card>
  );
}

/*
<div style={{position: 'absolute', bottom: '100%', left: 0, marginBottom: 8, background: 'rgba(0, 0, 0, 0.85)', borderRadius: 8, padding: '8px 12px', minWidth: 150, maxWidth: 220, zIndex: 100, opacity: 1, transform: 'none', willChange: 'transform'}}><div style={{color: 'rgb(255, 255, 255)', fontWeight: 600, fontSize: 12, marginBottom: 4}}>Love</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Emma Rodriguez</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Olivia Chen</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Sophia Davis</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Mia Johnson</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Ava Williams</div><div style={{color: 'rgb(228, 230, 235)', fontSize: 12, padding: '2px 0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Isabella Brown</div><div style={{color: 'rgb(176, 179, 184)', fontSize: 12, marginTop: 4}}>and 368 more...</div></div>

*/
