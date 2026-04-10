import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Skeleton,
  Switch,
  Tab,
  Tabs,
  User,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import { usersAPI } from "../../services/APIServices";
import NotifyTab from "./NotifyTab";
import LoadUser from "./LoadUser";

export const NotificationIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function VerticalNavbar({logout}) {
  // console.log(profile)
  // console.log(unreadCount)

  const { user } = useUser();
  const profile = user.userInfo;

  return (
    <>
      <div className="fixed lg:min-w-38 xl:min-w-50 overflow-hidden py-5 min-h-screen">
        <div className="hidden md:grid grid-rows-[auto,1fr] h-[95vh]">
          <div className="h-full w-full p-0.5 rounded-3xl ">
            <div className="dark:bg-white/4 shadow-lg  rounded-3xl border border-black/50 dark:border-white/8  transition-all duration-500">
              <Tabs
                key="full"
                isVertical
                classNames={{
                  base: "py-8 lg:p-3 lg:py-8 w-full h-full",
                  tabWrapper: "flex flex-col",
                  tabList:
                    "bg-transparent gap-5 min-w-[100%] h-full rounded-lg w-full",
                  tab: "h-full justify-center  lg:justify-start  ",
                }}
                radius="full"
              >
                <Tab
                  key="feed"
                  href="/"
                  title={
                    <div
                      className="flex items-center  lg:space-x-2"
                      // href={`/`}
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
                        className="lucide lucide-newspaper"
                        aria-hidden="true"
                      >
                        <path d="M15 18h-5" />
                        <path d="M18 14h-8" />
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                        <rect width={8} height={4} x={10} y={6} rx={1} />
                      </svg>
                      <span className="hidden lg:block">Feed</span>
                    </div>
                  }
                >
                </Tab>
                <Tab
                  key="profile"
                  href={`/profile/${profile.username}`}
                  title={
                    <div
                      className="flex items-center lg:space-x-2"
                      // href={`/profile/@${profile.username}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user"
                        aria-hidden="true"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="hidden lg:block">Profile</span>
                    </div>
                  }
                >
                </Tab>
                <Tab
                  key="community"
                  href='/community'
                  title={
                    <div className="flex items-center lg:space-x-2">
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
                        className="lucide lucide-earth"
                        aria-hidden="true"
                      >
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                        <circle cx={12} cy={12} r={10} />
                      </svg>
                      <span className="hidden lg:block">Community</span>
                    </div>
                  }
                >
                </Tab>
                <Tab
                  key="bookmark"
                  href='/bookmark'
                  title={
                    <div className="flex  items-center lg:space-x-2">
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
                      <span className="hidden lg:block">Bookmark</span>
                    </div>
                  }
                >
                </Tab>
                <Tab
                  key="notifications"
                  href="/notifications"
                  title={<NotifyTab />}
                >
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="flex items-end  justify-center px-1">
            <div className="flex  justify-between shadow-lg items-center py-1  rounded-3xl dark:bg-white/6 border dark:border-white/8  border-black/40  ">
              <LoadUser />
              {/* <Dropdown
                className=""
                placement="top"
                classNames={{
                  base: "hidden md:block ", 
                  content: "p-0 border-small border-divider dark:bg-[#121212] mb-4",
                }}
                radius="sm"
              >
                <DropdownTrigger>
                  <div className="w-full flex p-1 items-center justify-between">
                    {profile.photo ? (
                      <Avatar
                        isBordered
                        src={profile.photo}
                        className="outline-2 outline-website-500 outline-offset-2"
                      />
                    ) : (
                      <Skeleton className="flex rounded-full w-12 h-12" />
                    )}

                    <i className="fa-solid fa-bars dark:text-white/80 px-6"></i>
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Custom item styles"
                  className="p-3 "
                  disabledKeys={["account"]}
                  itemClasses={{
                    base: [
                      "rounded-md ",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  }}
                >
                  <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem key="account">Account</DropdownItem>
                    <DropdownItem
                      key="signedIn"
                      className="h-14 gap-2 dark:text-white/80 dark:hover:bg-website-500/80"
                    >
                      <p className="font-bold ">Signed in as</p>
                      <p className="font-bold">@{profile.username}</p>
                    </DropdownItem>
                    <DropdownItem
                      key="new_project"
                      classNames={{ base: "dark:hover:bg-white/20" }}
                      endContent={<i className="fa-solid fa-plus"></i>}
                    >
                      New Post
                    </DropdownItem>
                    <DropdownItem
                      key="settings"
                      classNames={{ base: "dark:hover:bg-white/20" }}
                    >
                      Settings
                    </DropdownItem>
                  </DropdownSection>

                  <DropdownSection aria-label="Help & Feedback">

                    <DropdownItem 
                      key={'theme'}
                      isReadOnly
                      className="cursor-default flex hover:bg-transparent! "
                      startContent={<ThemeSwitch  />}
                    >
                      Theme
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onPress={logout}>
                      Log Out
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
