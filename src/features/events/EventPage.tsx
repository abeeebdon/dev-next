"use client";
import AppButton from "@/components/button/AppButton";
import { mockEvents } from "./components/constants";
import EventCard from "./components/EventCard";
import { useState } from "react";
import { X } from "lucide-react";
import CreateEventModal from "./components/CreateEventModal";

const EventPage = () => {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <section className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-BrandGray900">Events</h1>
          <p className="text-sm text-BrandGray600">
            Create and manage your events
          </p>
        </div>

        <AppButton
          appVariant="primary"
          className="w-40"
          onClick={() => setShowCreate(true)}
        >
          Create Event
        </AppButton>
      </div>

      {/* Events List */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {showCreate && (
        <CreateEventModal
          showCreate={showCreate}
          setShowCreate={setShowCreate}
        />
      )}
    </section>
  );
};

export default EventPage;
