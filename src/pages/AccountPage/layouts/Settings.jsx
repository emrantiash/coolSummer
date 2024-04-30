import {
  Button,
  Input,
  Typography,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";
import { useState } from "react";

export default function Settings() {
  const [selectedFormat, setSelectedFormat] = useState("DD/MM/YYYY");

  const DateFormats = [
    "DD/MM/YYYY",
    "MM/DD/YYYY",
    "YYYY/MM/DD",
    "DD-MM-YYYY",
    "MM-DD-YYYY",
    "YYYY-MM-DD",
  ];

  return (
    <div>
      <div className="flex justify-start items-center py-8 border-b">
        <div className="flex flex-col text-suitefontblack antialiased">
          <Typography
            variant="h6"
            className="text-lg text-suitefontblack antialiased"
          >
            Preferences
          </Typography>

          <p className="text-sm text-gray-700 antialiased">
            Manage your preferences for date format, privacy settings and email
            notification
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center py-8 border-b">
        <div className="flex flex-col text-suitefontblack antialiased">
          <Typography
            variant="paragraph"
            className="text-lg text-suitefontblack antialiased"
          >
            Date Format
          </Typography>

          <p className="text-sm text-gray-700 antialiased">
            Select a date format and time to be used for your MonstarSuite
            account activity
          </p>
        </div>

        <div className="flex gap-3">
          <Select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e)}
            className="mb-5 bg-blue-gray-50 border-none"
            labelProps={{
              className:
                "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
            }}
          >
            {DateFormats.map((format) => (
              <Option key={format} value={format} className="p-2">
                {format}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex justify-start items-center py-6 border-b">
        <Typography
          variant="h6"
          className="text-lg text-suitefontblack antialiased"
        >
          Email Notification
        </Typography>
      </div>

      <div className="flex flex-col gap-8 text-suitefontblack antialiased py-10">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="small"
              className="text-lg text-suitefontblack antialiased"
            >
              New sign-in to account alert
            </Typography>

            <p className="text-sm text-gray-700 antialiased">
              Recieve email alerts whenever your account is signed in from a new
              device, browser or location
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

        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="small"
              className="text-lg text-suitefontblack antialiased"
            >
              Third-party app access alert
            </Typography>

            <p className="text-sm text-gray-700 antialiased">
              Receive email alerts whenever your account is accessed from a new
              third-party app or location
            </p>
          </div>

          <div className="flex gap-3">
            <Switch
              id="custom-switch-component-2"
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

        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col text-suitefontblack antialiased">
            <Typography
              variant="small"
              className="text-lg text-suitefontblack antialiased"
            >
              Newsletter subscription
            </Typography>

            <p className="text-sm text-gray-700 antialiased">
              Receive marketing communication regarding Monstarsuite’s products,
              services, and events from Monstarsuite and its regional partners.
            </p>
          </div>

          <div className="flex gap-3">
            <Switch
              id="custom-switch-component-3"
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
      </div>
    </div>
  );
}
