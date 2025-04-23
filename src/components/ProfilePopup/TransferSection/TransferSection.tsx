import TransferRoute from "../TransferRoute/TransferRoute";
import TransferDetails from "../TransferDetails/TransferDetails";
import TransferSchedule from "../TransferSchedule/TransferSchedule";

import "./TransferSection.scss";
import { useResize } from "@/hooks/useResize";

interface ITransfersSectionProps {
  date: string;
  route: {
    from: { name: string; address: string };
    to: { name: string; address: string };
    times: string[];
  };
  transferDetails: string[];
  flightDetails?: string[];
}

const TransfersSection = ({
  date,
  route,
  transferDetails,
  flightDetails = [],
}: ITransfersSectionProps) => {
  const { isMobile } = useResize();

  const shouldShowFlightDetails = flightDetails?.length > 0;

  return (
    <div className="transfers-section-container">
      {!isMobile && <div className="title">Transfers</div>}
      <div className="transfers-data">
        <div className="date">{date}</div>
        <div className="date-underline" />
        <TransferRoute from={route.from} to={route.to} times={route.times} />
        <TransferDetails items={transferDetails} />
        {shouldShowFlightDetails && <TransferSchedule items={flightDetails} />}
      </div>
    </div>
  );
};

export default TransfersSection;
