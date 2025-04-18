import ProfileIcon from "@assets/icon-profile.svg";
import "./TransferDetails.scss";

interface TransferDetailsProps {
  items: string[];
}

const TransferDetails = ({ items }: TransferDetailsProps) => {
  return (
    <div className="wrapper">
      {items.map((item, index) => (
        <div key={index} className="item">
          <ProfileIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TransferDetails;
