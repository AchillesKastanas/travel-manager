import { IUser } from "@/types";

export function groupUsersByDay(users: IUser[]): Record<string, IUser[]> {
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

    const current = new Date(date);
    current.setHours(0, 0, 0, 0);

    let label: string;
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
