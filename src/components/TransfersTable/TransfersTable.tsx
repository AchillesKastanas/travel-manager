import useFetchData from "@/hooks/useFetchData";
import { IUser, ITravel } from "@/types";

import TransfersGroup from "@components/TransfersGroup/TransfersGroup";

import "./TransfersTable.scss";

function groupUsersByDay(users: IUser[]) {
  const groups: Record<string, IUser[]> = {};

  /*
   * [NOTE FOR REVIEWER]
   * Uncomment to dummy set todays date as '2023-06-01' to display that 'Today' and 'Tomorrow'
   * labels work as expected
   * const today = new Date("2023-06-01");
   */
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  users.forEach((user) => {
    const date = new Date(user.datetime);
    const dateKey = date.toLocaleDateString("en-CA");
    // Normalize to midnight
    const current = new Date(date);
    current.setHours(0, 0, 0, 0);

    let label;
    if (current.getTime() === today.getTime()) {
      label = "Today";
    } else if (current.getTime() === tomorrow.getTime()) {
      label = "Tomorrow";
    } else {
      label = dateKey;
    }

    if (!groups[label]) {
      groups[label] = [];
    }
    groups[label].push(user);
  });

  return groups;
}

const TransfersTable = () => {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetchData<IUser[]>("/data/transfers_list.json");

  const groupedUsers = users ? groupUsersByDay(users) : {};
  const groupedUserEntries = groupedUsers ? Object.entries(groupedUsers) : [];

  // const groups = Object.entries(groupedUsers).map(([label, users]) => ({
  //   label,
  //   count: users.length,
  //   groupKey: label.toLowerCase().replace(/\s+/g, "-"),
  // }));

  // const {
  //   data: travels,
  //   loading: travelsLoading,
  //   error: travelsError,
  // } = useFetchData<ITravel[]>("/data/transfers_details.json");

  // console.log("Users:", {
  //   data: users,
  //   loading: usersLoading,
  //   error: usersError?.message || null,
  // });
  // console.log("Travels:", {
  //   data: travels,
  //   loading: travelsLoading,
  //   error: travelsError?.message || null,
  // });

  // const groupedData = [
  //   { label: "Today", count: 4, key: "today" },
  //   { label: "Tomorrow", count: 2, key: "tomorrow" },
  //   { label: "Thursday, 3 June", count: 3, key: "june" },
  // ];

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
            <TransfersGroup key={idx} label={label} users={users} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransfersTable;
