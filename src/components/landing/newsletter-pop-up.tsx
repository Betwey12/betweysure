import { useRef } from "react";
import { cn } from "../../lib/utils";
import { useOnClickOutside } from "usehooks-ts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import CloseTimes from "../ui/close";
import { Button } from "../ui/button";
import usePopUp from "@/hooks/usePopUp";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

type NewsLetterForm = yup.InferType<typeof schema>;

export default function NewsLetterPopUp() {
  const { setPopUp, popUp } = usePopUp();
  const insideEl = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useOnClickOutside(insideEl, () => setPopUp(null));
  const isNewsletter = popUp === "newsletter";

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: NewsLetterForm) => HTTPRequest.Post(`newsletter`, data),
  });

  async function onSubmit(data: NewsLetterForm) {
    const response = await mutateAsync(data);

    if (!response.success || isError) {
      return toast.error(response.message);
    }
    toast.success(response.message);
    setPopUp(null);
  }

  return (
    <>
      {isNewsletter && (
        <div className="fixed transition-transform bg-black/20 ease-in-out duration-500 inset-0 z-[90] px-4 lg:px-0 flex items-center justify-center" />
      )}

      <div
        className={cn(
          "fixed transition-transform ease-in-out duration-500 -translate-y-[200vh] inset-0 z-[90] px-4 lg:px-0 flex items-center justify-center",

          {
            "translate-y-0": popUp === "newsletter",
          }
        )}
      >
        <div
          ref={insideEl}
          className="relative rounded-lg lg:rounded-3xl flex flex-col items-center justify-center px-4 gap-4 lg:px-20 py-12 lg:py-20 bg-white text-blue-three max-w-2xl text-sm dark:text-white dark:bg-blue-one"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-3xl text-center font-bold">
              Get Free Weekly Free Tips
            </h1>
            <p className="text-center text-gray-one">
              Simply enter your name and email below to and we will send you
              well analysed free tips every week.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-2 justify-center w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="gap-4 grid grid-cols-2">
              <fieldset className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  className={cn(
                    "w-full bg-white px-4 py-3 border rounded focus:outline-none text-gray-neutral",
                    {
                      "border-red-500 border": errors.name?.message,
                    }
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="w-full bg-white px-4 py-3 border rounded focus:outline-none text-gray-neutral"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    {errors.email.message}
                  </p>
                )}
              </fieldset>
            </fieldset>

            <Button className="mt-6 py-3 justify-center text-white">
              Yes!, I want free tips
              {isPending && <FaSpinner className="animate-spin" />}
            </Button>
          </form>
          <CloseTimes onClick={() => setPopUp(null)} />
        </div>
      </div>
    </>
  );
}
