import PassengersIcon from "@assets/icon-passengers.svg";
import HandLuggageIcon from "@assets/icon-handluggage.svg";
import LuggageIcon from "@assets/icon-luggage.svg";
import ChildSeatIcon from "@assets/icon-childseat.svg";

import "./TransferDetails.scss";

interface ITransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: ITransferDetailsProps) => {
  return (
    <div className="trasnfer-details-container">
      <div className="item">
        <PassengersIcon />
        <span className="item-name">{items[0]}</span>
      </div>
      <div className="item">
        <ChildSeatIcon />
        <span className="item-name">{items[1]}</span>
      </div>
      <div className="item">
        <LuggageIcon />
        <span className="item-name">{items[2]}</span>
      </div>
      <div className="item">
        <HandLuggageIcon />
        <span className="item-name">{items[3]}</span>
      </div>
    </div>
  );
};

export default TransferDetails;
