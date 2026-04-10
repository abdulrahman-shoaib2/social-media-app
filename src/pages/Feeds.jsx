import React, { useEffect, useRef, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import PostCard from "../components/post/PostCard";
import { Button, Card, Divider, Skeleton, Spacer } from "@heroui/react";
import FeedHeader from "../components/post/FeedHeader";
import CreatePost from "../components/post/CreatePost";
// import { api } from "../services/APIServices";
import { Link } from "react-router-dom";
import { postsAPI } from "../services/APIServices";
import { useInfiniteQuery } from "@tanstack/react-query";
import ToggleSelectedEmoji from "../util/likes";

export default function Feeds() {
  // isLoading, isFetching, refetch
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: getQueryPosts,
      getNextPageParam: (lastPage) => {
        return lastPage.meta.pagination.nextPage ?? undefined;
      },
      refetchOnMount:false,
      // refetchOnWindowFocus: false,
      staleTime:10000,
		  gcTime:200000
      // select: (data) => data.data,
    });
  async function getQueryPosts({ pageParam = 1 }) {
    const { data } = await postsAPI.fetchData({
      endPoint: `?page=${pageParam}&limit=10`,
    });
    return data;
  }
  const observer = useRef();

  const lastPostRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage],
  );

  function handleLoadingShadows(length){
    const postShadow = [
      <div
        key="postShadow"
        className=" w-full min-w-full max-w-full   border border-slate-200 bg-white/90 rounded-xl p-4 pb-8 shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-white/4 dark:border-white/6 dark:hover:bg-white/6"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center  space-x-1 ">
            <div className=" max-w-75 w-full flex items-center gap-3">
              <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-3 w-30 rounded-lg" />
                  <span className="fa-stack text-[10px] scale-[0.8] text-blue-400 mt-1.5 self-start">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    {/* fa-certificate */}
                    <i className="fa-solid fa-check text-[10px]  fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
                <Skeleton className="h-3 w-20 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Button
              isIconOnly
              className="cursor-pointer p-2 rounded-[50%] bg-transparent will-change-auto text-slate-500 hover:bg-slate-200 hover:text-amber-500/70 transition-colors dark:text-slate-100/70 dark:hover:text-amber-500/70 dark:hover:bg-black/10"
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
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
                height={20}
              >
                <circle cx={5} cy={12} r={2} />
                <circle cx={12} cy={12} r={2} />
                <circle cx={19} cy={12} r={2} />
              </svg>
            </Button>
          </div>
        </div>
  
        {/* Content */}
        <div className="my-6 w-full  ">
          <div className="">
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
        <div className=" my-6">
          <Skeleton className="mt-5 rounded-lg ">
            <div className="w-full h-80"></div>
          </Skeleton>
        </div>
  
        {/* Post Info */}
        <div className="flex flex-end justify-between items-center py-2.5 px-4 text-xs text-gray-500">
          {/* Reactions */}
          <div className="flex items-center gap-1">
            <div className="flex w-full">
              <div className=" gap-1">
                <Skeleton className="rounded-sm">
                  <button>👍 👍 👍 1.2 k</button>
                </Skeleton>
              </div>
            </div>
          </div>
  
          {/* Timestamp */}
          <div className="  text-slate-500 dark:text-slate-100/80 text-xs  grow-0  text-end">
            <Skeleton className="">2:30 PM · Dec 20, 2024</Skeleton>
          </div>
        </div>
  
        {/* divider line */}
        {/* <div className=""></div> */}
        <Divider className="h-px bg-black/10  my-2 w-[85%] mx-auto dark:bg-white/10 " />
        {/* bg-[#dadde151] */}
  
        {/* buttons */}
        <div className="flex pt-1 px-4 pb-1.5 h-11">
          <div className="flex-1 relative">
            <Button
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer  text-sm font-semibold rounded-sm will-change-auto hover:bg-slate-100 z-31  text-slate-500 dark:text-slate-100/70 dark:hover:text-red-500/80 dark:hover:bg-black/10 hover:text-red-600 transition-all duration-350 ease-in-out "
              tabIndex={0}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                </g>
              </svg>
              <span>Like</span>
            </Button>
          </div>
          <div className="flex-1">
            <Link to={"/"}>
              <Button
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer    rounded-sm will-change-auto hover:bg-slate-100  text-sm font-semibold text-slate-500 hover:text-blue-500 dark:text-slate-100/70 dark:hover:text-blue-500/80 dark:hover:bg-black/10 transition-all duration-350 ease-in-out "
                tabIndex={0}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                  </g>
                </svg>
                <span>Comment</span>
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <Button
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer  font-semibold rounded-sm will-change-auto hover:bg-slate-100  text-sm   hover:text-green-400 dark:text-slate-100/70 dark:hover:text-green-500/80 dark:hover:bg-black/10 transition-all duration-350 ease-in-out text-slate-500"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                </g>
              </svg>
  
              <span>Share</span>
            </Button>
          </div>
          <div className="flex-1 hidden">
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-0 border-none bg-transparent cursor-pointer text-slate-500 text-sm font-semibold rounded-sm will-change-auto hover:bg-slate-100  hover:text-blue-500 dark:text-slate-100/70 dark:hover:text-red-500/80 dark:hover:bg-black/10 transition-all duration-350 ease-in-out"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                </g>
              </svg>
            </Button>
          </div>
        </div>
      </div>,
    ];
    const shadows = []
    for(let x = 1;x<=length;x++){
      shadows.push(x)
    }
     return shadows.map(()=>{
      return postShadow
    })
  }




  return (
    <>
      <div className="flex flex-col gap-8 grid-cols-12 w-full max-w-full ">
        <div className="">
          <Card className="dark:bg-white/4  p-3  border border-black/40 bg-slate-50/90 dark:border-white/8 ">
            <div className="w-full  overflow-hidden">
              <FeedHeader />
              <Spacer
                height={1}
                className="w-full bg-black/20 dark:bg-white/8"
              />
              <CreatePost  />
            </div>
          </Card>
        </div>
        <div
          className={`grid gap-8 min-w-full mb-25`}
        >
          {isLoading ? handleLoadingShadows(10): false}
          {data?.pages.map((page, pageIndex) =>
            page.data.posts.map((post, index) => {
              const isLast =
                pageIndex === data.pages.length - 1 &&
                index === page.data.posts.length - 1;

              if (isLast) {
                return (
                  <div className="" ref={lastPostRef} key={post._id+'div'}>
                    <PostCard
                      key={post._id}
                      post={post}
                      ToggleSelectedEmoji={ToggleSelectedEmoji}
                    />
                  </div>
                );
              }

              return (
                <PostCard
                  key={post._id}
                  post={post}
                  ToggleSelectedEmoji={ToggleSelectedEmoji}
                />
              );
            }),
          )}
          {
            isFetchingNextPage && handleLoadingShadows(1)
          }
        </div>
      </div>
    </>
  );
}
