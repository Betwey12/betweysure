import useXdaysMultiple from "@/hooks/useXdaysMultiple";
import XdaysMultipleUi from "../ui/xdays-multiple-ui";

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
  maxAccuracy = 70,
  maxOdds = 2,
  investment = 300,
  noOfGames = 3,
  bookie,
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
      investment={investment}
      bookie={bookie}
    />
  );
}
