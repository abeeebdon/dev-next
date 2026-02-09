import { Dispatch, SetStateAction } from "react";

export interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}
export type EventCardProps = Omit<EventType, "id">;
export interface CreateEventPageProps {
  showCreate: boolean;
  setShowCreate: Dispatch<SetStateAction<boolean>>;
}
