"use client";
import AppButton from "@/components/button/AppButton";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <article className="flex items-center gap-4">
        <AppButton
          appVariant="primary"
          onClick={() => router.push("/auth/register")}
        >
          Register
        </AppButton>
        <AppButton
          onClick={() => router.push("/auth/login")}
          appVariant="secondary"
        >
          Login
        </AppButton>
      </article>
    </header>
  );
};
