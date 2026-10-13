import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Top";
import { CTA } from "@/components/site/Bottom";

const title = "TECHXIRO — AI Systems That Turn Data Into Decisions";
const description =
  "TECHXIRO builds intelligent AI systems — computer vision, machine learning, AI agents and automation — that transform data into real-time decisions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <Hero />
        <CTA />
      </main>
    </>
  );
}
