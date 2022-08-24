import BlackBackgroundWrapper from "../../components/BlackBackgroundWrapper/BlackBackgroundWrapper";
import Label from "../../components/Label";
import MetalCalculator from "../../features/Calculator/MetalCalculator";
import MetalTable from "../../features/metalPrices/MetalTable";
import MetalsChart from "../../features/MetalsChart/MetalsChart";

const KatalCalculator = () => {
  return (
    <BlackBackgroundWrapper>
      <Label />
      <MetalTable />
      <MetalCalculator />
      <MetalsChart />
    </BlackBackgroundWrapper>
  );
};

export default KatalCalculator;
