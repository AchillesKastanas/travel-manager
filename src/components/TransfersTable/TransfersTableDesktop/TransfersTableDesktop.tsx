import { IUser } from "@/types";
import TransfersGroup from "@/components/TransfersGroup/TransfersGroup";

import "./TransfersTableDesktop.scss";

interface ITransferTableDesktopProps {
  groupedUserEntries: [string, IUser[]][];
}

const TransfersTableDesktop = ({
  groupedUserEntries,
}: ITransferTableDesktopProps) => {
  return (
    <div className="transfers-table-wrapper">
      <table className="transfers-table">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>STATUS</th>
            <th style={{ width: "18%" }}>TRAVELLER</th>
            <th style={{ width: "18%" }}>ARRIVAL / DEPARTURE</th>
            <th style={{ width: "18%" }}>FROM / TO</th>
            <th style={{ width: "16%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                OPPORTUNITIES
                <div className="new-label">New</div>
              </div>
            </th>
            <th style={{ width: "22%" }}></th>
          </tr>
        </thead>
        <tbody>
          {groupedUserEntries.map(([label, users], idx) => (
            <TransfersGroup
              key={`${label}-${idx}`}
              label={label}
              users={users}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransfersTableDesktop;
