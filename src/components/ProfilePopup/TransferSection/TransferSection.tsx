import TransferRoute from "../TransferRoute/TransferRoute";
import TransferDetails from "../TransferDetails/TransferDetails";

import styles from "./TransferSection.module.scss";

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
    <div className={styles.container}>
      <div className={styles.title}>Transfers</div>
      <div className={styles.data}>
        <div className={styles.date}>{date}</div>
        <TransferRoute from={route.from} to={route.to} times={route.times} />
        <TransferDetails items={details[0]} />
        <TransferDetails items={details[1]} />
      </div>
    </div>
  );
};

export default TransfersSection;
