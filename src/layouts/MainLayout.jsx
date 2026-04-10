import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import FollowSuggestions from "../components/suggestions/FollowSuggestions";
import VerticalNavbar from "../components/navbar/VerticalNavbar";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { usersAPI, notificationsAPI } from "../services/APIServices";

export default function MainLayout() {
    
  // function logout() {
  //   authToken.setToken(false);
  //   localStorage.removeItem("token");
  //   usersAPI.token = null;
  // }

  return (
    <>
      <div className="sm:px-10 ">
        <div className="relative overflow-hidden grid grid-cols-12 auto-cols-fr min-h-screen">
          <div className="fixed bottom-0 md:top-0  max-h-fit z-100 left-0 w-full flex items-center justify-center md:justify-end p-3  ">
            <div className="md:hidden w-full">
              {/* <Navbar logout={logout} /> */}
              <Navbar  />
            </div>
          </div>

          <div className="relative overflow-hidden grid grid-cols-12 auto-cols-fr col-span-12 min-h-screen  ">
            <div className="hidden relative md:flex justify-center md:col-span-2  overflow-x-hidden ">
              {/* <VerticalNavbar logout={logout} /> */}
              <VerticalNavbar  />
            </div>
            <div className="col-span-12 md:col-span-10 grid grid-cols-12  ">
              <div className="col-span-12 lg:col-span-8 xl:col-span-9 px-4 pt-5 mx-auto min-w-full max-w-full  ">
                <Outlet />
              </div>
              <div className="relative hidden lg:col-span-4 xl:col-span-3 lg:block">
                <FollowSuggestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
