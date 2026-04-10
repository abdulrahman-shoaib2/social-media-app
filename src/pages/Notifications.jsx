import { Button, Card, CardBody, Tab, Tabs } from "@heroui/react";
import React from "react";

export default function Notifications() {
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
        <span className=" dark:text-white/90 font-bold text-2xl">
          Notifications
        </span>
      </div>

      <div className="w-full">
        <Tabs
          aria-label="Tabs radius"
          radius="none"
          disableAnimation
          classNames={{
            base: "w-full ",
            tabList: "w-full min-h-30 bg-transparent",
            tab: "before:bg-transparent  before:block before:h-1   before:content-[''] before:absolute before:w-20 before:-bottom-2",
          }}
        >
          <Tab key="all" title="All" className="relative data-[selected='true']:bg-transparent! data-[selected='true']:before:bg-website-500">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="mentions" title="Mentions" className="relative data-[selected='true']:bg-transparent! data-[selected='true']:before:bg-website-500"> 
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div className=""></div>
    </>
  );
}
