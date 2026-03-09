"use client";

import React from "react";
import SmoothTab from "../../../components/kokonutui/smooth-tab"; // <-- adjust path
import { IdeathonPage } from "~/sections/startupKumbh/ideathon";
import { SpeakerSessionPage } from "~/sections/startupKumbh/speakerSession";
import { CulturalEventPage } from "~/sections/startupKumbh/culturalEvent";
// <-- adjust path (or keep in same file)

const StartupKumbhPage = () => {
  const tabs = [
    {
      id: "ideathon",
      title: "Ideathon",
      color: "bg-blue-500 hover:bg-blue-600",
      cardContent: <IdeathonPage />,
    },
    {
      id: "speaker",
      title: "Speaker Session",
      color: "bg-purple-500 hover:bg-purple-600",
      cardContent: <SpeakerSessionPage />,
    },
    {
      id: "cultural",
      title: "Cultural Event",
      color: "bg-emerald-500 hover:bg-emerald-600",
      cardContent: <CulturalEventPage />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-16">
      <div className="w-full max-w-4xl">
        {/* Optional heading above tabs */}
        <div className="mb-6">
          <h1 className="title-gradient mb-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Startup Kumbh
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Switch tabs to explore Ideathon, Speaker Sessions, and Cultural
            Events.
          </p>
        </div>

        {/* SmoothTab renders the selected "page" inside its card area */}
        <SmoothTab
          items={tabs as any}
          defaultTabId="ideathon"
          className="mx-auto"
          onChange={(id) => {
            // optional: do something on tab change
            // console.log("Tab changed to:", id);
          }}
        />
      </div>
    </main>
  );
};

export default StartupKumbhPage;