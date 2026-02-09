"use client";
import JompLogo from "@/assets/images/CompanyLogo";
import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";
import LogoutButton from "@/components/button/LogoutButton";
import AppButton from "@/components/button/AppButton";
import { useRouter } from "next/navigation";

const HomeSIdebar = ({
  setShowSidebar,
}: {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 md:hidden"
        onClick={() => setShowSidebar(false)}
      ></div>
      <article className="fixed inset-y-0 left-0 z-50 w-2/3 max-w-64 bg-white flex flex-col justify-between p-4 shadow-lg md:hidden">
        <article>
          <div className="justify-between flex items-center">
            <JompLogo size={40} />

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
