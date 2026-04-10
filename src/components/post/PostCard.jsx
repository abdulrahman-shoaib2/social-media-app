import {
  Avatar,
  Button,
  Divider,
  Image,
  Skeleton,
  Spacer,
  Tab,
  Tabs,
  Textarea,
  Tooltip,
  User,
} from "@heroui/react";
import { useState } from "react";
import { formatDate, formatNumber } from "../../util/formatters";
import {
  AngeryIcon,
  CommentIcon,
  HeartIcon,
  HeartOultineIcon,
  LaughIcon,
  SadIcon,
  ShareIcon,
  ThumbsUpIcon,
  WowIcon,
} from "./PostIcons";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import Comments from "./Comments";

export default function PostCard({ post, ToggleSelectedEmoji, comments }) {
  const [visible, setVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState({
    emoji: false,
    text: false,
    style: false,
  });


  return (
    <div
      className={` w-full min-w-full max-w-full  border border-black/40 bg-slate-50/90 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200  dark:bg-white/4 dark:border-white/6 dark:hover:bg-white/6  `}
      // onClick={() => {
      //   navigate(`posts/` + post?._id);
      // }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center  space-x-1 ">
          <User
            avatarProps={{
              src: post.user.photo,
              className: "w-12 h-12 ",
            }}
            name={post.user.name}
            description={
              <>
                <div className="hover:underline min-h-4 text-sm text-slate-600/80 dark:text-slate-100/70">
                  {post.user.username ? `@${post.user.username}` : " "}
                </div>
              </>
            }
            classNames={{ name: "font-bold text-[16px]" }}
          />
          <span className="fa-stack text-[10px] scale-[0.8] text-blue-400 mt-1.5 self-start">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            {/* fa-certificate */}
            <i className="fa-solid fa-check text-[10px]  fa-stack-1x fa-inverse"></i>
          </span>
        </div>
        <div className="loading hidden max-w-75 w-full  items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Button
            isIconOnly
            className="cursor-pointer p-2 rounded-[50%] bg-transparent will-change-auto text-slate-500 hover:bg-slate-200 hover:text-red-500/70 transition-colors dark:text-slate-100/70 dark:hover:text-red-500/70 dark:hover:bg-black/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark"
              aria-hidden="true"
            >
              <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
            </svg>
          </Button>
          <Button
            isIconOnly
            className=" p-2 rounded-[50%] bg-transparent will-change-auto text-slate-500 hover:bg-slate-200 transition-colors dark:text-slate-100/70 dark:hover:text-slate-300/70 dark:hover:bg-black/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <circle cx={5} cy={12} r={2} />
              <circle cx={12} cy={12} r={2} />
              <circle cx={19} cy={12} r={2} />
            </svg>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="mb-3 w-full ">
        <p className="text-gray-900 break-words max-w-full dark:text-white/85 text-sm  ">
            {post.body}
        </p>
        <div className="loading hidden">
          <Skeleton className="rounded-lg max-h-3">
            <p>s</p>
          </Skeleton>
          <Spacer y={3} />
          <Skeleton className="rounded-lg max-h-3">
            <p>s</p>
          </Skeleton>
          <Spacer y={3} />
          <div className="max-w-50 ">
            <Skeleton className="rounded-lg max-h-3">
              <span className="h-9">s</span>
            </Skeleton>
          </div>
        </div>
      </div>

      {/* Image */}
      {post.image ? (
        <div className=" mb-3 ">
          <div className="rounded-xl  overflow-hidden border border-gray-200 dark:border-white/20">
            <Image
              isBlurred
              // isZoomed
              // fallbackSrc="https://via.placeholder.com/300x200"
              // fallbackSrc="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/template/placeholder_01.svg"

              alt="HeroUI Album Cover"
              className="  mx-auto object-cover object-bottom min-h-64 w-full  "
              // src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/template/placeholder_01.svg"
              src={post.image}
              width={`w-full `}
              classNames={{}}
              // height={256}
            />
          </div>
          <Skeleton className="loading hidden mt-5 rounded-lg ">
            <div className="w-full h-64"></div>
          </Skeleton>
        </div>
      ) : (
        false
      )}

      {/* Post Info */}
      <div className="flex flex-end justify-between items-center py-2.5 px-4 text-xs text-gray-500">
        {/* Reactions */}
        <div className="flex items-center gap-1">
          <div className="flex w-full">
            <div className="loading hidden gap-1">
              <Skeleton className="rounded-sm">
                <button>👍 👍 👍 1.2 k</button>
              </Skeleton>
            </div>
            <div className="relative  h-6 flex justify-center items-center  p-0 cursor-pointer z-2  rounded-full text-[20px]  gap-6">
              {/* <Tooltip
                  content={
                    <div className="absolute bottom-full left-0 -mb-5 bg-black/85 rounded-lg py-2 px-3 min-w-37.5 max-w-51.25 z-100 opacity-100 transform-none ">
                      <div className="text-white text-[12px] mb-1 font-semibold">
                        Love
                      </div>
                      <div className="text-white/82 text-[12px] py-0.5 px-0 whitespace-nowrap overflow-hidden text-ellipsis">
                        Emma Rodriguez
                      </div>

                      <div className="text-gray-300/75 text-[12px] mt-1">
                        and 368 more...
                      </div>
                    </div>
                  }
                >
                  <Button
                    variant=""
                    className="text-xl max-h-6 min-w-4 m-0 p-0"
                  >
                    ❤️
                  </Button>
                </Tooltip> */}
              <div className="flex items-center">
                <Tooltip
                  content={
                    <div
                      id="emoji-dropdown"
                      data-checked="true"
                      className={`absolute visible left-0 bottom-full -mb-5 -translate-x-[35%] sm:-translate-x-[50%]   bg-surface dark:bg-[rgb(37,37,37)] rounded-[40px] opacity-0 gap-0.5 py-2 px-3 shadow-[0px_2px_12px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.05)] z-30  transform-none will-change-auto ${visible ? "animate-growOut flex" : "hidden"}  `}
                    >
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/like">
                        <button
                          className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/like:-translate-y-3 group-hover/like:scale-125 transition-all duration-300   ${visible ? "animate-[popIn_0.8s_0.2s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <ThumbsUpIcon height={32} width={32} />,
                              "Like",
                              "text-blue-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <ThumbsUpIcon height={42} width={42} />
                        </button>
                      </div>
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/love  ">
                        <div
                          className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/love:-translate-y-3 group-hover/love:scale-125 transition-all duration-300  ${visible ? "animate-[popIn_0.6s_0.3s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,23,77,0.4)]" : ""} `}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <HeartIcon height={32} width={32} />,
                              "Love",
                              "text-rose-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <HeartIcon width={42} height={42} />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/laugh">
                        <div
                          className={`text-[38px] leading-none opacity-0 filter-none will-change-transform transform-none group-hover/laugh:-translate-y-3 group-hover/laugh:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.4s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <LaughIcon height={32} width={32} />,
                              "Haha",
                              "text-blue-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <LaughIcon height={42} width={42} />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/wow">
                        <div
                          className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/wow:-translate-y-3 group-hover/wow:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.5s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""}`}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <WowIcon height={32} width={32} />,
                              "Wow",
                              "text-amber-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <WowIcon height={42} width={42} />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/sad">
                        <div
                          className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/sad:-translate-y-3 group-hover/sad:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.6s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <SadIcon height={32} width={32} />,
                              "Sad",
                              "text-yellow-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <SadIcon height={42} width={42} />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center justify-center cursor-pointer w-11 opacity-100 transform-none will-change-auto group/angry">
                        <div
                          className={`text-[38px] leading-none opacity-0  filter-none will-change-transform transform-none group-hover/angry:-translate-y-3 group-hover/angry:scale-125 transition-all duration-300 ${visible ? "animate-[popIn_0.6s_0.7s_ease-in-out_forwards] [text-shadow:0px_0px_5px_rgba(253,199,23,0.4)]" : ""} `}
                          onClick={() => {
                            ToggleSelectedEmoji(
                              <AngeryIcon height={32} width={32} />,
                              "Angry",
                              "text-orange-400",
                              selectedEmoji,
                              setSelectedEmoji,
                            );
                          }}
                        >
                          <AngeryIcon height={42} width={42} />
                        </div>
                      </div>
                    </div>
                  }
                  classNames={{
                    content: "bg-transparent border-0 outline-0 invisible",
                  }}
                >
                  <Button
                    isIconOnly
                    aria-label="Like"
                    radius="full"
                    className="w-full flex items-center justify-center gap-0 sm:gap-1.5  px-0 border-none bg-transparent cursor-pointer  text-sm font-semibold  will-change-auto hover:bg-slate-100 z-31  text-slate-500 dark:text-slate-100/70 dark:hover:text-red-500/80 dark:hover:bg-black/0 hover:text-red-600 transition-all duration-350 ease-in-out "
                    onMouseEnter={() => {
                      setVisible(true);
                    }}
                    onPress={() => {
                      ToggleSelectedEmoji(
                        <HeartIcon height={32} width={32} />,
                        "Like",
                        "text-blue-400",
                        selectedEmoji,
                        setSelectedEmoji,
                        true,
                      );
                    }}
                  >
                    {selectedEmoji.emoji ? (
                      selectedEmoji.emoji
                    ) : (
                      <HeartOultineIcon />
                    )}
                  </Button>

                  {/* <Button tabIndex={0} isIconOnly radius="full">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                    </g>
                  </svg>
                </Button> */}
                  {/* <Button
                  className="w-full flex items-center justify-center gap-0 sm:gap-1.5  px-0 border-none bg-transparent cursor-pointer  text-sm font-semibold rounded-sm will-change-auto hover:bg-slate-100 z-31  text-slate-500 dark:text-slate-100/70 dark:hover:text-red-500/80 dark:hover:bg-black/10 hover:text-red-600 transition-all duration-350 ease-in-out "
                  tabIndex={0}
                  isIconOnly
                  radius="full"
                  onPress={() => {
                    ToggleSelectedEmoji(
                      `👍`,
                      "Like",
                      "text-blue-400",
                      selectedEmoji,
                      setSelectedEmoji,
                      true,
                    );
                  }}
                  onMouseEnter={() => {
                    setVisible(true);
                  }}
                >
                  {selectedEmoji.emoji ? (
                    <>
                      <span className="flex items-center h-5 leading-5 text-xl">
                        {selectedEmoji.emoji}
                      </span>
                      <span
                        className={`font-bold text-lg ${selectedEmoji.style}`}
                      >
                        {selectedEmoji.text}
                      </span>
                    </>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <g>
                          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                        </g>
                      </svg>
                    </>
                  )}
                </Button> */}
                </Tooltip>
                <div className="flex items-center">
                  <span className="text-dark  dark:text-white/60 text-sm">
                    {formatNumber(post.likesCount)}
                  </span>
                </div>
              </div>
              <div className="flex">
                <Button
                  isIconOnly
                  aria-label="Like"
                  radius="full"
                  className="w-full flex items-center justify-center gap-0 sm:gap-1.5  px-0 border-none bg-transparent cursor-pointer  text-sm font-semibold  will-change-auto hover:bg-slate-100 z-31  text-slate-500 dark:text-slate-100/70 dark:hover:text-green-500/80 dark:hover:bg-black/0 hover:text-green-600 transition-all duration-350 ease-in-out "
                >
                  <ShareIcon size={24} filled={true} />
                </Button>
                <div className="flex items-center">
                  <span className="text-dark  dark:text-white/60 text-sm">
                    {formatNumber(post.sharesCount)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <span className="dark:text-slate-100/80">
              {formatNumber(post.likesCount)}
            </span> */}
        </div>
        {post.likesCount > 0 ? "" : false}

        {/* Timestamp */}
        <div className="  text-slate-500 dark:text-slate-100/80 text-xs w-full grow-0  text-end">
          {formatDate(post.createdAt)}
        </div>
        <Skeleton className="loading hidden">2:30 PM · Dec 20, 2024</Skeleton>
      </div>

      {/* divider line */}
      <Divider className="h-px bg-black/10  my-2 w-[85%] mx-auto dark:bg-white/10 " />
      
      <Comments post={post} comments={comments} />
    </div>
  );
}
