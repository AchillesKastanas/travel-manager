import TransferGraph from "@assets/transfer-graph.svg";
import styles from "./TransferRoute.module.scss";

interface TransferRouteProps {
  from: { name: string; address: string };
  to: { name: string; address: string };
  times: string[];
}

const TransferRoute = ({ from, to, times }: TransferRouteProps) => {
  return (
    <div className={styles.route}>
      <TransferGraph className={styles.icon} />
      <div className={styles.locations}>
        <div className={styles.location}>
          <div className={styles.name}>{from.name}</div>
          <div className={styles.address}>{from.address}</div>
        </div>
        <div className={styles.location}>
          <div className={styles.name}>{to.name}</div>
          <div className={styles.address}>{to.address}</div>
        </div>
      </div>
      <div className={styles.hours}>
        <div className={styles.hour}>{times[0]}</div>
        <div className={styles.hour}>{times[1]}</div>
      </div>
    </div>
  );
};

export default TransferRoute;
