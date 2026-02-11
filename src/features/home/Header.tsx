"use client";
import AppButton from "@/components/button/AppButton";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeSIdebar from "./HomeSidebar";
import Logo from "@/assets/Logo";

export const Header = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="flex h-20 py-5  bg-white shadow px-6">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <article className="hidden w-1/3 md:flex items-center gap-4">
          <AppButton
            appVariant="secondary"
            className="w-1/2"
            onClick={() => router.push("/auth/register")}
          >
            Register
          </AppButton>
          <AppButton
            appVariant="primary"
            className="w-1/2"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </AppButton>
        </article>
        <Menu
          className="h-6 w-6 cursor-pointer md:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
      <HomeSIdebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </header>
  );
};
