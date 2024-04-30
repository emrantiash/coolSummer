import {
  Button,
  Tabs,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import StreamlinedWorkflow from "../../../../assets/illustration/StreamlinedWorkflow.png";

export default function EcoSystem() {
  const [activeTab, setActiveTab] = useState("integrated-ecosystem");

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

  return (
    <div className="min-h-[calc(100vh-20rem)]">
      {/* header */}
      <div className="flex justify-center items-center mx-10">
        <div className="grid grid-row-1 lg:grid-row-2 gap-4">
          <div className="flex flex-col justify-center ml-10">
            <h1 className="text-4xl font-medium mb-4 leading-tight antialiased">
              <div>Your Advantages of Choosing</div>
              <div> Us As Your Financial Tool</div>
            </h1>
          </div>
          <div className="flex justify-center">
            {/* content */}
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent gap-10 w-fit text-nowrap mx-10"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-suiteblue shadow-none rounded-none mt-1",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={
                      activeTab === value
                        ? "text-suiteblue"
                        : "text-suitefontblack"
                    }
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <div className="flex justify-center items-center">
                <img
                  src={StreamlinedWorkflow}
                  alt="Monstar Expense"
                  className="flex justify-center w-6/12 object-cover lg:mr-0 delay-1 slide-in-bottom px-14 py-5 select-none pointer-events-none"
                />

                <TabsBody>
                  {data.map(({ value, label, desc }) => (
                    <TabPanel
                      key={value}
                      value={value}
                      className="text-suitefontblack text-base font-normal mb-2"
                    >
                      <div className="text-3xl mb-4">{label}</div>
                      {desc}
                    </TabPanel>
                  ))}
                  <Button
                    variant="filled"
                    size="sm"
                    className="ml-3 px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
                  >
                    <span>Learn More</span>
                  </Button>
                </TabsBody>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      {/* our product */}
    </div>
  );
}
