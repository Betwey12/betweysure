import { plans } from "@/assets/data/data";

type TUserPlan = {
  currency: string;
};

export default function useUserPlan({ currency }: TUserPlan) {
  const userPlan = plans[currency] || plans["NGN"];
  const availableCurrency = plans[currency] ? currency : "NGN";

  return { userPlan, availableCurrency };
}
