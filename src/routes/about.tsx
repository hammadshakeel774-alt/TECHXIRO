import { createFileRoute } from "@tanstack/react-router";
import { Metrics, Intro } from "@/components/site/Top";
import { CTA } from "@/components/site/Bottom";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TECHXIRO" },
      {
        name: "description",
        content:
          "Learn how TECHXIRO turns complex operational data into clear, actionable intelligence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <Intro />
      <Metrics />
      <CTA />
    </main>
  );
}
