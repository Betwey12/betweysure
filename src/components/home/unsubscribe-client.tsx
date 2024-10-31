"use client";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

interface UnsubscribeClientProps {
  email: string;
}

export default function UnsubscribeClient({ email }: UnsubscribeClientProps) {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: { email: string }) =>
      HTTPRequest.Delete("newsletter", data),
  });

  async function handleUnsubscribe() {
    const res = await mutateAsync({ email });
    if (res?.success) {
      toast.success("Unsubscribed successfully");
      return;
    }
    console.log(res);
    toast.error("An error occurred");
  }

  return (
    <div className="flex flex-col gap-4 max-w-xl border border-gray-two items-center justify-center w-full bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:border-0 dark:bg-blue-one">
      <h3 className="text-3xl font-bold">Unsubscribe from the newsletter</h3>
      <p className="max-w-sm text-center">
        Are you sure you want to unsubscribe? You will no longer receive any
        newsletter emails from us.
      </p>
      <Button
        className="py-3 mt-8 text-center text-white gap-4 justify-center bg-cyan px-4 rounded"
        onClick={handleUnsubscribe}
      >
        Unsuscribe
        {isPending && <FaSpinner className="animate-spin" />}
      </Button>
    </div>
  );
}
