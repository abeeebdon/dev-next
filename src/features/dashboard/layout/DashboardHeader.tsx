"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import JompLogo from "@/assets/images/CompanyLogo";
import MobileSidebar from "./MobileSidebar";
import Avatar from "./UserAvatar";

const DashboardHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className="flex h-20 items-center justify-between  bg-white px-6">
        <div className=" flex items-center gap-2 ">
          <JompLogo size={50} className="md:hidden" />

          <h2 className="text-lg font-semibold hidden md:block">Welcome</h2>
        </div>
        <div className="flex items-center gap-2">
          <Avatar name="Abeeb Maroof" />
          <Menu
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </header>
      {showSidebar && <MobileSidebar setShowSidebar={setShowSidebar} />}
    </>
  );
};

export default DashboardHeader;
