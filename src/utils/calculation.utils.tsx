import { ounceToGram } from "../const/common.const";

export const calculateMetalCompoundPrice = ({
  metalPrice,
  compound,
  percentage,
}: {
  metalPrice: number;
  compound: number;
  percentage: number;
}) => {
  return (metalPrice / ounceToGram) * compound * (percentage / 100);
};
