import { X } from "lucide-react";
import AppButton from "@/components/button/AppButton";
import { useState } from "react";

interface EditProfileProps {
  onClose?: () => void;
}

export const EditProfile = ({ onClose }: EditProfileProps) => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johnDoe@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // submit logic here
    console.log("Updated profile:", form);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold ">Edit Profile</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* First name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Last name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              value={form.email}
              readOnly
              disabled
              className="mt-2 w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-gray-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              Email address cannot be changed
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center px-4 gap-5">
          <AppButton appVariant="secondary" onClick={onClose} className="w-1/2">
            Cancel
          </AppButton>
          <AppButton
            appVariant="primary"
            onClick={handleSubmit}
            className="w-1/2"
          >
            Save changes
          </AppButton>
        </div>
      </div>
    </div>
  );
};
