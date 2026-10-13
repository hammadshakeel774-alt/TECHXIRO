import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Bottom";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TECHXIRO" },
      {
        name: "description",
        content: "Tell TECHXIRO about your AI project, data, and automation goals.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
