import { Typography, Switch } from "@material-tailwind/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inputStyle =
  "peer h-full w-full rounded-[7px] !border !border-gray-200 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-300 focus:border-2 focus:!border-blue-300 focus:border-t-transparent focus:!border-t-blue-300 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-100/40 disabled:text-blue-gray-700";

export default function Privacy() {
  return (
    <div>
      <div className="flex flex-col py-8 border-b">
        <div className="flex justify-between items-center pb-6">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="h6"
              className="text-lg text-suitefontblack antialiased"
            >
              Two-Factor Authentication
            </Typography>

            <p className="text-sm text-gray-700 antialiased">
              Added Layer of security to authenticate whenever you log in
            </p>
          </div>

          <div className="flex gap-3">
            <Switch
              id="custom-switch-component-1"
              ripple={false}
              className="h-full w-full checked:bg-logocyan"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col text-suitefontblack antialiased gap-2">
          <Typography className="text-base text-suitefontblack antialiased">
            Mobile Number
          </Typography>

          <input
            type="text"
            className="peer border border-transparent bg-gray-200 rounded-md w-1/3 px-4 py-2 text-blue-gray-700 outline-none transition-all placeholder:text-gray-500 focus:bg-white focus:border focus:!border-blue-300 focus:outline-0 bg-blue-gray-100/40 disabled:text-blue-gray-700"
            placeholder="XXXXXXXXXX"
          />

          <div className="flex items-center justify-start gap-2 cursor-pointer">
            <span className="text-sm text-[#1199ED] font-bold">
              Authenticate Your Mobile Number
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[#1199ED] text-base"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-8 border-b">
        <div className="flex justify-between items-center pb-6">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="h6"
              className="text-lg text-suitefontblack antialiased"
            >
              Recovery E-mail
            </Typography>

            <p className="text-sm text-gray-700 antialiased">
              Set up a recovery Email that allows you to access and recover data
              if you have trouble logging in
            </p>
          </div>
        </div>
        <div className="flex flex-col text-suitefontblack antialiased gap-2">
          <Typography className="text-base text-suitefontblack antialiased">
            Recovery Email
          </Typography>

          {/* <input
            type="text"
            className="border-suitefontblack/50 bg-gray-200 rounded-md w-1/3 px-4 py-2"
            placeholder="recovery@monstarsuite.com"
          /> */}
          <input
            type="text"
            className="peer border border-transparent bg-gray-200 rounded-md w-1/3 px-4 py-2 text-blue-gray-700 outline-none transition-all placeholder:text-gray-500 focus:bg-white focus:border focus:!border-blue-300 focus:outline-0 bg-blue-gray-100/40 disabled:text-blue-gray-700"
            placeholder="recovery@monstarsuite.com"
          />

          <div className="flex items-center justify-start gap-2 cursor-pointer">
            <span className="text-sm text-[#1199ED] font-bold">
              Authenticate Your Email
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[#1199ED] text-base"
            />
          </div>
        </div>
      </div>

      <div className="py-8 border-b text-suitefontblack antialiased">
        <div className="flex items-start gap-10 pb-6 text-nowrap">
          <Typography
            variant="paragraph"
            className="text-lg text-suitefontblack antialiased"
          >
            Backup Phone Number
          </Typography>

          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="flex items-center justify-start gap-2">
              {/* <input
                type="text"
                className="w-1/3 border-suitefontblack/50 bg-gray-200 rounded-md px-4 py-2"
                placeholder="XXXXXXXXXXXXXXX"
              /> */}
              <input
                type="text"
                className="peer border border-transparent bg-gray-200 rounded-md w-1/3 px-4 py-2 text-blue-gray-700 outline-none transition-all placeholder:text-gray-500 focus:bg-white focus:border focus:!border-blue-300 focus:outline-0 bg-blue-gray-100/40 disabled:text-blue-gray-700"
                placeholder="XXXXXXXXXXXXXXX"
              />
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-[#1199ED] font-bold">
                Authenticate Your Backup phone Number
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#1199ED] text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
