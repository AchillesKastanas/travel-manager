import "./InfoItem.scss";

interface IInfoItemProps {
  title?: string;
  text: string;
  icon?: React.ReactNode;
}

const InfoItem = ({ title, text, icon }: IInfoItemProps) => {
  return (
    <div className="info-item-container">
      {title && <div className="title">{title}</div>}
      <div className="desc">
        {icon && <div className="icon">{icon}</div>}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default InfoItem;
