import "./InfoItem.scss";

interface InfoItemProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const InfoItem = ({ title, text, icon }: InfoItemProps) => {
  return (
    <div className="wrapper">
      <div className="title">{title}</div>
      <div className="text">
        {icon}
        {text}
      </div>
    </div>
  );
};

export default InfoItem;
