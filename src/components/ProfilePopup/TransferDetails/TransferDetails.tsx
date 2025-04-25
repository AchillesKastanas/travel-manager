import { useResize } from "@/hooks/useResize";

import "./TransferDetails.scss";
import {
  IconChildSeat,
  IconDown,
  IconHandLuggage,
  IconLuggage,
  IconPassengers,
} from "@/assets";

interface ITransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: ITransferDetailsProps) => {
  const { isMobile } = useResize();

  return (
    <div className="transfer-details-container">
      <div className="item">
        <IconPassengers />
        <span className="item-name">{items[0]}</span>
      </div>
      <div className="item">
        <IconChildSeat />
        <span className="item-name">{items[1]}</span>
      </div>
      <div className="item">
        <IconLuggage />
        <span className="item-name">{items[2]}</span>
      </div>
      <div className="item">
        <IconHandLuggage />
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
          <IconDown />
        </div>
      )}
    </div>
  );
};

export default TransferDetails;
