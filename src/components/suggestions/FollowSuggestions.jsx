import { Button, Input, Skeleton, User } from "@heroui/react";
import { Link } from "react-router-dom";
import SuggestionsList from "./SuggestionsList";

export default function FollowSuggestions({ users }) {
  return (
    <>
      <div className="fixed md:min-max-28 overflow-hidden min-h-screen py-5">
        <div className="hidden md:flex flex-col gap-4   ">
            <div className="w-70 dark:bg-white/4 p-1 h-fit gap-2 grow-0  border border-black/40 dark:border-white/8 shadow-lg rounded-3xl  ">
              <Input
                type="text"
                placeholder="Search"
                classNames={{
                  inputWrapper: "dark:bg-white/5 dark:focus-within:bg-white/8",
                }}
                radius="full"
              />
            </div>
          <div className="h-full w-full p-0.5 rounded-3xl ">
            <div className="dark:bg-white/4 p-4 py-8 w-70 shadow-lg h-fit rounded-3xl border border-black/40 dark:border-white/8  flex flex-col gap-4 ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users dark:text-white/80"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx={9} cy={7} r={4} />
                </svg>
                <h3 className="text-base font-extrabold dark:text-white/80">
                  Suggested Friends
                </h3>
              </div>
              <div className="grid gap-2">
                  <SuggestionsList />
              </div>
              <div className="w-full">
                <Button
                  type="button"
                  className="w-full hover:bg-website-500 hover:text-white dark:bg-white/10 dark:hover:bg-website-500 dark:hover:font-bold "
                >
                  <Link to={"/suggestions"}>View More</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="flex items-end  justify-center ">
            <div className="flow-root m-6 inline">
              <div className="flex-1">
                <a target="_blank">
                  <p className="text-sm leading-6 font-sm text-gray-500 dark:text-white/55">
                    Terms Privacy Policy Cookies Imprint Ads info
                  </p>
                </a>
              </div>
              <div className="flex-2">
                <p className="text-sm leading-6 font-medium text-gray-600 dark:text-white/55">
                  {" "}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
