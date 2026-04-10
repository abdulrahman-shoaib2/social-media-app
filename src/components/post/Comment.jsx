import React, { useState } from "react";
import { CommentIcon, HeartIcon, HeartOultineIcon } from "./PostIcons";
import { Avatar, Skeleton, Textarea } from "@heroui/react";
import ToggleSelectedEmoji from "../../util/likes";
import {useUser} from "../../contexts/UserContext"

export default function Comment({ comment }) {
  const [topCommentLike, setTopCommentLike] = useState({
    emoji: false,
    text: false,
    style: false,
  });
  const [isReply, setIsReply] = useState(false);
  const { user } = useUser();
  return (
    <>
      <div className="">
        <div className="flex w-full gap-2 mb-2 items-start">
          <div className="flex self-center m-2 items-center gap-4 py-1 ">
            <Avatar
              isBordered
              src={comment.commentCreator.photo}
              className="outline-2  outline-website-500  outline-offset-2"
            />
            {/* <Skeleton className="flex rounded-full w-12 h-12" /> */}
          </div>
          <div className="grow pt-2 grid gap-1">
            <div className="flex gap-2 items-center-mt-1 ">
              <span className="text-nowrap font-bold text-[12px]">
                {comment.commentCreator.name}
              </span>
              <span className="text-nowrap  tracking-widest text-[12px]">
                @{comment.commentCreator.username}
              </span>
            </div>
            <div className="grid gap-1 w-full">
              <p className="wrap-break-word max-w-[32%] ">{comment.content}</p>
              <div className="flex gap-4">
                <div className=" flex items-center gap-2">
                  <button
                    className="cursor-pointer w-fit"
                    onClick={() => {
                      ToggleSelectedEmoji(
                        <HeartIcon />,
                        "commentlike",
                        "",
                        topCommentLike,
                        setTopCommentLike,
                      );
                    }}
                  >
                    {topCommentLike.emoji ? (
                      <HeartIcon size={18} />
                    ) : (
                      <HeartOultineIcon size={18} />
                    )}
                  </button>
                  <span>{comment.likes.length}</span>
                </div>
                <div className=" flex items-center gap-2">
                  <button
                    className="cursor-pointer w-fit"
                    onClick={() => {
                      setIsReply(!isReply);
                    }}
                  >
                    <CommentIcon className={"mt-0.5"} />
                  </button>
                  <span>{comment.likes.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isReply ? (
        <div className="flex w-28/30 ms-auto gap-2 my-2 items-start">
          <div className="m-2 w-10 py-1 ">
            {user?.userInfo.photo ? (
              <Avatar
                isBordered
                src={user?.userInfo.photo}
                className="outline-2  outline-website-500  outline-offset-2"
              />
            ) : (
              <Skeleton className="flex rounded-full w-12 h-12" />
            )}
          </div>
          <div className="grow pt-2 self-center relative">
            <Textarea
              isClearable
              rows="1"
              maxRows={2}
              className="w-full "
              classNames={{
                inputWrapper: "dark:bg-white/3 dark:focus-within:bg-white/6",
              }}
              placeholder="What's on your Mind? Share a post"
            />
            <div className="absolute bottom-2 end-3">
              <button
                isIconOnly
                color="primary"
                className="bg-website-500 cursor-pointer rounded-full h-10 w-10 shadow-2xl "
              >
                <i className="fa-solid fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        isReply
      )}
    </>
  );
}
