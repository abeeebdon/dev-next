"use client";
import AppButton from "@/components/button/AppButton";
import { removeCookie } from "@/utils/helpers/cookies";
import { useRouter } from "next/navigation";

const ConfirmLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    removeCookie("auth-token");
    router.push("/auth/login");
  };
  return (
    <div className="fixed inset-0 justify-center items-center flex bg-black/20">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold ">Confirm Logout</h2>
        <p className="text-gray-600 mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-end gap-3">
          <AppButton appVariant="secondary" className="w-fit  px-6 py-4">
            Cancel
          </AppButton>
          <AppButton
            appVariant="primary"
            className="w-fit bg-red-600 px-6 py-4"
            onClick={handleLogout}
          >
            Logout
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
