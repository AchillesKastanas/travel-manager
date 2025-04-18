import "./TransfersGroup.scss";
import TransferRow from "@components/TransferRow/TransferRow";

type Props = {
  label: string;
  count: number;
  groupKey: string;
};

const TransfersGroup = ({ label, count, groupKey }: Props) => {
  return (
    <>
      <tr className="date-label">
        <td colSpan={6}>{label}</td>
      </tr>
      {[...Array(count)].map((_, idx) => (
        <TransferRow key={`${groupKey}-${idx}`} />
      ))}
    </>
  );
};

export default TransfersGroup;
