export const formatUserDate = (label: string, eventDate: string): string => {
  const date = new Date(eventDate);

  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "long" });

  if (label === "Today" || label === "Tomorrow") {
    return `${label}, ${day} ${month}, ${time}`;
  }

  const weekdayShort = date.toLocaleString("en", { weekday: "short" });

  return `${weekdayShort}, ${day} ${month}, ${time}`;
};
