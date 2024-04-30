import { Navbar, Typography } from "@material-tailwind/react";

import MonstarSuiteBlack from "../../assets/logo/MonstarSuiteBlack.svg";
import React, { useState } from "react";
import AppDrawer from "./components/AppDrawer";
import ProfileMenu2 from "./components/ProfileMenu2";

export default function SecondNavbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerRight = () => setOpenDrawer(true);
  const closeDrawerRight = () => setOpenDrawer(false);

  return (
    <>
      <Navbar className="fixed top-0 z-10 max-w-full rounded-none shadow-none m-0 p-0">
        <div className="flex items-center justify-between text-blue-gray-900 border-b shadow-md">
          <Typography
            as="a"
            href="/"
            className="ml-10 cursor-pointer font-medium my-4"
          >
            <img
              src={MonstarSuiteBlack}
              alt="MonstarSuite"
              className="h-6 select-none pointer-events-none"
              width={150}
            />
          </Typography>

          <div className="flex items-center gap-5 mr-10">
            <Typography as="a" className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={openDrawerRight}
              >
                <rect width="11" height="11" fill="#D6D6D6" />
                <rect x="13" width="11" height="11" fill="#D6D6D6" />
                <rect y="13" width="11" height="11" fill="#D6D6D6" />
                <rect x="13" y="13" width="11" height="11" fill="#D6D6D6" />
              </svg>
            </Typography>
            <ProfileMenu2 />
          </div>
        </div>
      </Navbar>

      <AppDrawer
        openRight={openDrawer}
        openDrawerRight={openDrawerRight}
        closeDrawerRight={closeDrawerRight}
      />
    </>
  );
}
