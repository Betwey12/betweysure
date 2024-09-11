import PlanInfo from "@/components/profile/plan-info";
import Settings from "@/components/profile/settings";
import UserInfo from "@/components/profile/user-info";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-10">
      <UserInfo />
      <PlanInfo />

      {/* Settings Section */}
      <Settings />
    </div>
  );
}
