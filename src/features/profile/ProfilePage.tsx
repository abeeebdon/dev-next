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
        <div className="md:flex justify-between md:p-6 ">
          <div className="">
            <h2 className="text-xl font-semibold text-purple">Personal info</h2>
            <p className=" text-sm mt-1 text-gray-500">
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
            className="hidden w-40 bg-linear-to-br from-purple to-pink"
            onClick={() => setSHowEdit(true)}
          >
            Edit Profile
          </AppButton>
        </div>
        {/* Body */}

        <div className="flex-1 p-6 mt-4  md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
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
