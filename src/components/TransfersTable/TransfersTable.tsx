import useFetchData from "@/hooks/useFetchData";
import { IUser } from "@/types";
import { groupUsersByDay } from "./utils/groupUsersByDay";
import { useResize } from "@/hooks/useResize";
import TransfersTableDesktop from "./TransfersTableDesktop/TransfersTableDesktop";
import TransfersTableMobile from "./TransfersTableMobile/TransfersTableMobile";

import "./TransfersTable.scss";

const TransfersTable = () => {
  const {
    data: users,
    // Future usage
    // loading: usersLoading,
    // error: usersError,
  } = useFetchData<IUser[]>("/data/transfers_list.json");

  const { isMobile } = useResize();

  const groupedUsers = users ? groupUsersByDay(users) : {};
  const groupedUserEntries = groupedUsers ? Object.entries(groupedUsers) : [];

  return isMobile ? (
    <TransfersTableMobile groupedUserEntries={groupedUserEntries} />
  ) : (
    <TransfersTableDesktop groupedUserEntries={groupedUserEntries} />
  );
};

export default TransfersTable;
