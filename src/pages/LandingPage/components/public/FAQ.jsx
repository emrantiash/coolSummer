import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

import MessengerLogo from "../../../../assets/logo/MessengerLogo.svg";
import { Fragment, useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const accordionData = [
    {
      id: 0,
      title: "How does MonsterSuite Works?",
      content:
        "MonstarSuite works as an integrated cloud-based platform designed to automate and streamline the accounts payable, spend, and expense management processes. Operating similarly to other SaaS (Software as a Service) applications, MonstarSuite allows you to sign up and log in to your account from anywhere in the world, providing flexibility and real-time financial operation management. You can sign up from https://signup.monstarsuite.com. Once you have an account, you can sign in at https://login.monstarsuite.com and access the application.",
    },
    {
      id: 1,
      title: "What is MonstarSuite used for?",
      content:
        "MonstarSuite is a cloud-based platform that provides a unified solution for all your financial management needs. It is a suite of applications that can be used individually or together to automate and streamline the accounts payable, spend, and expense management processes. MonstarSuite is designed to help you manage your finances more efficiently, save time, and reduce costs.",
    },
    {
      id: 2,
      title: "How much does MonstarSuite cost?",
      content:
        "MonstarSuite offers a variety of plans to suit your needs. The cost of each plan depends on the number of users and the features you need. You can find more information about our pricing plans at https://monstarsuite.com/pricing.",
    },
  ];

  const handleAlwaysOpen = () => setAlwaysOpen(!alwaysOpen);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center mt-28 mb-5">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 text-3xl font-medium tracking-wide">
            Frequent Asked Question
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 mx-10 w-8/12">
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={open === item.id ? "-" : "+"}
              className="px-8 py-1 mx-10 rounded-md mb-4 bg-white border-gray-300 shadow-sm"
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className={`flex justify-between items-center text-lg font-medium tracking-wide border-b-0 transition-colors duration-100 ease-in-out ${
                  open === item.id ? "font-semibold" : "text-suitefontblack"
                }`}
              >
                <div>{item.title}</div>
              </AccordionHeader>
              <AccordionBody className="text-suitefontblack text-base">
                {item.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-lg font-normal leading-tight antialiased mb-2">
          Have some more questions?
        </div>

        <div className="text-base font-light leading-tight antialiased">
          Did not get answers to your questions? Chat live with our team
        </div>

        <Button
          variant="filled"
          size="sm"
          className="flex items-center justify-center px-10 py-4 mt-5 w-fit rounded-full normal-case text-base tracking-wide font-light gap-2 bg-white border border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-sm text-suitefontblack"
        >
          <span>Chat</span>
          {/* Messenger icon */}

          <span>
            <img
              src={MessengerLogo}
              alt="Messenger Logo"
              className="w-6 select-none pointer-events-none"
            />
          </span>
        </Button>
      </div>
    </Fragment>
  );
}
