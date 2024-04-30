import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  Avatar,
  Typography,
  Menu,
  MenuItem,
  MenuList,
  MenuHandler,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function ProfileMenu2() {
  const [optionOpen, setOptionOpen] = useState(false);
  const navigate = useNavigate();

  // Animation variants
  const toggleVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const closeMenu = () => {
    setOptionOpen(false);
  };

  const profileMenuItems = [
    // {
    //   label: "My Profile",
    //   icon: UserCircleIcon,
    // },
    // {
    //   label: "Edit Profile",
    //   icon: Cog6ToothIcon,
    // },
    // {
    //   label: "Inbox",
    //   icon: InboxArrowDownIcon,
    // },
    // {
    //   label: "Help",
    //   icon: LifebuoyIcon,
    // },
    {
      label: "Account",
      icon: Cog6ToothIcon,
      location: "/account",
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      location: "/login",
    },
  ];

  return (
    <Menu
      open={optionOpen}
      handler={setOptionOpen}
      placement="bottom-end"
      offset={-5}
    >
      <MenuHandler>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <Avatar
            src="https://s3-alpha-sig.figma.com/img/2ef2/683c/6be208bf1353cf655d9d836efe9c4b71?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JE9cVX3G7ZXRAmNXvvoVznGFW~3tZfmB8Pt88jUmuWf8T6K7g5oswNprVDyd2dPaIZpLzFfk1~3P9TmZjgi0bDMjYq3e7NiOFYs~-0I4V51M9PsuwpwvEtO~M8L8INlueOyhCUnElGSsTKHSKgLbl39snbDSu3MwdWxs3aONl7~KdK27fkbGRFrP9wXA08gElrF16EEYSSJ2d5r8CacoxET8hX1bw5bj4kejkSiJI8ZbAk39U5UDMNHJzOAIWSOcece0~LsJ9~GkN5ksRrB-YrveQON83RJ4R7KMRYn7DJC54NC48ufXDIavuk99gnEo~tMliZaKf-SqxNenK-9pjg__"
            size="sm"
          />
          <motion.div
            initial={optionOpen ? "open" : "closed"}
            animate={optionOpen ? "closed" : "open"}
            variants={toggleVariants}
          >
            <FontAwesomeIcon icon={faChevronUp} className="text-lg" />
          </motion.div>
        </div>
      </MenuHandler>
      <MenuList>
        {profileMenuItems.map(({ label, icon, location }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                if (location) {
                  closeMenu();
                  navigate(location);
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem &&
                "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
              }`}
            >
              {React.createElement(icon, {
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
  );
}
