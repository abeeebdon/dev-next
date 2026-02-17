"use client";

import { useMemo, useState } from "react";
import { Calendar, Clock, History } from "lucide-react";
import { events } from "./components/constants";
import { getEventStatus } from "@/utils/helpers/events";
import EventSummaryCard from "./components/EventSummaryCard";
import EventTabs from "./components/EventTabs";
import EventCard from "../events/components/EventCard";

const EventsDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "ongoing" | "past">(
    "upcoming",
  );

  const categorized = useMemo(() => {
    return {
      upcoming: events.filter((e) => getEventStatus(e.date) === "upcoming"),
      ongoing: events.filter((e) => getEventStatus(e.date) === "ongoing"),
      past: events.filter((e) => getEventStatus(e.date) === "past"),
    };
  }, []);

  return (
    <section className="md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-purple font-semibold text-BrandGray900">
          Event Dashboard
        </h1>
        <p className="text-sm text-gray-500">Overview of all your events</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <EventSummaryCard
          title="Upcoming Events"
          count={categorized.upcoming.length}
          icon={<Calendar />}
        />
        <EventSummaryCard
          title="Ongoing Events"
          count={categorized.ongoing.length}
          icon={<Clock />}
        />
        <EventSummaryCard
          title="Past Events"
          count={categorized.past.length}
          icon={<History />}
        />
      </div>

      {/* Tabs */}
      <EventTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Event List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categorized[activeTab].length === 0 ? (
          <p className="text-BrandGray600">No {activeTab} events</p>
        ) : (
          categorized[activeTab].map((event) => (
            <EventCard key={event.id} {...event} />
          ))
        )}
      </div>
    </section>
  );
};

export default EventsDashboardPage;
