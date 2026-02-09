"use client";
import { dashboardMenuItems } from "../components/constants";
import { useState } from "react";
import { ChevronsLeft, LogOut } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { cn } from "@/utils/lib/cn";
import JompLogo from "../../../assets/images/CompanyLogo";
import JompTextLogo from "@/assets/images/JompTextLogo";
import SidebarMenuItem from "./DashboardSIdebarCard";
import ConfirmLogout from "./ConfirmLogout";
import LogoutButton from "@/components/button/LogoutButton";

const DashboardSidebar = () => {
  const [collapseText, setCollapseText] = useState(false);
  return (
    <>
      <aside
        className={cn(
          "bg-white hidden md:block relative shadow  p-4  transition-all duration-300",
          collapseText ? "w-20" : "w-64",
        )}
      >
        <button
          onClick={() => setCollapseText(!collapseText)}
          className="rounded p-1 absolute top-[12%] bg-blue-200 -right-3 hover:bg-gray-100"
        >
          {collapseText ? (
            <ChevronsRight size={16} />
          ) : (
            <ChevronsLeft size={16} />
          )}
        </button>
        <section className="flex flex-col justify-between  h-full">
          <article>
            <div className="flex gap-4 items-center mt-2">
              <JompLogo size={50} />
              {!collapseText && <JompTextLogo />}
            </div>
            <nav className=" space-y-2 mt-6">
              {dashboardMenuItems.map(({ href, name, icon: Icon }) => {
                return (
                  <SidebarMenuItem
                    key={href}
                    href={href}
                    name={name}
                    Icon={Icon}
                    collapsed={collapseText}
                  />
                );
              })}
            </nav>
          </article>

          <LogoutButton collapseText={collapseText} />
        </section>
      </aside>
    </>
  );
};

export default DashboardSidebar;
