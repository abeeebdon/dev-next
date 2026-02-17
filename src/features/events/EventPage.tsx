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
    <section className="md:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-purple">Events</h1>
          <p className="text-sm text-gray-400">Create and manage your events</p>
        </div>

        <AppButton
          appVariant="primary"
          className="w-20 md:w-40 bg-linear-to-br from-purple to-pink"
          onClick={() => setShowCreate(true)}
        >
          <span className="md:hidden text-2xl">+</span>

          <span className="hidden md:block">Create Event</span>
        </AppButton>
      </div>

      {/* Events List */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
