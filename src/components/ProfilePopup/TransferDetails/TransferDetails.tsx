import ProfileIcon from "@assets/icon-profile.svg";
import styles from "./TransferDetails.module.scss";

interface ITransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: ITransferDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <ProfileIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferDetails;
