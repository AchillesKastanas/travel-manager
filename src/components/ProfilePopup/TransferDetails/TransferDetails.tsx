import PassengersIcon from "@assets/icon-passengers.svg";
import HandLuggageIcon from "@assets/icon-handluggage.svg";
import LuggageIcon from "@assets/icon-luggage.svg";
import ChildSeatIcon from "@assets/icon-childseat.svg";
import ArrowDown from "@assets/down.svg";

import "./TransferDetails.scss";
import { useResize } from "@/hooks/useResize";

interface ITransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: ITransferDetailsProps) => {
  const { isMobile } = useResize();

  return (
    <div className="transfer-details-container">
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
      {isMobile && (
        <div
          className="item"
          style={{
            width: "0.7rem",
            height: "0.7rem",
            margin: "auto 0.7rem auto auto",
          }}
        >
          <ArrowDown />
        </div>
      )}
    </div>
  );
};

export default TransferDetails;
