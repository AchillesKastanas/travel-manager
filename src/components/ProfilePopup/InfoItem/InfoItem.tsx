import styles from "./InfoItem.module.scss";

interface IInfoItemProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const InfoItem = ({ title, text, icon }: IInfoItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default InfoItem;
