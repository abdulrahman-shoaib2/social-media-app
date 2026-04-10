import { Button, Skeleton, User } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersAPI } from "../../services/APIServices";


export default function SuggestionsList() {
    const [suggestions, setSuggestions] = useState([]);

    async function loadSuggestions() {
      const { data } = await usersAPI.fetchData({
        endPoint: "suggestions?limit=6",
      });
      setSuggestions(data.data.suggestions);
    }
  useEffect(()=>{
    loadSuggestions()
  },[])
  return (
    <>
      {/* person */}
      {suggestions.length > 0
        ? suggestions.map((user, index) => {
            return (
              <div
                key={user._id}
                className=" w-full h-18 flex items-center justify-between border-b border-white/6 last:border-b-0"
              >
                <User
                  avatarProps={{
                    src: user.photo,
                    className: "w-12 h-12 shrink-0 ",
                  }}
                  name={user.name}
                  description={
                    <>
                      <Link
                        to={`/@${user.username}`}
                        className="hover:underline text-xs text-slate-600/80 dark:text-slate-100/70"
                      >
                        {`@${user.username}`}
                      </Link>
                    </>
                  }
                  classNames={{ name: "font-bold text-[14px]" }}
                />
                <button
                  radius="full"
                  size="sm"
                  variant="bordered"
                  className="rounded-full text-sm border-2  border-gray-400 dark:border-gray-400/50 text-gray-600
                            dark:text-gray-300 py-1.5 px-3  hover:bg-website-500 hover:text-white hover:border-website-500 dark:hover:bg-white  dark:hover:border-white dark:hover:text-website-400 hover:font-bold"
                >
                  Follow
                </button>
              </div>
            );
          })
        : [15, 541, 861, 541, 656, 186].map((number, index) => {
            return (
              <div
                key={number + index}
                className="w-full h-20 flex items-center justify-between border-b border-white/6 last:border-b-0 "
              >
                <div className="max-w-75 w-3/4 flex items-center gap-3">
                  <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                </div>
                <div className="">
                  <Button
                    radius="full"
                    variant="bordered"
                    color="default"
                    className="hover:bg-website-500 hover:text-white hover:border-website-500 dark:hover:bg-white  dark:hover:border-white dark:hover:text-website-400 hover:font-bold"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            );
          })}
    </>
  );
}
