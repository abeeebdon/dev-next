import { Home, User, CandyIcon } from "lucide-react";
export const dashboardMenuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Events", href: "/dashboard/events", icon: CandyIcon },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];
export const events = [
  {
    id: "1",
    title: "Tech Meetup",
    date: "2026-03-12",
    location: "Lagos",
    description: "Developers meetup",
  },
  {
    id: "2",
    title: "Design Workshop",
    date: "2026-02-09",
    location: "Remote",
    description: "UI/UX Workshop",
  },
];
