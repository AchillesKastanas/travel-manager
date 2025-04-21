import { IUser } from "@/types";

import TransferRow from "@components/TransferRow/TransferRow";
import { formatUserDate } from "./utils/formatUserDate";

import "./TransfersGroup.scss";

type ITransfersGroupProps = {
  label: string;
  users: IUser[];
};

const TransfersGroup = ({ label, users }: ITransfersGroupProps) => {
  return (
    <>
      <tr className="date-label">
        <td colSpan={6}>{label}</td>
      </tr>
      {users.map((user) => (
        <TransferRow
          user={user}
          formattedUserDate={formatUserDate(label, user.datetime)}
          key={`${user.id}`}
        />
      ))}
    </>
  );
};

export default TransfersGroup;
