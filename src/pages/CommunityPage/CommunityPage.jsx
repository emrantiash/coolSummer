import { Fragment, useState } from "react";

import { Tabs, TabsHeader, Tab, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";

import ForumCards from "./components/ForumCards";
import Footer from "../../components/Footer";

import AddTopic from "./Topics/AddTopic";
import TopicList from "./Topics/TopicList";
import ViewTopic from "./Topics/ViewTopic";

import MarketPlace from "./Marketplace/Marketplace";
import CommunityApps from "./Marketplace/CommunityApps/CommunityApps";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("community-apps");
  const [sortByMenuOpen, setSortByMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Any");

  const handleSelectChange = (event) => {
    setSelectedOption(event);
  };

  const menuOptions = [
    {
      label: "Any",
      value: "any",
      colorCode: "gray102",
    },
    {
      label: "Discussion",
      value: "discussion",
      colorCode: "logocyan",
    },
    {
      label: "Question",
      value: "question",
      colorCode: "suiteorange",
    },
    {
      label: "Upvote",
      value: "upvote",
      colorCode: "suiteblue",
    },
    {
      label: "Time",
      value: "time",
      colorCode: "suitegreen",
    },
  ];

  const toggleVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const data = [
    {
      label: "Forum",
      value: "forum",
    },
    {
      label: "Marketplace",
      value: "marketplace",
    },
    {
      label: "Add Topic",
      value: "addtopic",
    },
    {
      label: "Topic List",
      value: "topic-list",
    },
    {
      label: "View Topic",
      value: "viewtopic",
    },
  ];

  return (
    <div className="mt-20">
      <div
        className="mx-10 md:mx-[70px] bg-white md:pt-5"
        // style={{ position: "sticky", top: 70, zIndex: 999 }}
      >
        <h1 className="text-xl font-bold text-suitefontblack antialiased select-none">
          MonstarSuite Community
        </h1>
      </div>

      <div
        className="mt-5 bg-gray-200 py-3"
        // style={{ position: "sticky", top: 85 }}
      >
        <div className="mx-10 md:mx-[70px]">
          <Tabs value={activeTab}>
            <TabsHeader
              className="max-w-min rounded-none border-b border-blue-gray-50 bg-transparent p-0 gap-5 text-nowrap"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-suiteblue shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`z-0 
                    ${
                      activeTab === value
                        ? "text-suiteblue transition duration-100"
                        : "hover:text-suiteblue/80 transition duration-100"
                    }`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>

      <div className="bg-gray-100">
        <div
          className="mx-10 md:mx-[70px] pt-5"
          // className="mx-10 md:mx-[70px] mt-2 bg-white p-3 rounded-lg shadow-md"
          // style={{ position: "sticky", top: 145, zIndex: 999 }}
        >
          {activeTab !== "addtopic" && (
            <div className="flex justify-between items-center">
              {activeTab === "forum" ? (
                <>
                  <input
                    type="text"
                    placeholder="Search Community"
                    className="w-1/2 text-left px-4 py-3 rounded-lg bg-gray-200 text-suitefontblack placeholder:text-suitefontblack/50 focus:outline-suitefontblack/50 focus:ring-1 transition duration-100"
                  />
                  <Button
                    color="blue"
                    className="normal-case text-base rounded-md antialiased px-8"
                    size="sm"
                    variant="outlined"
                    onClick={() => setActiveTab("addtopic")}
                  >
                    <span>Add Topic</span>
                  </Button>
                </>
              ) : activeTab === "marketplace" ? (
                <>
                  <input
                    type="text"
                    placeholder="Search Application"
                    className="w-1/2 text-left px-4 py-3 rounded-lg bg-gray-200 text-suitefontblack placeholder:text-suitefontblack/50 focus:outline-suitefontblack/50 focus:ring-1 transition duration-100"
                  />
                  <div className="flex items-center space-x-2">
                    <Menu
                      open={sortByMenuOpen}
                      handler={setSortByMenuOpen}
                      placement="bottom-end"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                    >
                      <Typography className="font-normal text-suitefontblack select-none">
                        Sort By
                      </Typography>
                      <MenuHandler>
                        <div className="flex items-center justify-between w-40 border border-gray-500 rounded-md px-3 py-[6px] cursor-pointer text-suitefontblack hover:bg-gray-300 hover:text-gray-600 transition-all duration-100">
                          <Typography className="font-normal">
                            {selectedOption}
                          </Typography>
                          <motion.div
                            initial={sortByMenuOpen ? "open" : "closed"}
                            animate={sortByMenuOpen ? "closed" : "open"}
                            variants={toggleVariants}
                            className="text-lg"
                          >
                            <FontAwesomeIcon icon={faChevronUp} />
                          </motion.div>
                        </div>
                      </MenuHandler>
                      <MenuList className="space-y-1">
                        {menuOptions.map((option) => (
                          <Fragment key={option.value}>
                            <MenuItem
                              value={option.value}
                              onClick={() => {
                                handleSelectChange(option.label);
                                setSortByMenuOpen(false);
                              }}
                            >
                              {option.label}
                            </MenuItem>
                          </Fragment>
                        ))}
                      </MenuList>
                    </Menu>
                    <Button
                      color="blue"
                      className="normal-case text-base rounded-md antialiased px-8"
                      size="sm"
                      variant="outlined"
                    >
                      <span>Upload</span>
                    </Button>
                  </div>
                </>
              ) : (
                activeTab === "community-apps" && (
                  <>
                    <input
                      type="text"
                      placeholder="Search Application"
                      className="w-1/2 text-left px-4 py-3 rounded-lg bg-gray-200 text-suitefontblack placeholder:text-suitefontblack/50 focus:outline-suitefontblack/50 focus:ring-1 transition duration-100"
                    />
                    <div className="flex items-center space-x-2">
                      <Menu
                        open={sortByMenuOpen}
                        handler={setSortByMenuOpen}
                        placement="bottom-end"
                        animate={{
                          mount: { y: 0 },
                          unmount: { y: 25 },
                        }}
                      >
                        <Typography className="font-normal text-suitefontblack select-none">
                          Sort By
                        </Typography>
                        <MenuHandler>
                          <div className="flex items-center justify-between w-40 border border-gray-500 rounded-md px-3 py-[6px] cursor-pointer text-suitefontblack hover:bg-gray-300 hover:text-gray-600 transition-all duration-100">
                            <Typography className="font-normal">
                              {selectedOption}
                            </Typography>
                            <motion.div
                              initial={sortByMenuOpen ? "open" : "closed"}
                              animate={sortByMenuOpen ? "closed" : "open"}
                              variants={toggleVariants}
                              className="text-lg"
                            >
                              <FontAwesomeIcon icon={faChevronUp} />
                            </motion.div>
                          </div>
                        </MenuHandler>
                        <MenuList className="space-y-1">
                          {menuOptions.map((option) => (
                            <Fragment key={option.value}>
                              <MenuItem
                                value={option.value}
                                onClick={() => {
                                  handleSelectChange(option.label);
                                  setSortByMenuOpen(false);
                                }}
                              >
                                {option.label}
                              </MenuItem>
                            </Fragment>
                          ))}
                        </MenuList>
                      </Menu>
                    </div>
                  </>
                )
              )}
            </div>
          )}
        </div>

        {activeTab === "forum" && <ForumCards />}
        {activeTab === "marketplace" && <MarketPlace {...{ setActiveTab }} />}
        {activeTab === "community-apps" && <CommunityApps />}
        {activeTab === "addtopic" && <AddTopic />}
        {activeTab === "topic-list" && <TopicList />}
        {activeTab === "viewtopic" && <ViewTopic />}
      </div>

      <Footer />
    </div>
  );
}
