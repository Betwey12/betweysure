import XdaysMultipleUi from "../ui/xdays-multiple-ui";
import useXdaysMultiple from "@/hooks/useXdaysMultiple";

interface XdaysMultipleProps {
  partnerLink: string;
  canShowImage?: boolean;
  maxAccuracy?: number;
  maxOdds?: number;
  investment?: number;
  noOfGames?: number;
  bookie?: string;
}

export default function XdaysMultiple({
  partnerLink,
  canShowImage,
  maxAccuracy = 70,
  maxOdds = 2,
  investment = 300,
  noOfGames = 3,
  bookie = "1xbet",
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
      bookie={bookie}
    />
  );
}
