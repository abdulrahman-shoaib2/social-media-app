import {
  Tabs,
  Tab,
  Badge,
  Dropdown,
  DropdownTrigger,
  User,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  Skeleton,
} from "@heroui/react";
import { SearchIcon } from "../search/SearchIcon";
import {Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import ThemeSwitch from "../theme/ModeIcon";
import NotifyTab from "./NotifyTab";
import LoadUser from "./LoadUser";


export default function Navbar({ logout }) {
  const { user, notifications } = useUser();
  const unreadCount = notifications.unreadCount;
  const profile = user.userInfo;

  return (
    <>
      <div
        id="h-navbar"
        className="w-full p-0.5 grid grid-cols-12 grid-rows-2  sm:flex justify-between gap-2 rounded-full"
      >
        <LoadUser />

        <div className="bg-white/8 dark:bg-black/30 col-span-12 grow rounded-full h-14  border border-black/40 dark:border-black/10 backdrop-blur-2xl ">
          <Tabs
            key="full"
            classNames={{
              base: "w-full h-full ",
              tabList: "bg-transparent flex  min-w-[100%] h-full ",
              tab: "h-full p-0 m-0 ",
            }}
            radius="full"
            className="data-selected:text-green-500"
          >
            <Tab
              key="feed"
              href="/"
              title={
                <div className="flex items-center dark:text-white dark:font-bold  gap-2">
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
                    className="m-0"
                    aria-hidden="true"
                  >
                    <path d="M15 18h-5" />
                    <path d="M18 14h-8" />
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                    <rect width={8} height={4} x={10} y={6} rx={1} />
                  </svg>
                  <span className="hidden  ">Feed</span>
                </div>
              }
            >
            </Tab>
            <Tab
              key="profile"
              href={`/profile/${profile.username}`}
              title={
                <div
                  className="flex items-center  dark:text-white dark:font-bold gap-2"
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
                    className="m-0"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <span className="hidden ">Profile</span>
                </div>
              }
            >
            </Tab>
            <Tab
              key="community"
              href="/community"
              title={
                <div className="flex items-center dark:text-white dark:font-bold gap-2">
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
                    className="m-0"
                    aria-hidden="true"
                  >
                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                    <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                  <span className="hidden ">Community</span>
                </div>
              }
            >
            </Tab>
            <Tab
              key="bookmark"
              href="/bookmark"
              title={
                <div className="flex items-center dark:text-white dark:font-bold gap-2">
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
                    className="m-0"
                    aria-hidden="true"
                  >
                    <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                  </svg>
                  <span className="hidden ">Bookmark</span>
                </div>
              }
            >
            </Tab>
            <Tab
              key="notifications"
              href="/notifications"
              title={<NotifyTab />}
              // title={
              //   <div className="flex items-center dark:text-white dark:font-bold gap-2">
              //     <Badge
              //       placement="top-left"
              //       size="sm"
              //       content={unreadCount > 0 ? unreadCount : ""}
              //       shape="circle"
              //       className={unreadCount > 0 ? "" : "hidden"}
              //       classNames={{
              //         base: ` font-bold ${unreadCount > 0 ? "animate-pulse" : ""} `,
              //         badge:
              //           "bg-website-500 text-white dark:bg-white dark:text-black text-[10px] p-1 dark:border-0",
              //       }}
              //     >
              //       <i className="fa-regular fa-bell m-0"></i>
              //     </Badge>
              //     <span className="hidden ">Notification</span>
              //   </div>
              // }
            >
            </Tab>
            {/* <Tab
              key="account"
              title={
              }
            >
            </Tab> */}
          </Tabs>
        </div>
      </div>
    </>
  );
}

// <NavbarContent as="div" className="items-center" justify="end">
//   <Input
//     classNames={{
//       base: "max-w-full sm:max-w-[10rem] h-10",
//       mainWrapper: "h-full",
//       input: "text-small",
//       inputWrapper:
//         "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
//     }}
//     placeholder="Type to search..."
//     size="sm"
//     startContent={<SearchIcon size={18} />}
//     type="search"
//   />
//   <Dropdown placement="bottom-end">
//     <DropdownTrigger>
//       <Avatar
//         isBordered
//         as="button"
//         className="transition-transform"
//         color="secondary"
//         name="Jason Hughes"
//         size="sm"
//         src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//       />
//     </DropdownTrigger>
//     <DropdownMenu aria-label="Profile Actions" variant="flat">
//       <DropdownItem key="profile" className="h-14 gap-2">
//         <p className="font-semibold">Signed in as</p>
//         <p className="font-semibold">zoey@example.com</p>
//       </DropdownItem>
//       <DropdownItem key="settings">My Settings</DropdownItem>
//       <DropdownItem key="team_settings">Team Settings</DropdownItem>
//       <DropdownItem key="analytics">Analytics</DropdownItem>
//       <DropdownItem key="system">System</DropdownItem>
//       <DropdownItem key="configurations">Configurations</DropdownItem>
//       <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//       <DropdownItem key="logout" color="danger">
//         Log Out
//       </DropdownItem>
//     </DropdownMenu>
//   </Dropdown>
// </NavbarContent>
