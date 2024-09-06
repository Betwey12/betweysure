import useXdaysMultiple from "@/hooks/useXdaysMultiple";
import XdaysMultipleUi from "../ui/xdays-multiple-ui";

interface XdaysMultipleProps {
  partnerLink: string;
  canShowImage?: boolean;
  maxAccuracy?: number;
  maxOdds?: number;
  investment?: number;
  noOfGames?: number;
}

export default function XdaysMultiple({
  partnerLink,
  canShowImage,
  maxAccuracy = 70,
  maxOdds = 2,
  investment = 300,
  noOfGames = 3,
}: XdaysMultipleProps) {
  const { topPredictions, returns } = useXdaysMultiple({
    maxAccuracy,
    maxOdds,
    investment,
    noOfGames,
  });

  return (
    <XdaysMultipleUi
      topPredictions={topPredictions}
      returns={returns}
      partnerLink={partnerLink}
      canShowImage={canShowImage}
      investment={investment}
    />
  );
}
