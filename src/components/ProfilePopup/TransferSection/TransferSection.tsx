import TransferRoute from "../TransferRoute/TransferRoute";
import TransferDetails from "../TransferDetails/TransferDetails";
import TransferSchedule from "../TransferSchedule/TransferSchedule";

import "./TransferSection.scss";

interface ITransfersSectionProps {
  date: string;
  route: {
    from: { name: string; address: string };
    to: { name: string; address: string };
    times: string[];
  };
  details: string[][];
}

const TransfersSection = ({ date, route, details }: ITransfersSectionProps) => {
  return (
    <div className="transfers-section-container">
      <div className="title">Transfers</div>
      <div className="transfers-data">
        <div className="date">{date}</div>
        <div className="date-underline" />
        <TransferRoute from={route.from} to={route.to} times={route.times} />
        <TransferDetails items={details[0]} />
        <TransferSchedule items={details[1]} />
      </div>
    </div>
  );
};

export default TransfersSection;
