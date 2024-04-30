import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import MyProfile from "../layouts/MyProfile";
import Security from "../layouts/Security";
import Settings from "../layouts/Settings";
import Privacy from "../layouts/Privacy";
import Organisation from "../layouts/Organisation";
import Compliance from "../layouts/Compliance";

export function HeaderTabs({ activeTab, setActiveTab }) {
  const data = [
    {
      label: "My Profile",
      value: "my-profile",
      component: <MyProfile />,
    },
    {
      label: "Security",
      value: "security",
      component: <Security />,
    },
    {
      label: "Settings",
      value: "settings",
      component: <Settings />,
    },
    {
      label: "Privacy",
      value: "privacy",
      component: <Privacy />,
    },
    {
      label: "Organisation",
      value: "organisation",
      component: <Organisation />,
    },
    {
      label: "Compliance",
      value: "compliance",
      component: <Compliance />,
    },
  ];
  return (
    <Tabs
      value={activeTab}
      // style={{ position: "sticky", top: 120, zIndex: 999 }}
    >
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 text-nowrap z-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-suiteblue shadow-none rounded-none",
        }}
      >
        <div className="flex gap-5">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`${activeTab === value && "text-suiteblue"}`}
            >
              {label}
            </Tab>
          ))}
        </div>
      </TabsHeader>
    </Tabs>
  );
}
