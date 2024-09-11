import Joyride from "react-joyride";
import { useRouter } from "next/navigation";

interface JoyRideProps {
  showTour: boolean;
}

export default function JoyRide({ showTour }: JoyRideProps) {
  const router = useRouter();

  const joyrideSteps = [
    {
      target: ".dashboard",
      content:
        "Welcome to the dashboard, View predictions, Convert bet codes, Fund your betting wallet and more",
      disableBeacon: true,
    },
    {
      target: ".football",
      content: "Get predictions for all football leagues in the world",
    },
    {
      target: ".other-sports",
      content:
        "Get predictions for other sports like Basketball, Tennis, Ice Hockey and Baseball",
    },
    {
      target: ".free-predictions",
      content: "Get free predictions for football and other sports",
    },
    {
      target: ".buy-plan",
      content: "Buy a plan to get access to more predictions",
    },
    {
      target: ".bills-payment",
      content: "Fund your betting wallet, buy airtime, data and more",
    },
  ];

  function handleTourEnd(data: {
    action: string;
    index: number;
    status: string;
    type: string;
  }) {
    const { status, action } = data;
    console.log(status);

    if (status === "finished" || action === "close") {
      router.push("/dashboard");
    }
  }

  return (
    <>
      <div className="absolute top-0 bg-black/50 inset-0">
        <Joyride
          steps={joyrideSteps}
          run={showTour}
          callback={handleTourEnd}
          continuous
          disableScrollParentFix
        />
      </div>
    </>
  );
}
