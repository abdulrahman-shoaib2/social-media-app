import { Avatar, Button, Skeleton, Textarea } from "@heroui/react";
import React, { useState } from "react";
import { CommentIcon, HeartIcon, HeartOultineIcon } from "./PostIcons";
import { useNavigate, useParams } from "react-router-dom";
import {useUser} from "../../contexts/UserContext"
import Comment from "./Comment";

export default function Comments({post, comments}) {
  // const [toast, setToast] = useState("");

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm">
            Comments{" "}
            <span className="text-[14px] font-semibold text-gray-400">
              ({post?.commentsCount})
            </span>
          </span>
        </div>
        <div className="flex w-full gap-2 my-2 items-start">
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
              id="textarea"
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
                color="primary"
                className="bg-website-500 cursor-pointer rounded-full h-10 w-10 shadow-2xl "
              >
                <i className="fa-solid fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>
        {
        comments?
          // console.log(comments)
          comments.map((comment)=>{
            return <Comment key={comment._id} comment={comment} />
          })
        :
        post.topComment && (
          <Comment  comment={post.topComment} />
        )}

        {!comments ? post.commentsCount >= 2 ? (
          <div className="w-full mt-5">
            <Button
              color="default"
              className="w-full dark:bg-white/5 dark:hover:bg-white/10 font-semibold tracking-wider"
              onPress={() => {
                navigate("posts/" + post._id);
              }}
            >
              View More
            </Button>
          </div>
        ) : (
          false
        ):false}
      </div>
    </>
  );
}
