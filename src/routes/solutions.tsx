import { createFileRoute } from "@tanstack/react-router";
import { Architecture, Capabilities, ProblemSolution, UseCases } from "@/components/site/Middle";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions | TECHXIRO" },
      {
        name: "description",
        content:
          "Explore TECHXIRO AI systems for computer vision, predictive analytics, and automation.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main>
      <Architecture />
      <ProblemSolution />
      <Capabilities />
      <UseCases />
    </main>
  );
}
