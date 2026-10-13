import { createFileRoute } from "@tanstack/react-router";
import { TechStack } from "@/components/site/Bottom";
import { Technology } from "@/components/site/Middle";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology | TECHXIRO" },
      {
        name: "description",
        content:
          "Discover the AI technologies and platform powering TECHXIRO's intelligent systems.",
      },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <main>
      <Technology />
      <TechStack />
    </main>
  );
}
