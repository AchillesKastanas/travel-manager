import { IconTakeoff, IconTime } from "@/assets";

import "./TransferSchedule.scss";

interface ITransferScheduleProps {
  items: string[];
}

const TransferSchedule = ({ items }: ITransferScheduleProps) => {
  return (
    <div className="transfer-schedule-container">
      <div className="item" style={{ width: "38%" }}>
        <IconTakeoff />
        <span
          className="item-name"
          style={{ borderRight: "1px solid #2d3b4e14" }}
        >
          {items[0]}
        </span>
      </div>
      <div className="item" style={{ width: "35%" }}>
        <IconTime />
        <span
          className="item-name"
          style={{ borderRight: "1px solid #2d3b4e14" }}
        >
          {items[1]}
        </span>
      </div>
      <div
        className="item"
        style={{ width: "26%", padding: 0, color: "#42C594" }}
      >
        <span className="item-name">{items[2]}</span>
      </div>
    </div>
  );
};

export default TransferSchedule;
