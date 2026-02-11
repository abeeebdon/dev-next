import { ProfileDetailsCardTypes } from "../types/profileTypes";

const ProfileDetailsCard = ({ label, value }: ProfileDetailsCardTypes) => {
  return (
    <article className="flex flex-col  gap-2">
      <label className="text-gray-600 text-sm">{label}</label>
      <p>{value}</p>
    </article>
  );
};

export default ProfileDetailsCard;
