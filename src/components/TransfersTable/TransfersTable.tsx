import useFetchData from "@/hooks/useFetchData";
import { IUser, ITravel } from "@/types";
import TransfersGroup from "@components/TransfersGroup/TransfersGroup";
import { groupUsersByDay } from "./utils/groupUsersByDay";

import "./TransfersTable.scss";

const TransfersTable = () => {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetchData<IUser[]>("/data/transfers_list.json");

  const groupedUsers = users ? groupUsersByDay(users) : {};
  const groupedUserEntries = groupedUsers ? Object.entries(groupedUsers) : [];

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

export default TransfersTable;
