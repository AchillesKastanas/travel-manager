export const formatToMonthDay = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};
