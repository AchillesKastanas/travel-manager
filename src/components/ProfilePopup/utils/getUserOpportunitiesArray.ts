import { IUser } from "@/types";

export const getUserOpportunitiesArray = (user: IUser): string[] => {
  const opportunitiesArray: string[] = [];
  if (user.early_checkin) opportunitiesArray.push("Early check-in");
  if (user.late_checkout) opportunitiesArray.push("Late check-out");
  if (user.return_transfer) opportunitiesArray.push("No return transfer");
  if (user.babies) opportunitiesArray.push("Baby");

  return opportunitiesArray;
};
