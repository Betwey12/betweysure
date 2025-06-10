import { cn } from "@/lib/utils";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type TPassword =
  | "password"
  | "confirmPassword"
  | "currentPassword"
  | "newPassword";

interface PasswordInputProps {
  name: TPassword;
  error?: string;
  register: UseFormRegister<any>;
  placeholder: string;
}

export default function PasswordInput({
  error,
  register,
  name,
  placeholder,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <input
        type={showPassword ? "text" : "password"}
        {...register(name)}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-3 rounded border focus:outline-none text-gray-neutral text-base",
          {
            "border border-red-500": error,
          },
        )}
      />
      <button
        className="absolute text-xl right-2"
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-neutral" />
        ) : (
          <FaEye className="text-gray-neutral" />
        )}
      </button>
    </div>
  );
}
