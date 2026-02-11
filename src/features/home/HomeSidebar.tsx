"use client";
import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";
import AppButton from "@/components/button/AppButton";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/lib/cn";

const HomeSIdebar = ({
  setShowSidebar,
  showSidebar,
}: {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <article
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-2/3 max-w-64 bg-white flex flex-col justify-between p-4 shadow-lg md:hidden transform transition-transform duration-600  ease-in-out",
          showSidebar ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <article>
          <div className="justify-end flex items-center">
            <X
              onClick={() => setShowSidebar(false)}
              className="cursor-pointer"
            />
          </div>
          <article className="flex flex-col mt-20 gap-4">
            <AppButton
              appVariant="secondary"
              className="w-full"
              onClick={() => router.push("/auth/register")}
            >
              Register
            </AppButton>
            <AppButton
              appVariant="primary"
              className="w-full"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </AppButton>
          </article>
        </article>
      </article>
    </>
  );
};

export default HomeSIdebar;
