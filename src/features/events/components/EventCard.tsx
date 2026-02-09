"use client";

import { Calendar, MapPin } from "lucide-react";
import { EventCardProps } from "../types/eventType";

const EventCard = ({ title, date, location, description }: EventCardProps) => {
  return (
    <div className="rounded-xl border border-BrandOutline bg-white p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-BrandGray900">{title}</h3>

      <div className="mt-2 space-y-1 text-sm text-BrandGray600">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-BrandGray700">{description}</p>
    </div>
  );
};

export default EventCard;
