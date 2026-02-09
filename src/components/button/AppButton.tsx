import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/lib/cn";
import { Spinner } from "../ui/spinner";

type AppVariant = "primary" | "secondary";

type AppButtonProps = React.ComponentProps<typeof Button> & {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  appVariant?: AppVariant;
};

export default function AppButton({
  className,
  isLoading,
  leftIcon,
  rightIcon,
  appVariant = "primary",
  children,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 w-full p-3 rounded-lg font-semibold",
        appVariant === "primary" &&
          "bg-orange-500 text-white hover:bg-orange-600",
        appVariant === "secondary" &&
          "border border-orange-500 text-orange-500 hover:bg-orange-50",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </Button>
  );
}
