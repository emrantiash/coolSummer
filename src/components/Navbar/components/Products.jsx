import { Fragment, useState } from "react";
import { Card, CardBody, MenuList, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Products({ onMenuChange }) {
  const products = [
    {
      label: "Finance",
      value: "finance",
      children: [
        {
          label: "Monstar Accounting",
          value: "maccounting",
          path: "/products/maccounting",
          desc: "Simplify accounting processes and improve financial reporting. Automate invoicing, bill payment, and expense tracking.",
        },
        {
          label: "Monstar Payroll",
          value: "mpayroll",
          path: "/products/mpayroll",
          desc: "Revolutionizing Payroll Management. Simplify payroll processing, ensure tax compliance, and empower employees with self-service tools.",
        },
        {
          label: "Monstar Tax",
          value: "mtax",
          path: "/products/mtax",
          desc: "Automate tax compliance and reporting. Simplify tax preparation and filing.",
        },
      ],
    },
    {
      label: "Human Resources",
      value: "hr",
      children: [
        {
          label: "MonstarPeople Payroll",
          value: "mpayroll",
          path: "/products/mpayroll",
          desc: "Revolutionizing Payroll Management. Simplify payroll processing, ensure tax compliance, and empower employees with self-service tools.",
        },
        {
          label: "MonstarPeople Attendance",
          value: "mattendance",
          path: "/products/mattendance",
          desc: "Simplify workforce management with automated time tracking and attendance monitoring. Ensure accuracy and compliance effortlessly.",
        },
        {
          label: "MonstarPeople",
          value: "mpeople",
          path: "/products/mpeople",
          desc: "Streamline HR operations with a comprehensive suite of tools for employee onboarding, performance tracking, and HR analytics. Simplify HR tasks and empower your workforce.",
        },
      ],
    },
    {
      label: "Sales",
      value: "sales",
      children: [
        {
          label: "Monstar CRM",
          value: "mcrm",
          path: "/products/mcrm",
          desc: "Automate your customer relationship management processes and grow your business. Streamline your sales pipeline and customer interactions.",
        },
        {
          label: "Monstar Leads",
          value: "mleads",
          path: "/products/mleads",
          desc: "Manage your leads and grow your business. Streamline your sales pipeline and customer interactions.",
        },
        {
          label: "Monstar Pipeline",
          value: "mpipeline",
          path: "/products/mpipeline",
          desc: "Create and manage your sales pipeline. Streamline your sales pipeline and customer interactions.",
        },
      ],
    },
    {
      label: "Marketing",
      value: "marketing",
      children: [
        {
          label: "Monstar Campaign",
          value: "mcampaign",
          path: "/products/mcampaign",
          desc: "Create and manage your marketing campaigns. Streamline your sales pipeline and customer interactions.",
        },
        {
          label: "Monstar Analytics",
          value: "manalytics",
          path: "/products/manalytics",
          desc: "Automate your data analytics processes and grow your business. Streamline your sales pipeline and customer interactions.",
        },
        {
          label: "Monstar Social",
          value: "msocial",
          path: "/products/msocial",
          desc: "Manage your social media and grow your business. Streamline your sales pipeline and customer interactions.",
        },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(products[0].label);

  return (
    <MenuList className="w-full mt-2 bg-gray-50">
      <div className="flex">
        <SideMenu
          products={products}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onMenuChange={onMenuChange}
        />

        <div className="w-full">
          <Typography variant="h6" className="px-10 py-5 text-blue-gray-800">
            {activeTab}
          </Typography>
          <hr className="my-0" />
          <div className="grid grid-cols-2 gap-6 mt-4 ml-5 mr-10 my-5">
            {products
              .find((product) => product.label === activeTab)
              .children.map((item, index) => (
                <Fragment key={index}>
                  <Link to={item.path} onClick={() => onMenuChange()}>
                    <Card className="shadow-md hover:shadow-lg py-2 border transition-all duration-100 text-blue-gray-700 hover:bg-blue-gray-50">
                      <CardBody>
                        <Typography variant="h6" className="mb-2">
                          {item.label}
                        </Typography>
                        <Typography className="text-suitefontblack">
                          {item.desc}
                        </Typography>
                      </CardBody>
                    </Card>
                  </Link>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </MenuList>
  );
}
