import WhatsIncluded from "@/components/pricing/whats-included";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import PageHeader from "@/components/shared/page-header";
import AuthedLink from "@/components/ui/authed-link";

export default function PaymentConfirmationPage() {
  return (
    <>
      <OtherPagesHero />

      <PageHeader
        title={"Payment confirmed"}
        description={
          "Congratulations! Your payment was successful. You will recieve daily/weekend games in your inbox. In the meantime, you can proceed to dashboard to view your categorized premium predictions"
        }
      />

      <div className="flex flex-col items-center">
        <AuthedLink
          href="/dashboard/football-predictions"
          className="bg-cyan px-4 py-2 rounded text-white mt-4 cursor-pointer"
          title={"View predictions"}
        />
      </div>

      <WhatsIncluded />
    </>
  );
}
