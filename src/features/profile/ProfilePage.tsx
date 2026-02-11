"use client";
import { Pencil } from "lucide-react";
import Avatar from "../dashboard/layout/UserAvatar";
import ProfileDetailsCard from "./components/ProfileDetailsCard";
import AppButton from "@/components/button/AppButton";
import { useState } from "react";
import { EditProfile } from "./components/EditProfile";

const ProfilePage = () => {
  const [sHowEdit, setSHowEdit] = useState(false);
  return (
    <div className="">
      <article>
        <div className="flex justify-between p-6 ">
          <div className="">
            <h2 className="text-xl font-semibold ">Personal info</h2>
            <p className=" text-sm mt-1">
              Customize how your profile information will appear to the
              networks.
            </p>
            <div className="relative w-fit mt-6">
              <Avatar name="Abeeb M" size={100} className="" />
              <button className=" bg-black p-2 rounded-full absolute bottom-0 right-0 ">
                <Pencil size={16} className="text-white" />
              </button>
            </div>
          </div>
          <AppButton
            appVariant="primary"
            className="w-40"
            onClick={() => setSHowEdit(true)}
          >
            Edit Profile
          </AppButton>
        </div>
        {/* Body */}

        <div className="flex-1 p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <ProfileDetailsCard label="First name" value="John Doe" />
          <ProfileDetailsCard label="Last name" value="John Doe" />
          <ProfileDetailsCard label="Role" value="John Doe" />
          <ProfileDetailsCard label="Email" value="johnDoe@gmail.com" />
        </div>
      </article>
      {sHowEdit && <EditProfile onClose={() => setSHowEdit(false)} />}
    </div>
  );
};

export default ProfilePage;
