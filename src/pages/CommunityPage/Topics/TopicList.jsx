import { Fragment, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Input,
  Menu,
  MenuItem,
  MenuHandler,
  MenuList,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";

import MonstarPeopleBlack from "../../../assets/logo/MonstarPeopleBlack.svg";

import {
  ChevronUpIcon,
  ChevronDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

import milify from "millify";

export default function TopicList() {
  const [thumbUp, setThumbUp] = useState(false);
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

  const cardData = [
    {
      title: "Tax Season Tips: Maximizing Deductions",
      description:
        "Discussion on effective strategies for maximizing tax deductions during tax season.",
      type: "Discussion",
      likeCount: 16,
      replies: 3,
    },
    {
      title: "Navigating Payroll Compliance: Best Practices",
      description:
        "Discussion on best practices and methods to ensure compliance in payroll management.",
      type: "Discussion",
      likeCount: 7,
      replies: 7,
    },
    {
      title: "Employee Engagement Strategies for Better Payroll Processing",
      description:
        "Discussion on innovative ways to involve employees in the payroll process and improve engagement.",
      type: "Question",
      likeCount: 3,
      replies: 2,
    },
  ];

  function findColorCode(type) {
    const color = menuOptions.find((option) => option.label === type);
    return color.colorCode;
  }

  // Animation variants
  const toggleVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  return (
    <div className="grid grid-cols-1 gap-7 mx-10 md:mx-[70px] pt-5 pb-20">
      <Card className="w-full overflow-hidden bg-gray-200">
        <CardHeader className="bg-gray-300 text-left py-4 px-5 rounded-none m-0 shadow-sm relative">
          <div className="flex items-center justify-between px-2">
            <img
              src={MonstarPeopleBlack}
              alt="MonstarPeople"
              className="w-40 h-auto select-none pointer-events-none"
            />
            <div className="flex items-center text-nowrap space-x-2">
              <Menu
                open={sortByMenuOpen}
                handler={setSortByMenuOpen}
                placement="bottom-end"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <Typography className="font-normal text-suitefontblack">
                  Sort By
                </Typography>
                <MenuHandler>
                  <div className="flex items-center justify-between w-40 border border-gray-500 rounded-md px-3 py-1 cursor-pointer text-suitefontblack hover:bg-gray-300 hover:text-gray-600 transition-all duration-100">
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
          </div>
        </CardHeader>
        {cardData.map((card, index) => (
          <div key={index} className="cursor-pointer hover:bg-gray-300">
            <CardBody>
              <div className="flex flex-col space-y-2">
                <Typography
                  variant="h6"
                  color="gray"
                  className="text-xl font-medium text-left text-gray-800"
                >
                  {card.title}
                </Typography>
                <div className="flex items-center justify-between space-x-3">
                  <Typography
                    variant="paragraph"
                    color="gray"
                    className="font-normal text-justify mr-5"
                  >
                    {card.description}
                  </Typography>

                  {/* Number  */}
                  <div className="flex space-x-1">
                    <Typography className="font-bold">
                      {milify(card.likeCount)}
                    </Typography>

                    <HandThumbUpIcon
                      onClick={() => setThumbUp(!thumbUp)}
                      className={`w-6 h-6 cursor-pointer ${
                        thumbUp ? "text-blue-500" : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex items-center justify-between pt-0">
              <div className="flex items-center space-x-3 text-gray-900">
                <Typography
                  className={`font-normal text-${findColorCode(card.type)}`}
                >
                  {card.type}
                </Typography>

                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                <Tooltip content={`${card.replies} Replies`}>
                  <Typography className="font-normal text-suitefontblack">
                    {milify(card.replies)} Replies
                  </Typography>
                </Tooltip>
              </div>
            </CardFooter>

            {/* divider */}
            <div className="border border-gray-300 mx-5"></div>
          </div>
        ))}
      </Card>
    </div>
  );
}
