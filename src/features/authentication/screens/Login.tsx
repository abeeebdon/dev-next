"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { loginSchema } from "../components/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import AppInput from "@/components/input/AppInput";
import AppButton from "@/components/button/AppButton";
import Link from "next/link";
import { setCookie } from "@/utils/helpers/cookies";
import { useRouter } from "next/navigation";
import JompstartLogo from "@/assets/JompstartLogo";
type LoginFormValues = yup.InferType<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);
    setCookie("auth-token", "fake-jwt-token");
    router.push("/dashboard");
  };
  return (
    <section className="flex justify-center h-screen items-center md:items-start  ">
      <main className="w-full max-w-md text-center rounded-lg h-fit bg-white shadow p-8 ">
        <div className="flex justify-center ">
          <JompstartLogo />
        </div>
        <div className="mt-2">
          <h3>Welcome back</h3>
          <p>Sign in to continue to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
          {/* Email */}
          <AppInput
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <AppInput
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Password */}
          <AppButton type="submit" disabled={isSubmitting}>
            Login
          </AppButton>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-orange-500 hover:underline"
          >
            Create account
          </Link>
        </p>
      </main>
    </section>
  );
};

export default Login;
