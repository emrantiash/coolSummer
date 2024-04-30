import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Organisation() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="flex flex-col py-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="h6"
              className="text-lg text-suitefontblack antialiased"
            >
              Manage your Company Information
            </Typography>
          </div>
        </div>
      </div>

      <div className="space-y-5 mb-20">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-none bg-gray-100 px-5 ${
              open === 1 ? "rounded-t-xl" : "rounded-xl shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc"
                className="w-8 h-8 rounded-full"
                alt="Monstarlab"
              />
              <span className="text-lg font-normal text-suitefontblack antialiased">
                Monstarlab Enterprise Solutions
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className="bg-gray-100 px-5 rounded-b-xl pt-0">
            <div className="grid grid-cols-2 gap-10 px-10 pt-2 pb-8">
              {/* Left Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Organisation Name
                  </Typography>
                  <input
                    value="Monstarlab Enterprise Solutions"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Monstarlab Enterprise Solutions"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Industry
                  </Typography>
                  <input
                    value="Financial Services"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Financial Services"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Contact Person
                  </Typography>
                  <input
                    value="Amiya Rahman"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Amiya Rahman"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Email
                  </Typography>
                  <input
                    value="amiya_rahman@mles.com"
                    type="email"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="person1@monstarsuite.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Phone Number
                  </Typography>
                  <input
                    value="+8801234567890"
                    type="tel"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="+8801234567890"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Currency
                  </Typography>

                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="BDT"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="BDT">BDT</Option>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                  </Select>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Country
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Bangladesh"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Bangladesh">Bangladesh</Option>
                    <Option value="USA">USA</Option>
                    <Option value="UK">UK</Option>
                    <Option value="Germany">Germany</Option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    State/Province
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    City
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 1
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 2
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Zip
                  </Typography>

                  <input
                    value="1212"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="1212"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-start gap-2 px-10 pb-8">
              <button className="bg-[#1199ED] text-white px-10 py-2 rounded-md">
                Edit
              </button>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-none bg-gray-100 px-5 ${
              open === 2 ? "rounded-t-xl" : "rounded-xl shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc"
                className="w-8 h-8 rounded-full"
                alt="Monstarlab"
              />
              <span className="text-lg font-normal text-suitefontblack antialiased">
                Monstarlab BD
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className="bg-gray-100 px-5 rounded-b-xl pt-0">
            <div className="grid grid-cols-2 gap-10 px-10 pt-2 pb-6">
              {/* Left Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Organisation Name
                  </Typography>
                  <input
                    value="Monstarlab BD"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Monstarlab"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Industry
                  </Typography>
                  <input
                    value="Financial Services"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Financial Services"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Contact Person
                  </Typography>
                  <input
                    value="Amiya Rahman"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Amiya Rahman"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Email
                  </Typography>
                  <input
                    value="amiya_rahman@mlbd.com"
                    type="email"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="person1@monstarsuite.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Phone Number
                  </Typography>
                  <input
                    value="+8801234567890"
                    type="tel"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="+8801234567890"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Currency
                  </Typography>

                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="BDT"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="BDT">BDT</Option>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                  </Select>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Country
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Bangladesh"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Bangladesh">Bangladesh</Option>
                    <Option value="USA">USA</Option>
                    <Option value="UK">UK</Option>
                    <Option value="Germany">Germany</Option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    State/Province
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    City
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 1
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 2
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Zip
                  </Typography>

                  <input
                    value="1212"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="1212"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-start gap-2 px-10 pb-5">
              <button className="bg-[#1199ED] text-white px-10 py-2 rounded-md">
                Edit
              </button>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-none bg-gray-100 px-5 ${
              open === 3 ? "rounded-t-xl" : "rounded-xl shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc"
                className="w-8 h-8 rounded-full"
                alt="Monstarlab"
              />
              <span className="text-lg font-normal text-suitefontblack antialiased">
                Monstarlab Japan
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className="bg-gray-100 px-5 rounded-b-xl pt-0">
            <div className="grid grid-cols-2 gap-10 px-10 pt-2 pb-6">
              {/* Left Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Organisation Name
                  </Typography>
                  <input
                    value="Monstarlab Japan"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Monstarlab"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Industry
                  </Typography>
                  <input
                    value="Financial Services"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Financial Services"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Contact Person
                  </Typography>
                  <input
                    value="Amiya Rahman"
                    type="text"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Amiya Rahman"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Email
                  </Typography>
                  <input
                    value="amiya_rahman@mlbd.com"
                    type="email"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="person1@monstarsuite.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Phone Number
                  </Typography>
                  <input
                    value="+8801234567890"
                    type="tel"
                    className="bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="+8801234567890"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Currency
                  </Typography>

                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="BDT"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="BDT">BDT</Option>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                  </Select>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Country
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Bangladesh"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Bangladesh">Bangladesh</Option>
                    <Option value="USA">USA</Option>
                    <Option value="UK">UK</Option>
                    <Option value="Germany">Germany</Option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    State/Province
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    City
                  </Typography>
                  <Select
                    color="gray"
                    size="regular"
                    outline={false}
                    value="Dhaka"
                    className="border-none bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    labelProps={{
                      className:
                        "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                    }}
                  >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="New York">New York</Option>
                    <Option value="London">London</Option>
                    <Option value="Berlin">Berlin</Option>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 1
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Address Line 2
                  </Typography>
                  <input
                    value="Dhaka"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="Dhaka"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Typography className="text-base text-suitefontblack antialiased">
                    Zip
                  </Typography>

                  <input
                    value="1212"
                    type="text"
                    className="border-suitefontblack/50 bg-gray-200 text-suitefontblack rounded-md px-4 py-[10px]"
                    placeholder="1212"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-start gap-2 px-10 pb-5">
              <button className="bg-[#1199ED] text-white px-10 py-2 rounded-md">
                Edit
              </button>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
