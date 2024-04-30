import { createElement, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../redux/slices/loginSlice";
import { useLocation } from "react-router-dom";
import useIsLogin from "../../../lib/hooks/isLogin";
import Network from "../../../utils/network/Network";
import cookieCutter from 'cookie-cutter';
import cookiesNames from "../../../utils/constant/Constant";
import * as CryptoJS from 'crypto-js';

import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  LockOpenIcon,
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // console.log(location.pathname)

  const closeMenu = () => setIsMenuOpen(false);

  const isLogin = useIsLogin();

  // console.log(isLogin[0],currentPage)

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const profileMenuItems = [
    // {
    //   label: "Accessed Apps",
    //   icon: LockOpenIcon,
    // },
    {
      id: 1,
      label: "Account",
      icon: Cog6ToothIcon,
      location: "/account",
    },
    {
      id: 2,
      label: "Sign Out",
      icon: PowerIcon,
      location: "/login",
    },
  ];

  const _makeTheCall = (id, location) => {
    // console.log("==================",id,location)
    id == 2 &&
      (cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, null, {
        expires: new Date(0),
      }),
      dispatch(signout()));
    navigate(location);
  };

  const _getlogin = () => {
    // window.location.href = 'http://10.3.2.29:8003/login'
    window.location =Network.authServer +
      "client_id=1&" +
      `redirect_uri=` +Network.redirect_uri +`&`+
      // `redirect_uri=http://localhost:5173/callback&`+
      `response_type=code`;
  };

  return (
    // !isLogin[0] ?
    //  currentPage != "/login" || currentPage != "/signup" ?
    //   <Button
    //   variant="filled"
    //   size="md"
    //   className="w-full bg-suiteorange normal-case text-base font-normal flex justify-center items-center"
    //   type="submit"
    //   // loading={loading}
    //   // disabled={loading}
    //   onClick={()=>navigate("/login")}
    // >
    //   Get Started
    // </Button>:
    isLogin[0] ? (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="md"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1 shadow-lg">
          {profileMenuItems.map(({ id, label, icon, location }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  if (location) {
                    closeMenu();
                    _makeTheCall(id, location);
                  }
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    ) : currentPage === "/login" || currentPage === "/signup" ? (
      <></>
    ) : (
      <Button
        variant="filled"
        size="md"
        className="w-full bg-suiteorange normal-case text-base font-normal flex justify-center items-center"
        type="submit"
        // onClick={()=>navigate("/login")}
        // onClick={()=>window.location.href = 'http://10.3.2.29:8003/login'}
        onClick={_getlogin}
      >
        Get Started
      </Button>
    )
  );
}
