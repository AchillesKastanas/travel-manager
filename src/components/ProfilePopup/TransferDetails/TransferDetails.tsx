import PassengersIcon from "@assets/icon-passengers.svg";
import HandLuggageIcon from "@assets/icon-handluggage.svg";
import LuggageIcon from "@assets/icon-luggage.svg";
import ChildSeatIcon from "@assets/icon-childseat.svg";

import styles from "./TransferDetails.module.scss";

interface ITransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: ITransferDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <PassengersIcon />
        <span className={styles.itemName}>{items[0]}</span>
      </div>
      <div className={styles.item}>
        <ChildSeatIcon />
        <span className={styles.itemName}>{items[1]}</span>
      </div>
      <div className={styles.item}>
        <LuggageIcon />
        <span className={styles.itemName}>{items[2]}</span>
      </div>
      <div className={styles.item}>
        <HandLuggageIcon />
        <span className={styles.itemName}>{items[3]}</span>
      </div>
    </div>
  );
};

export default TransferDetails;
