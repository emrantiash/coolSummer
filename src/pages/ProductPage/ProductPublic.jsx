import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCompanyCount } from "../../redux/slices/profileSlice";
import { thisProduct } from "../../redux/slices/productSlice";

import Footer from "../../components/Footer";
import { Button, List } from "@material-tailwind/react";
import { motion } from "framer-motion";

import MonstarSuiteBlack from "../../assets/logo/MonstarSuiteBlack.svg";
import MonstarBillBlack from "../../assets/logo/MonstarBillBlack.svg";
import MonstarExpenseBlack from "../../assets/logo/MonstarExpenseBlack.svg";
import MonstarPeopleBlack from "../../assets/logo/MonstarPeopleBlack.svg";

import LandingBoxShape from "../../assets/layout/LandingBoxShape.svg";
import Background1 from "../../assets/layout/Background1.svg";
import Background2 from "../../assets/layout/Background2.svg";
import Background3 from "../../assets/layout/Background3.svg";
import Laptop1 from "../../assets/layout/PixelBook.png";
import Laptop2 from "../../assets/layout/MacBookPro1.png";
import Laptop3 from "../../assets/layout/MacBookPro2.png";

import MonstarBillLanding from "../../assets/illustration/MonstarBillLanding.png";
import MonstarPeopleLanding from "../../assets/illustration/MonstarPeopleLanding.png";
import OfficeLandingPrivate from "../../assets/illustration/OfficeLandingPrivate.png";

