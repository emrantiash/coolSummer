import { useState } from "react";

import { HeaderTabs } from "./components/HeaderTabs";
import Content from "./Content";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("my-profile");
  return (
    <div className="mt-20">
      <div
        className="mx-10 md:mx-[70px] bg-white md:pt-5"
        // style={{ position: "sticky", top: 70, zIndex: 999 }}
      >
        <h1 className="text-xl font-bold text-suitefontblack antialiased">
          Account
        </h1>
      </div>
      <div className="mx-10 md:mx-[70px] mt-5">
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content page={activeTab} />
      </div>
    </div>
  );
}
