"use client";
import useGetUser from "@/hooks/useGetUser";

export default function PlanInfo() {
  const { user } = useGetUser();
  return (
    <div className="flex flex-col gap-2">
      <p className="capitalize flex items-center gap-2">
        Plan:
        <span className="text-purple-500">{user?.plan?.type}</span>
      </p>
      <p className="flex items-center gap-2">
        Expiry:
        <span className="text-red-400">
          {new Date(user?.plan?.expiry ?? 0).toDateString()}
        </span>
      </p>
    </div>
  );
}
