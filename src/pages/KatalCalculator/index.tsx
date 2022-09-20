import BlackBackgroundWrapper from "../../components/BlackBackgroundWrapper/BlackBackgroundWrapper";
import Label from "../../components/Label";
import MetalCalculator from "../../features/calculator/MetalCalculator";
import MetalTable from "../../features/metalPrices/MetalTable";
import MetalsChart from "../../features/MetalsChart/MetalsChart";

const KatalCalculator = () => {
  return (
    <BlackBackgroundWrapper>
      <MetalsChart metal="platinum" />
      <MetalsChart metal="palladium" color="rgba(191, 184, 119, 1)" />
      {/* <Label /> */}
      <MetalTable />
      <MetalCalculator />
    </BlackBackgroundWrapper>
  );
};

export default KatalCalculator;
