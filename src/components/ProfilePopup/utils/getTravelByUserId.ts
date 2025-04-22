import { ITravel } from "@/types";

export const getTravelByUserId = (userId: number, travelData: ITravel[]) => {
  return travelData.find((travel) => travel.id === userId) || null;
};
