"use client";
import { dashboardMenuItems } from "../components/constants";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { cn } from "@/utils/lib/cn";
import SidebarMenuItem from "./DashboardSIdebarCard";
import LogoutButton from "@/components/button/LogoutButton";
import Logo from "@/assets/Logo";
interface DashboardSidebarProps {
  setShowConfirmLogoutModal: Dispatch<SetStateAction<boolean>>;
}
const DashboardSidebar = ({
  setShowConfirmLogoutModal,
}: DashboardSidebarProps) => {
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
            {collapseText ? (
              <h1 className="text-4xl font-bold text-transparent bg-linear-to-r from-blue-800 to-orange-600 bg-clip-text">
                SE
              </h1>
            ) : (
              <Logo />
            )}
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

          <LogoutButton
            setShowConfirmLogoutModal={setShowConfirmLogoutModal}
            collapseText={collapseText}
          />
        </section>
      </aside>
    </>
  );
};

export default DashboardSidebar;
