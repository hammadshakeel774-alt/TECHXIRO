import { createFileRoute } from "@tanstack/react-router";
import { Process } from "@/components/site/Middle";
import { CTA } from "@/components/site/Bottom";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | TECHXIRO" },
      {
        name: "description",
        content:
          "See how TECHXIRO takes AI systems from discovery and development through integration and scale.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <main>
      <Process />
      <CTA />
    </main>
  );
}
