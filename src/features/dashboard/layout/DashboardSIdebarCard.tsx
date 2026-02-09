"use client";

import Link from "next/link";
import { cn } from "@/utils/lib/cn";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { SidebarMenuItemProps } from "../types/types";

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  href,
  name,
  Icon,
  collapsed,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100",
        collapsed && "justify-center px-2 py-3",
        isActive && "bg-gray-200 font-semibold",
      )}
    >
      <Icon size={20} />
      {!collapsed && <span>{name}</span>}
    </Link>
  );
};

export default SidebarMenuItem;
