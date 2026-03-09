import React from "react";

export function IdeathonPage() {
  return (
    <section className="w-full max-w-4xl rounded-3xl border border-[#312B4C] bg-background/60 p-8 backdrop-blur">
      <h2 className="title-gradient mb-3 text-2xl font-semibold sm:text-3xl">
        Ideathon
      </h2>
      <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
        Ideathon details will go here: problem statements, rules, timeline, teams,
        and submission link.
      </p>
    </section>
  );
}