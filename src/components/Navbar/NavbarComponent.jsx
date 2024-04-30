import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Navbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  TabsHeader,
} from "@material-tailwind/react";

import ProfileMenu from "./components/ProfileMenu";

import MonstarSuiteBlack from "../../assets/logo/MonstarSuiteBlack.svg";
import Products from "./components/Products";

export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navList = (
    <ul className="mr-10 mt-5 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      <Tabs
        className="flex flex-col lg:flex-row lg:items-center lg:gap-14 lg:ml-10"
        value={activeTab}
      >
        <TabsHeader
          className="rounded-none bg-transparent p-0 gap-10"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-300 shadow-none rounded-none",
          }}
        >
          <Link to="/">
            <Tab
              value="home"
              onClick={() => {
                setActiveTab("home");
                setIsMenuOpen(false);
              }}
            >
              <Typography
                className={`text-xl font-normal ${
                  activeTab === "home"
                    ? "text-suiteblue "
                    : "text-suitefontblack"
                }`}
              >
                Home
              </Typography>
            </Tab>
          </Link>

          <Menu
            open={isMenuOpen}
            placement="bottom"
            animate={{
              mount: { y: 0 },
              unmount: { y: 50 },
            }}
            // lockScroll={true}
          >
            <MenuHandler>
              <TabsHeader
                className="rounded-none bg-transparent p-0 gap-10"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-blue-300 shadow-none rounded-none",
                }}
              >
                <Tab
                  value="products"
                  onClick={() => {
                    setActiveTab("products");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <Typography
                    className={`flex justify-center items-center text-xl font-normal ${
                      activeTab === "products"
                        ? "text-suiteblue "
                        : "text-suitefontblack"
                    }`}
                  >
                    <span>Products</span>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`ml-2 h-5 w-5 transition-transform ${
                        isMenuOpen && "rotate-180"
                      }`}
                    />
                  </Typography>
                </Tab>
              </TabsHeader>
            </MenuHandler>

            <Products onMenuChange={!setIsMenuOpen} />
          </Menu>

          <Link to="/pricing">
            <Tab
              value="pricing"
              onClick={() => {
                setActiveTab("pricing");
                setIsMenuOpen(false);
              }}
            >
              <Typography
                className={`text-xl font-normal ${
                  activeTab === "pricing"
                    ? "text-suiteblue"
                    : "text-suitefontblack"
                }`}
              >
                Pricing
              </Typography>
            </Tab>
          </Link>

          <Link to="/community">
            <Tab
              value="community"
              onClick={() => {
                setActiveTab("community");
                setIsMenuOpen(false);
              }}
            >
              <Typography
                className={`text-xl font-normal ${
                  activeTab === "community"
                    ? "text-suiteblue"
                    : "text-suitefontblack"
                }`}
              >
                Community
              </Typography>
            </Tab>
          </Link>
        </TabsHeader>
      </Tabs>
    </ul>
  );

  return (
    <div className="max-h-[768px] overflow-scroll">
      {/* no border no shadow */}
      <Navbar className="fixed top-0 z-10 max-w-full rounded-none shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="ml-10 cursor-pointer font-medium"
          >
            <img
              src={MonstarSuiteBlack}
              alt="MonstarSuite"
              className="h-6 select-none pointer-events-none"
              width={150}
            />
          </Typography>
          <div className="hidden lg:block">{navList}</div>

          <div className="flex items-center gap-4 mr-10">
            {/* <div className="flex items-center gap-x-1">
              <Link to="/login">
                <Button
                  variant="filled"
                  size="lg"
                  className="w-fit rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
                >
                  <span>Get Started</span>
                </Button>
              </Link>
            </div> */}
            <IconButton
              variant="text"
              className="mr-5 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>

            <ProfileMenu />
          </div>
        </div>
        {/* <Collapse className="lg:hidden" type="navbar" open={openNav}>
          {navList}
        </Collapse> */}
      </Navbar>
    </div>
  );
}