export default function ProductPublic() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(-1);
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();

  const [alwaysOpen, setAlwaysOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("integrated-ecosystem");
  const [selectedApp, setSelectedApp] = useState("Monstar People");

  useEffect(() => {
    dispatch(getCompanyCount()).then(function (e) {
      console.log(e)
      e.payload && e.payload.success && setCount(e.payload.data.count);
    });
  }, []);

 

  const handleClick = (data) => {
    dispatch(thisProduct(data));
    count > 0 ? navigate("/select-organisation") : navigate("/search-organisation");
  };

  const data = [
    {
      label: "Integrated Ecosystem",
      value: "integrated-ecosystem",
      path: "/integrated-ecosystem",
      desc: `MonstarSuite stands as an unparalleled integrated ecosystem where diverse applications converge harmoniously. This integration simplifies the complexities of managing multiple tools by providing a centralized hub, ensuring seamless accessibility and efficient management. Users benefit from a unified interface that streamlines navigation and boosts productivity.`,
    },
    {
      label: "Productivity Amplified",
      value: "productivity-amplified",
      path: "/productivity-amplified",
      desc: `MonstarSuite's core ethos revolves around amplifying productivity. By seamlessly integrating applications and workflows, it eliminates redundancies and streamlines processes. The unified platform facilitates quick transitions between tasks and tools, saving valuable time and effort in navigating through disparate applications.`,
    },
    {
      label: "Committed Support",
      value: "committed-support",
      path: "/committed-support",
      desc: `Beyond the suite of tools, MonstarSuite is committed to ensuring a smooth journey for its users. A dedicated support team stands ready to assist in onboarding, troubleshoot, and offer ongoing guidance. This commitment to customer satisfaction ensures users can leverage the suite to its fullest potential, with reliable support available whenever needed.`,
    },
  ];

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

  const appData = [
    {
      id: 1,
      name: "Monstar People",
      imageSrc: MonstarPeopleBlack,
      color: "logocyan",
      description:
        "Monstar People revolutionises payroll management at a national level, offering a sophisticated yet user-friendly platform.",
      features: [
        "Automated payroll processing",
        "Tax Compliance",
        "Employee Self-Service",
        "Customisable Reporting",
      ],
    },
    {
      id: 2,
      name: "Monstar Bill",
      imageSrc: MonstarBillBlack,
      color: "suiteblue",
      description:
        "Monstar Bill revolutionises payroll management at a national level, offering a sophisticated yet user-friendly platform.",
      features: [
        "Automated payroll processing",
        "Tax Compliance",
        "Employee Self-Service",
        "Customisable Reporting",
      ],
    },
    {
      id: 3,
      name: "Monstar Expense",
      imageSrc: MonstarExpenseBlack,
      color: "suiteorange",
      description:
        "Monstar Expense revolutionises payroll management at a national level, offering a sophisticated yet user-friendly platform.",
      features: [
        "Automated payroll processing",
        "Tax Compliance",
        "Employee Self-Service",
        "Customisable Reporting",
      ],
    },
  ];

  const listTiles = [
    {
      backgroundColor: "logocyan",
      heading: "Revolutionizing Payroll Management",
      description:
        "Discover how MonstarPeople transforms payroll processing, streamlining calculations, ensuring tax compliance, and simplifying operations on a national scale.",
      backgroundImage: Background1,
      laptop: Laptop1,
    },
    {
      backgroundColor: "suiteblue",
      heading: "Simplifying Billing Management",
      description:
        "Explore how MonstarBill redefines billing management, offering intuitive tools to streamline invoicing, payment tracking, and client communication.",
      backgroundImage: Background2,
      laptop: Laptop2,
    },
    {
      backgroundColor: "suiteorange",
      heading: "Your Gateway to Unified Productivity",
      description:
        "Uncover the power of MonstarSuite, a comprehensive platform harmonizing multiple applications into one hub.",
      backgroundImage: Background3,
      laptop: Laptop3,
    },
  ];

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  const handleAlwaysOpen = () => setAlwaysOpen(!alwaysOpen);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div>
        {/* 1st section - Begin Your MonstarSuite Journey Today! */}
        <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
          <div className="min-h-[calc(100vh-30rem)]">
            <div className="col-span-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10">
                {/* content */}
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col justify-center ml-36">
                    <h1 className="text-6xl font-medium leading-tight">
                      Begin Your MonstarSuite Journey Today!
                    </h1>

                    <p className="text-gray-700 tracking-wide text-lg">
                      Your all-in-one tech hub.
                    </p>
                    <p className="text-gray-700 tracking-wide text-lg">
                      Connect, manage, conquer.
                    </p>
                    <Button
                      variant="filled"
                      size="md"
                      className="mt-10 w-fit px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
                    >
                      <span>Join Now</span>
                    </Button>
                  </div>
                </div>

                {/* image */}
                <div className="col-span-1 -mt-16">
                  <div className="relative w-full">
                    <div className="flex justify-center items-center">
                      <img
                        className="w-fit mx-auto object-contain select-none pointer-events-none"
                        src={MonstarBillLanding}
                        alt="Image 1"
                      />
                      <img
                        className="absolute w-fit object-cover transform translate-x-40 translate-y-44 mx-auto lg:mr-0 -ml-2 delay-1 select-none pointer-events-none"
                        src={MonstarPeopleLanding}
                        alt="Image 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2nd section - Select any of the applications */}
        <section className="leading-normal tracking-normal text-suitefontblack bg-gray-50 bg-fixed pt-20 mx-10 md:mx-0">
          <div className="min-h-[calc(100vh-20rem)]">
            <div className="flex justify-center items-center mx-10">
              <div>
                <h1 className="flex justify-center items-center text-4xl font-medium mb-4 leading-tight antialiased">
                  All The Best Products In One Place
                </h1>
                {/* divider */}
                <div className="flex justify-center items-center">
                  <div className="w-full h-[1px] bg-[#464A4D] bg-opacity-20 mx-14"></div>
                </div>
                <p className="flex justify-center text-gray-700 tracking-wide text-lg mt-2">
                  Click on any product below to learn more about how it can help
                  you reach your business goals.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mx-10 mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="col-span-1 flex justify-end items-start px-10">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-base font-medium mb-4 leading-tight antialiased">
                      Select any of the applications
                    </h1>
                    <List className="flex justify-start items-start gap-2 -ml-2">
                      {appData.map((app) => (
                        <Button
                          key={app.name}
                          className={`w-full flex items-center normal-case text-md font-normal tracking-wide ${
                            selectedApp === app.name
                              ? "text-white bg-gray-800"
                              : "text-black bg-gray-200"
                          } shadow-none hover:shadow-none mr-20 pr-20`}
                          variant="filled"
                          size="sm"
                          onClick={() => handleAppClick(app.name)}
                        >
                          <span>{app.name}</span>
                        </Button>
                      ))}
                    </List>
                  </div>
                </div>

                {selectedApp &&
                  appData?.map(
                    (app) =>
                      selectedApp === app?.name && (
                        <motion.div
                          className="col-span-1 bg-gray-200 rounded-md shadow-sm w-[calc(100vw-60rem)] px-10 py-16"
                          initial={{ x: 100 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                          key={app?.id}
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex flex-col justify-center items-center gap-8">
                              <img
                                className="w-fit slide-in-bottom object-contain select-none pointer-events-none"
                                src={app?.imageSrc}
                                alt={app?.name}
                              />

                              <p className="text-base text-center font-normal leading-tight tracking-wide antialiased">
                                {app?.description}
                              </p>

                              <Button
                                variant="filled"
                                size="sm"
                                className={`px-10 w-fit rounded-md bg-${app?.color} normal-case text-base tracking-wide font-medium`}
                              >
                                <span>Try Now </span>
                              </Button>
                              <Button
                                onClick={() => handleClick(app)}
                                variant="gradient"
                                size="sm"
                                className={`px-10 w-fit rounded-md normal-case text-base tracking-wide font-medium`}
                                style={{ backgroundColor: "red" }}
                              >
                                <span>Subscribe</span>
                              </Button>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2">
                              <p className="text-lg text-center text-black font-semibold leading-tight antialiased ml-2">
                                Premium Features
                              </p>

                              <List
                                className="flex justify-start items-start text-sm gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                  pointerEvents: "auto",
                                }}
                              >
                                {app?.features?.map((feature, index) => (
                                  <motion.li
                                    className="flex justify-start items-center gap-2"
                                    key={feature}
                                    initial={{
                                      opacity: 0,
                                      scale: 0.3,
                                      filter: "blur(10px)",
                                    }}
                                    animate={{
                                      opacity: 1,
                                      scale: 1,
                                      filter: "blur(0px)",
                                    }}
                                    transition={{
                                      duration: 0.2,
                                      delay: index * 0.2,
                                    }}
                                  >
                                    <span className="text-black">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m4.5 12.75 6 6 9-13.5"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-base">{feature}</span>
                                  </motion.li>
                                ))}
                              </List>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
              </div>
            </div>
          </div>
        </section>

        {/* 3rd section - Features */}
        <section className="leading-normal tracking-normal text-suitefontblack bg-gray-50 bg-fixed">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center items-center bg-gradient-to-r from-blue-100 to-gray-50 bg-contain bg-no-repeat">
                <div className="mx-10">
                  <img
                    src={MonstarSuiteBlack}
                    alt="Office Landing"
                    className="max-w-min slide-in-bottom object-contain select-none pointer-events-none mb-4"
                  />

                  <h1 className="text-5xl font-bold mb-4 leading-snug antialiased">
                    <p>
                      <span className="bg-[#1199ED] bg-opacity-50 pl-5 pr-3 -ml-6 py-1">
                        Unify,
                      </span>{" "}
                      Manage, Thrive.
                    </p>
                    <p>
                      Your all-in-one
                      <span className="bg-[#1199ED] bg-opacity-50 px-3 py-0 mx-1">
                        tech
                      </span>{" "}
                    </p>
                    <p> solution.</p>
                  </h1>

                  <p className="text-base font-light leading-relaxed tracking-wide antialiased">
                    Your all-in-one hub for seamless productivity and
                    collaboration.
                  </p>

                  <Button
                    variant="filled"
                    size="md"
                    className="mt-10 px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
                  >
                    <span>Learn More</span>
                  </Button>
                </div>
              </div>

              {/* image */}
              <div className="flex justify-center mb-10">
                <div className="relative w-full overflow-hidden">
                  <div className="flex justify-center">
                    <img
                      className="w-fit mx-auto select-none pointer-events-none"
                      src={LandingBoxShape}
                      alt="Landing Box Shape"
                    />
                    <img
                      src={OfficeLandingPrivate}
                      alt="Office Landing"
                      className="absolute w-fit mx-auto -bottom-36 ml-14 delay-1 slide-in-bottom select-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
          // className="bg-gradient-to-l from-blue-50 to-gray-50 bg-contain bg-no-repeat"
          >
            {/* list tiles */}
            <div className="grid grid-cols-2 gap-10 mx-20 py-10">
              {listTiles?.map((item, index) => (
                <div
                  key={index}
                  className={`bg-${item.backgroundColor} bg-opacity-70 rounded-2xl px-14 py-16`}
                >
                  <div className="flex">
                    <div>
                      <h1 className="text-2xl text-white font-bold mb-4 leading-tight antialiased">
                        {item.heading}
                      </h1>
                      <p className="text-white text-base leading-relaxed tracking-wide antialiased">
                        {item.description}
                      </p>
                      <Button
                        className="mt-10 px-10 rounded-md bg-transparent border border-white normal-case text-base text-white tracking-wide font-medium hover:bg-white hover:text-[#464A4D] hover:shadow-none hover:right-0 hover:bottom-0 hover:ring-0"
                        size="md"
                        variant="filled"
                      >
                        <span>Learn More</span>
                      </Button>
                    </div>
                    <div className="hidden xl:block">
                      <div className="col-span-1 flex justify-center items-center mt-10 pl-10">
                        <img
                          className="max-w-min slide-in-bottom object-contain select-none pointer-events-none"
                          src={item.backgroundImage}
                          alt="Background"
                        />
                        <img
                          className="absolute w-fit object-cover mb-10 ml-8 delay-1 slide-in-bottom pointer-events-none"
                          src={item.laptop}
                          alt="Laptop"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-span-1 flex justify-start items-start">
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl font-bold mb-2">Explore More</h1>

                  <div className="w-[calc(100vw-85rem)] h-[1px] bg-[#464A4D] bg-opacity-50" />

                  <List className="flex justify-start items-start gap-4 mt-2">
                    <li className="flex hover:underline hover:cursor-pointer">
                      What is MonstarSuite?
                    </li>
                    <li className="flex hover:underline hover:cursor-pointer">
                      See The Pricing
                    </li>
                  </List>

                  <h1 className="text-2xl font-bold mt-6 mb-2">Upcoming</h1>

                  <div className="w-[calc(100vw-85rem)] h-[1px] bg-[#464A4D] bg-opacity-50" />

                  <List className="flex justify-start items-start gap-4 mt-2 text-base">
                    <li className="flex hover:underline hover:cursor-pointer">
                      MonstarBook
                    </li>
                    <li className="flex hover:underline hover:cursor-pointer">
                      MonstarExpense
                    </li>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4th section - Semi Footer */}
        <section className="leading-normal tracking-normal text-suitefontblack bg-gray-50 border-gray-100 border-b p-12">
          <div className="flex items-center justify-center mb-3">
            <h1 className="text-3xl font-semibold leading-tight antialiased">
              Start Using MonstarSuite Today
            </h1>
          </div>
          <div className="flex items-center justify-center mb-3">
            <p className="text-gray-700 tracking-wide text-lg ml-4 antialiased">
              No Credit Card Needed
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button
              variant="filled"
              size="md"
              className="px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium shadow-none hover:shadow-none"
            >
              <span>Join Now</span>
            </Button>
          </div>
        </section>

        {/* 5th section - Footer */}
        <Footer />
      </div>
    </div>
  );
}
