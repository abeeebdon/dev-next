"use client";

import { useMemo, useState } from "react";
import { Calendar, Clock, History } from "lucide-react";
import { events } from "./components/constants";
import { getEventStatus } from "@/utils/helpers/events";
import EventSummaryCard from "./components/EventSummaryCard";
import EventCard from "../events/components/EventCard";
import AppButton from "@/components/button/AppButton";
import Image from "next/image";
import { DashboardGraph } from "./components/DashboardGraph";

const EventsDashboardPage = () => {
  const categorized = useMemo(() => {
    return {
      upcoming: events.filter((e) => getEventStatus(e.date) === "upcoming"),
      ongoing: events.filter((e) => getEventStatus(e.date) === "ongoing"),
      past: events.filter((e) => getEventStatus(e.date) === "past"),
    };
  }, []);
  function getOrdinal(n: number) {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  const d = new Date();

  const result = `${d.toLocaleDateString("en-GB", { weekday: "long" })}, ${d.getDate()}${getOrdinal(d.getDate())}, ${d.toLocaleDateString("en-GB", { month: "long" })}, ${d.getFullYear()}`;
  return (
    <section className="md:p-6 space-y-6">
      <div>
        <p className="text-sm text-gray-500">{result}</p>
        <h1 className="text-xl md:text-2xl mt-1 font-semibold text-BrandGray900">
          Welcome back,<span className="text-purple "> John Doe</span>
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <EventSummaryCard
          title="Total Events"
          count={45}
          icon={<Calendar />}
          bottomComp={
            <p className="text-[10px]">
              <span className="text-blue-800">+20%</span> vs last month
            </p>
          }
        />
        <EventSummaryCard
          title="Tickets Sold"
          count={49}
          icon={<Clock />}
          bottomComp={
            <p className="text-[10px]">
              <span className="text-red-400">-10%</span> vs last month
            </p>
          }
        />
        <EventSummaryCard
          title="Upcoming Events"
          count={49}
          icon={<Clock />}
          bottomComp={
            <p className="text-[10px]">
              <span className="text-red-400">-10%</span> vs last month
            </p>
          }
        />
        <EventSummaryCard
          title="Total Attendees"
          count="2,209"
          icon={<Clock />}
          bottomComp={
            <p className="text-[10px]">
              <span className="text-blue-800">+10%</span> vs last month
            </p>
          }
        />
      </section>
      <section className="lg:flex items-end gap-6 justify-between">
        <DashboardGraph />

        <section className="lg:w-2/5">
          <h3 className="text-xl ">Upcoming Event</h3>
          <article className="mt-3 w-full shadow shadow-purple rounded-2xl max-w-xs border border-pink ">
            <div className="h-50">
              <Image
                src="/images.jfif"
                className="w-full h-full rounded-t-2xl"
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="p-5">
              <h3 className="text-purple font-semibold">Love</h3>
              <p></p>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                tempore dolorem, delectus aperiam similique laborum, ratione
                labore ad est illo
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="p-2 bg-white flex items-center justify-center w-fit rounded-xl">
                    <Calendar />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium text-slate-700">July 24, 2000</p>
                    <p className="text-slate-400">10:00pm - 20:00pm</p>
                  </div>
                </div>
                <AppButton
                  appVariant="primary"
                  className="rounded-xl py-1 h-8 text-[10px] w-20"
                >
                  View Details
                </AppButton>
              </div>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default EventsDashboardPage;
