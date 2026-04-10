import { Button } from "@heroui/react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { postsAPI } from "../services/APIServices";
import PostCard from "../components/post/PostCard";
import ToggleSelectedEmoji from "../util/likes"

export default function PostDetails() {
  const { postId } = useParams();
  const {data:post={}} = useQuery({
    queryKey: ["post"],
    queryFn: getPostDetails,
    select:(data) => data.data.data.post
  });
  async function getPostDetails() {
    const data = await postsAPI.fetchData({ endPoint: postId });
    return data;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } =
    useInfiniteQuery({
      queryKey: ["comments"],
      queryFn: getComments,
      getNextPageParam: (lastPage) => {
        return lastPage.meta.pagination.nextPage ?? undefined;
      },
      refetchOnMount:false,
      refetchOnWindowFocus: false,
      // staleTime:10000,
		  // gcTime:200000
      // select: (data) => data.data,
    });
  async function getComments({ pageParam = 1 }) {
    const { data } = await postsAPI.fetchData({
      endPoint: `${postId}/comments?page=${pageParam}&limit=10`,
    });
    return data;
  }


  return (
    <>
      <div className=" py-2 flex items-center gap-4 ">
        <Button
          className="flex gap-2 items-center bg-transparent"
          radius="full"
          isIconOnly
        >
          <i className="fa-solid fa-arrow-left dark:text-white/90"></i>
        </Button>
        <span className=" dark:text-white/90 font-bold text-2xl">Post</span>
      </div>
      <div className="mt-4 mb-16">
        {
          post._id?
          <PostCard post={post} ToggleSelectedEmoji={ToggleSelectedEmoji} comments={data?.pages[0].data.comments} />
          :
          false
        }
      </div>
    </>
  );
}
// http://localhost:5173/posts/69af77fe056bdb7627ea6ef6
