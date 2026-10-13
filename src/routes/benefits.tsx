import { createFileRoute } from "@tanstack/react-router";
import { Benefits, CTA } from "@/components/site/Bottom";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits | TECHXIRO" },
      {
        name: "description",
        content:
          "Learn how intelligent systems improve efficiency, accuracy, and real-time decision-making.",
      },
    ],
  }),
  component: BenefitsPage,
});

function BenefitsPage() {
  return (
    <main>
      <Benefits />
      <CTA />
    </main>
  );
}
