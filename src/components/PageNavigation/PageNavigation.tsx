import BackButton from "@assets/back.svg";
import ForwardButton from "@assets/forward.svg";
import styles from "./PageNavigation.module.scss";

const PageNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBack}>
        <BackButton />
      </div>
      <div className={styles.numberContainer}>
        <div className={styles.buttonNumber}>1</div>
        <div className={styles.buttonNumber}>2</div>
        <div className={styles.buttonNumber}>3</div>
      </div>
      <div className={styles.buttonForward}>
        <ForwardButton />
      </div>
    </div>
  );
};

export default PageNavigation;
