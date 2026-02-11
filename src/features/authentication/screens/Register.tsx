"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppInput from "@/components/input/AppInput";
import AppButton from "@/components/button/AppButton";
import * as yup from "yup";
import { registerSchema } from "../components/authSchema";
import JompstartLogo from "@/assets/Logo";

type RegisterFormValues = yup.InferType<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log("Register data:", data);
    await new Promise((res) => setTimeout(res, 1000));
  };

  return (
    <section className="flex h-screen py-6 items-center justify-center">
      <main className="w-full max-w-md rounded-lg bg-white shadow p-8 mt-10">
        {/* Header */}
        <div className="flex justify-center pt-20">
          <JompstartLogo />
        </div>
        <div className="mb-6 text-center mt-2">
          <h3 className="text-xl font-semibold">Create your account</h3>
          <p className="text-sm text-gray-500">
            Fill in the information below to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <AppInput
              label="First Name"
              type="text"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <AppInput
              label="Last Name"
              type="text"
              {...register("lastName")}
              error={errors.lastName?.message}
            />
          </div>

          <AppInput
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <AppInput
            label="Phone Number"
            type="tel"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <AppInput
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          <AppInput
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <AppButton type="submit" isLoading={isSubmitting}>
            Register
          </AppButton>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-orange-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </main>
    </section>
  );
}
