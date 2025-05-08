import { formatCurrency } from "@/lib/utils";

interface PlanCardProps {
  title: string;
  price: number;
  duration: string;
  currencyCode: string;
}

export default function PlanCards({
  title,
  price,
  duration,
  currencyCode,
}: PlanCardProps) {
  return (
    <div className="flex flex-col gap-2 border-gray-two border p-4 rounded dark:border-none dark:bg-blue-one">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4">
        <strong>Price</strong> {formatCurrency(price, currencyCode)}
      </p>
      <p>
        <strong>Duration</strong> {duration}
      </p>
    </div>
  );
}
