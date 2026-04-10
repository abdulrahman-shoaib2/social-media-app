import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import WebsiteInfo from "../components/auth/WebsiteInfo";

export default function AuthLayout() {
    console.log('AuthLayout before')

  return (
    <>
      <div className="w-full bg-surface form">
        <div className="grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-2 overflow-hidden transition-all
        duration-700">
          <Outlet  />
          <WebsiteInfo  />
        </div>
      </div>
      {  console.log('AuthLayout before')}
    </>
  );
}
