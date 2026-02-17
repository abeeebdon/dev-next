"use client";
import { X } from "lucide-react";
import { CreateEventPageProps } from "../types/eventType";
import AppButton from "@/components/button/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createEventSchema } from "./eventSchema";
import AppInput from "@/components/input/AppInput";

type CreateEventFormValues = yup.InferType<typeof createEventSchema>;
const CreateEventModal = ({ setShowCreate }: CreateEventPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateEventFormValues>({
    resolver: yupResolver(createEventSchema),
  });

  const onSubmit = async (data: CreateEventFormValues) => {
    console.log("Create Event:", data);

    // later → call API
    await new Promise((res) => setTimeout(res, 1000));

    setShowCreate(false);
  };
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-h-[97%] overflow-y-auto no-scrollbar max-w-md">
        <div>
          <div className="flex justify-end">
            <X
              className="cursor-pointer"
              onClick={() => setShowCreate(false)}
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <AppInput
              label="Event Title"
              placeholder="Enter event title"
              {...register("title")}
              error={errors.title?.message}
            />

            <AppInput
              label="Event Date"
              type="date"
              {...register("date")}
              error={errors.date?.message}
            />

            <AppInput
              label="Location"
              placeholder="Event location"
              {...register("location")}
              error={errors.location?.message}
            />

            {/* Description */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="w-full rounded-lg border border-BrandOutline px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-BrandPrimary"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <AppButton
              type="button"
              appVariant="secondary"
              onClick={() => setShowCreate(false)}
            >
              Cancel
            </AppButton>

            <AppButton
              type="submit"
              isLoading={isSubmitting}
              appVariant="primary"
              className="flex-1"
            >
              Create Event
            </AppButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
