import { Fragment } from "react";

import { Drawer, Typography, IconButton } from "@material-tailwind/react";

import MBillIcon from "../../../assets/icons/MBill.png";
import MExpenseIcon from "../../../assets/icons/MExpense.png";
import MPeopleIcon from "../../../assets/icons/MPeople.png";
import MBooksIcon from "../../../assets/icons/MBooks.png";

export default function AppDrawer({ openRight, closeDrawerRight }) {
  const appData = [
    {
      icon: MBillIcon,
      name: "MBill",
    },
    {
      icon: MExpenseIcon,
      name: "Expense",
    },
    {
      icon: MPeopleIcon,
      name: "People",
    },
    {
      icon: MBooksIcon,
      name: "MBooks",
    },
  ];

  return (
    <Fragment>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="px-5 py-6"
      >
        <div className="mb-4 pb-2 flex items-center justify-between border-b">
          <Typography variant="h5" color="blue-gray" className="select-none">
            Accessed Apps
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {appData.map((app, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:bg-blue-gray-100 p-2 rounded-lg"
            >
              <img src={app.icon} alt={app.name} className="w-fit h-fit" />
              <Typography variant="small" color="blue-gray">
                {app.name}
              </Typography>
            </div>
          ))}
        </div>
      </Drawer>
    </Fragment>
  );
}
