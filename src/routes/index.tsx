import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Intro, Metrics } from "@/components/site/Top";
import { Architecture, Technology, ProblemSolution, Capabilities, Process, UseCases } from "@/components/site/Middle";
import { Benefits, TechStack, Dashboard, CTA, Contact, Footer } from "@/components/site/Bottom";

const title = "TECHXIRO — AI Systems That Turn Data Into Decisions";
const description = "TECHXIRO builds intelligent AI systems — computer vision, machine learning, AI agents and automation — that transform data into real-time decisions.";

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
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Metrics />
        <Architecture />
        <Technology />
        <ProblemSolution />
        <Capabilities />
        <Process />
        <UseCases />
        <Benefits />
        <TechStack />
        <Dashboard />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
