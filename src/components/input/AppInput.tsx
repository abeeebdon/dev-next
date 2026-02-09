import * as React from "react";
import { cn } from "@/utils/lib/cn";

type AppInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm text-left font-medium"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border px-3 py-2 transition focus:outline-none focus:ring-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500",
            className,
          )}
          {...props}
        />

        {error && (
          <p className="mt-1 text-left text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  },
);

AppInput.displayName = "AppInput";

export default AppInput;
