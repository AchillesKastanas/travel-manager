import TransferGraph from "@assets/transfer-graph.svg";

import "./TransferRoute.scss";

interface TransferRouteProps {
  from: { name: string; address: string };
  to: { name: string; address: string };
  times: string[];
}

const TransferRoute = ({ from, to, times }: TransferRouteProps) => {
  return (
    <div className="trasnfer-route-container">
      <TransferGraph className="icon" />
      <div className="locations">
        <div className="location">
          <div className="name">{from.name}</div>
          <div className="address">{from.address}</div>
        </div>
        <div className="location">
          <div className="name">{to.name}</div>
          <div className="address">{to.address}</div>
        </div>
      </div>
      <div className="hours">
        <div className="hour">{times[0]}</div>
        <div className="hour">{times[1]}</div>
      </div>
    </div>
  );
};

export default TransferRoute;
