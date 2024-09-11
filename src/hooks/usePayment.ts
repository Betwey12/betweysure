import { usePaystackPayment } from "react-paystack";
import { useFlutterwave } from "flutterwave-react-v3";
import { useAuth } from "./useAuth";

export default function usePayment({
  amount,
  currency,
  planCode,
  flutterwavePlanCode,
}: {
  amount: number;
  currency: string;
  planCode: string;
  flutterwavePlanCode: string;
}) {
  const { user } = useAuth();
  const handlePaystackPayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "",
    plan: planCode,
  });

  const handleFlutterPayment = useFlutterwave({
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY ?? "",
    tx_ref: new Date().getTime().toString(),
    amount,
    currency,
    payment_options: "card,mobilemoney,ussd",
    payment_plan: flutterwavePlanCode,
    customer: {
      email: user?.email || "",
      phone_number: user?.phone || "",
      name: user?.fullName || "",
    },

    customizations: {
      title: "Betweysure subscription",
      description:
        "Subscribe to betweysure to get the most accurate sports predictions",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  });
  return { handlePaystackPayment, handleFlutterPayment };
}
