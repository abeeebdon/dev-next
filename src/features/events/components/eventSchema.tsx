import * as yup from "yup";

export const createEventSchema = yup.object({
  title: yup.string().required("Event title is required"),
  date: yup.string().required("Event date is required"),
  location: yup.string().required("Location is required"),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});
