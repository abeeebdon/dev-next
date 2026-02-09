export type EventStatus = "upcoming" | "ongoing" | "past";

export const getEventStatus = (date: string): EventStatus => {
  const today = new Date();
  const eventDate = new Date(date);

  if (eventDate.toDateString() === today.toDateString()) {
    return "ongoing";
  }

  if (eventDate > today) {
    return "upcoming";
  }

  return "past";
};
