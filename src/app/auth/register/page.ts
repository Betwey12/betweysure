import { useThemeContext } from "../hooks/useTheme";
import { cn } from "../lib/utils";
import Button from "../components/ui/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCheck, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HTTPRequest } from "../api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import Or from "../components/ui/Or";
import { GoogleIcon } from "../components/icons";
import PhoneInput from "../components/ui/PhoneInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuth";
import { Country } from "country-state-city";
import useGoogleWithCaptcha from "@/hooks/useGoogleWithCaptcha";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number")
    .min(10, "Phone number must be at least 10 characters"),
  phonecode: yup.string(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),

  tos: yup.boolean().oneOf([true], "You must accept the terms of service"),
});

type RegisterForm = typeof registerSchema extends yup.Schema<infer T>
  ? T
  : never;

type RegisterData = RegisterForm & { token: string; recaptchaAction: string };

export default function Register() {
  const navigate = useNavigate();
  const { google, handleReCaptchaVerify } = useGoogleWithCaptcha();
  const { user } = useAuthContext();

  const { theme } = useThemeContext();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: RegisterData) => HTTPRequest.Post("auth/onboard", data),
  });

  const countries = Country.getAllCountries();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    const token = await handleReCaptchaVerify("signup");
    const phonecode = data.phonecode ? data.phonecode : "+234";
    const currency = countries.find((country) =>
      phonecode.includes(country.phonecode)
    )?.currency;
    const newPhone = `${phonecode}${data.phone}`;

    if (!token) return toast.error("Recaptcha verification failed");

    const body = {
      ...data,
      phone: newPhone,
      phonecode: phonecode,
      token: token,
      recaptchaAction: "signup",
      currency: currency,
    };

    const response = await mutateAsync(body);

    if (isError || !response?.success) {
      const isPhoneError = response?.message.includes("phone");
      const message = isPhoneError ? "Phone already exist" : response.message;
      return toast.error(message);
    }

    toast.success(response.message);

    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/auth?mode=verifyEmail");
  };

  return (
    <>
      {!user ? (
        <div className="relative flex min-h-screen h-max">
          <div
            className={cn(
              "bg-white text-blue-two w-full lg:w-[50%] flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32",
              {
                "bg-blue-two text-white": theme === "dark",
              }
            )}
          >
            <div
              className={cn(
                "flex flex-col border border-gray-two items-start w-full bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md",
                {
                  "bg-blue-one border-0": theme === "dark",
                }
              )}
            >
              <h1 className="text-3xl text-left lg:text-4xl">
                Create an account <br /> and gain access!
              </h1>
              <p className="mt-2 text-xs">
                Sign up with a few clicks to join our community of Sure Winners
                and view the best betting tips and football match analysis.
              </p>
              <form
                action=""
                className="flex flex-col w-full gap-6 mt-10"
                onSubmit={handleSubmit(onSubmit)}
              >
                <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
                  <fieldset className="flex flex-col gap-2 w-full text-sm">
                    <label
                      htmlFor="fullName"
                      className="flex items-center gap-2"
                    >
                      Full Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Enter your full name"
                      className={cn(
                        "px-4 border py-3 rounded focus:outline-none text-gray-neutral",
                        {
                          "border border-red-500": errors.fullName,
                        }
                      )}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.fullName.message}
                      </p>
                    )}
                  </fieldset>
                </fieldset>

                <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
                  <fieldset className="flex flex-col gap-2 w-full text-sm">
                    <label htmlFor="email" className="flex items-center gap-2">
                      Email address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("email")}
                      placeholder="Enter your email"
                      className={cn(
                        "px-4 py-3 border rounded focus:outline-none text-gray-neutral",
                        {
                          "border border-red-500": errors.email,
                        }
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic">
                        {errors.email.message}
                      </p>
                    )}
                  </fieldset>

                  <fieldset className="flex w-full flex-col gap-2 text-sm">
                    <label htmlFor="phone" className="flex items-center gap-2">
                      Phone number
                      <span className="text-red-500">*</span>
                    </label>
                    <PhoneInput
                      setValue={setValue}
                      phonecodeName="phonecode"
                      register={register}
                      placeholder="Enter your phone number"
                      name="phone"
                      className={cn(
                        "px-4 py-3 border-y border-r focus:outline-none text-gray-neutral",
                        {
                          "border border-red-500": errors.phone,
                        }
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs italic">
                        {errors.phone.message}
                      </p>
                    )}
                  </fieldset>
                </fieldset>

                <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
                  <fieldset className="flex flex-col gap-2 text-sm w-full">
                    <label
                      htmlFor="password"
                      className="flex items-center gap-2"
                    >
                      Password
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        placeholder="Enter your password"
                        className={cn(
                          "w-full px-4 py-3 rounded border focus:outline-none text-gray-neutral",
                          {
                            "border border-red-500": errors.password,
                          }
                        )}
                      />
                      <Button
                        className="absolute text-xl top-1 right-2"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-gray-neutral" />
                        ) : (
                          <FaEye className="text-gray-neutral" />
                        )}
                      </Button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs italic">
                        {errors.password.message}
                      </p>
                    )}
                  </fieldset>

                  <fieldset className="flex flex-col gap-2 text-sm w-full">
                    <label
                      htmlFor="password"
                      className="flex items-center gap-2"
                    >
                      Confirm Password
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("confirmPassword")}
                        placeholder="Re-enter password"
                        className={cn(
                          "w-full px-4 py-3 rounded border focus:outline-none text-gray-neutral",
                          {
                            "border border-red-500": errors.confirmPassword,
                          }
                        )}
                      />
                      <Button
                        className="absolute text-xl top-1 right-2"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-gray-neutral" />
                        ) : (
                          <FaEye className="text-gray-neutral" />
                        )}
                      </Button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs italic">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </fieldset>
                </fieldset>

                <fieldset className="">
                  <label
                    htmlFor="tos"
                    className="flex items-center gap-2 text-sm cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      id="tos"
                      {...register("tos")}
                      hidden
                      className="peer"
                    />
                    <div
                      className={cn(
                        "w-5 h-5 rounded bg-white border border-cyan peer-checked:bg-[#2A2E45] flex items-center justify-center text-white",
                        {
                          "border border-red-500": errors.tos,
                        }
                      )}
                    >
                      <FaCheck className="text-xs" />
                    </div>
                    <p>I agree to the </p>
                    <Link to="/t&c" className="text-yellow-one">
                      Terms of Use
                    </Link>
                  </label>
                  {errors.tos && (
                    <p className="text-red-500 text-xs italic">
                      {errors.tos.message}
                    </p>
                  )}
                </fieldset>

                <fieldset className="flex flex-col gap-6">
                  <Button
                    disabled={isPending}
                    className="flex items-center justify-center py-3 text-center text-white bg-cyan"
                  >
                    Register
                    {isPending && (
                      <span className="animate-spin">
                        <FaSpinner />
                      </span>
                    )}
                  </Button>
                </fieldset>
              </form>
              <div className="flex items-center justify-between w-full mt-4 mb-6">
                <p className="text-xs">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="font-bold">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="w-full flex flex-col gap-6">
                <Or />
                <Button
                  className={cn(
                    "flex items-center justify-center py-3 text-center bg-white border border-cyan text-cyan",
                    {
                      "border-0 text-blue-three": theme === "dark",
                    }
                  )}
                  type="button"
                  onClick={google.signInWithSocial}
                >
                  <GoogleIcon />
                  Sign Up with Google
                </Button>
              </div>
            </div>
            <p className="absolute text-xs bottom-4 left-4">
              © Copyright 2023 Betweysure. All rights reserved.
            </p>
          </div>
          <div className="signup_bg w-[50%] lg:block relative hidden">
            <div className="flex flex-col items-center justify-end w-full h-full py-10 bg-black/60">
              <h3 className="text-3xl text-yellow max-w-[500px] mt-40 text-white">
                What you’ll benefit
              </h3>
              <div className="w-[300px] bg-white h-[1px] mt-4" />
              <div className="flex gap-2 flex-col text-white max-w-[600px]">
                {benefits.map((benefit) => (
                  <div className="flex items-center gap-3" key={benefit}>
                    <div className="w-4 h-4 rounded-full bg-yellow-one" />

                    <p
                      className="text-base lg:text-xl max-w-[90%]"
                      key={benefit}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
}

const benefits = [
  "Access to world-class algorithms",
  "Professional punters with one of the highest winning accuracy in the market",
  "Get the best betting tips from our team of experts",
  "Enjoy exclusive rewards like tips from paid bundles",
  "Have fun with betting on your favourite soccer matches, with updated statistics every day.",
  "Become a winner by following our proven strategies",
  "Choose from our flexible plans that suit your budget and needs, from free to premium options",
  "Get all the latest football news all in one place",
  "Join our global network of loyal customers who trust us with their betting decisions.",
];
