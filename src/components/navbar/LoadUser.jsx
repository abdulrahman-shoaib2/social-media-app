import React, { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { usersAPI } from "../../services/APIServices";
import ThemeSwitch from "../theme/ModeIcon";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Skeleton } from "@heroui/react";

export default function LoadUser() {
  // context
  const { user } = useUser();

    // const { user, notifications } = useUser();
  // const unreadCount = notifications.unreadCount;

  // useState
  async function loadMyProfile() {
    const { data } = await usersAPI.fetchData({
      endPoint: "profile-data",
    });
    const userCopy = structuredClone(data.data.user);
    user.setUserInfo(userCopy);
  }

  useEffect(() => {
    loadMyProfile();
  }, []);
  const profile = user.userInfo;


  return (
    <>
      <Dropdown
        placement="top"
        classNames={{
          base: "  ",
          content:
            "p-0 border-small border-divider dark:bg-[#121212] mb-4  ",
        }}
        radius="sm"
      >
        <DropdownTrigger className="p-0">
          <div className="flex items-center col-span-4 justify-between rounded-3xl bg-transparent  px-2 backdrop-blur-2xl   cursor-pointer border-none max-w-22.5">
            {profile.photo ? (
              <Avatar
                isBordered
                color=""
                src={profile.photo}
                className="outline-2 outline-website-500 bg-black/20 outline-offset-2"
              />
            ) : (
              <Skeleton className="flex rounded-full w-12 h-12" />
            )}
            <i className="fa-solid fa-bars dark:text-white/80 px-4"></i>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          className="p-3 "
          disabledKeys={["account"]}
          itemClasses={{
            base: ["rounded-md ", "data-[focus-visible=true]:ring-default-500"],
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
              key={"theme"}
              isReadOnly
              className="cursor-default flex hover:bg-transparent! "
              startContent={<ThemeSwitch />}
            ></DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" /* onPress={logout} */>
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
