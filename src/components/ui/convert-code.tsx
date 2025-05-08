import { cn } from "../../lib/utils";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import useGetUser from "@/hooks/useGetUser";
import useGetSupportedBookies from "@/hooks/useGetSupportedBookies";
import { Button } from "./button";

const schema = yup.object({
  code: yup.string().required("Betting code is required"),
  from: yup.string().required("Convert from bookie is required"),
  to: yup.string().required("Convert to bookie is required"),
});

type ConvertCodeForm = yup.InferType<typeof schema>;

export default function ConvertCode() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { user: fetchedUser } = useGetUser();
  const { bookies, isPending: isFetchingBookies } = useGetSupportedBookies();

  const today = new Date();
  const expiryDate = new Date(fetchedUser?.plan?.expiry ?? 0);

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: ConvertCodeForm) =>
      HTTPRequest.Post(`bet/convert-bet-code`, data),
  });
  const onSubmit: SubmitHandler<ConvertCodeForm> = async (data) => {
    if (today > expiryDate) {
      return toast.error("Only premium users can convert codes");
    }
    const response = await mutateAsync(data);

    if (!response.success || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success(response.message);
  };

  return (
    <div
      id="convert-bet-code"
      className="border border-gray-three shadow w-full rounded-lg lg:rounded-[20px] p-4 lg:py-8 dark:bg-blue-one dark:border-0 dark:text-white"
    >
      <h3 className="text-2xl font-semibold">Convert Slip Code</h3>
      {isFetchingBookies ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <form
          action=""
          className="rounded-lg text-gray-one text-sm flex flex-col gap-2 mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="code">Enter bet code</label>
            <input
              type="text"
              {...register("code")}
              placeholder="Enter Bet Slip"
              id="code"
              className={cn(
                "px-4 border bg-white border-gray-two py-2 rounded focus:outline-none",
                {
                  "border border-red-500": errors.code,
                }
              )}
            />
            {errors.code && (
              <p className="text-red-500 text-xs">{errors.code.message}</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="from">Convert From</label>
            <select
              id="from"
              className={cn(
                "w-full px-4 py-3 rounded bg-white text-gray-one focus:outline-none shadaow border-gray-one border",
                {
                  "border-red-500": errors.from,
                }
              )}
              {...register("from")}
            >
              {bookies.map((bookie, index) => (
                <option key={index} value={bookie}>
                  {bookie}
                </option>
              ))}
            </select>
            {errors.from && (
              <p className="text-red-500 text-xs italic">
                {errors.from.message}
              </p>
            )}
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label htmlFor="to">Convert To</label>
            <select
              id="to"
              className={cn(
                "w-full px-4 py-3 rounded bg-white text-gray-one focus:outline-none shadaow border-gray-one border",
                {
                  "border-red-500": errors.to,
                }
              )}
              {...register("to")}
            >
              {bookies.map((bookie, index) => (
                <option key={index} value={bookie}>
                  {bookie}
                </option>
              ))}
            </select>
            {errors.to && (
              <p className="text-red-500 text-xs italic">{errors.to.message}</p>
            )}
          </fieldset>

          <Button className="bg-[#FE7750] text-white text-center flex justify-center items-center py-4 mt-6">
            Convert
            {isPending && (
              <span className="animate-spin">
                <FaSpinner />
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
