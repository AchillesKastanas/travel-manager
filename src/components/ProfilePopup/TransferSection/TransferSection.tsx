import TransferRoute from "../TransferRoute/TransferRoute";
import TransferDetails from "../TransferDetails/TransferDetails";

import "./TransferSection.scss";

interface TransfersSectionProps {
  date: string;
  route: {
    from: { name: string; address: string };
    to: { name: string; address: string };
    times: string[];
  };
  details: string[][];
}

const TransfersSection = ({ date, route, details }: TransfersSectionProps) => {
  return (
    <div className="container">
      <div className="title">Transfers</div>
      <div className="data">
        <div className="date">{date}</div>
        <TransferRoute from={route.from} to={route.to} times={route.times} />
        <TransferDetails items={details[0]} />
        <TransferDetails items={details[1]} />
      </div>
    </div>
  );
};

export default TransfersSection;
