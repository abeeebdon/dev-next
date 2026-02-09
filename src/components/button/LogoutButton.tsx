import ConfirmLogout from "@/features/dashboard/layout/ConfirmLogout";
import { cn } from "@/utils/lib/cn";
import { LogOut } from "lucide-react";
import { useState } from "react";

const LogoutButton = ({ collapseText }: { collapseText?: boolean }) => {
  const [showConfirmLogoutModal, setShowConfirmLogoutModal] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex items-center gap-3 cursor-pointer rounded-lg px-4 py-2  hover:bg-gray-100",
          collapseText && "justify-center px-2 py-3",
        )}
        onClick={() => setShowConfirmLogoutModal(true)}
      >
        <LogOut size={16} color="red" />
        {!collapseText && <span className="text-red-500">Logout</span>}
      </div>
      {showConfirmLogoutModal && <ConfirmLogout />}
    </>
  );
};

export default LogoutButton;
