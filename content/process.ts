export interface ProcessStep {
  number: string
  title: string
  text: string
  duration?: string
  deliverables: string[]
  humanLoop?: boolean
}

export const roadmapSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Map the opportunity",
    text: "We find the repetitive work, customer friction, and high-value handoffs worth improving. Zero fluff, just high-leverage bottlenecks.",
    duration: "Week 1",
    deliverables: ["Workflow friction audit", "Ranked ROI opportunities", "Security & data spec"],
  },
  {
    number: "02",
    title: "Design a focused pilot",
    text: "You get a working prototype in a sandbox environment with real test data, deterministic guardrails, and success metrics before any full build.",
    duration: "Weeks 1–2",
    deliverables: ["Live sandboxed prototype", "Custom evaluation dataset", "Success benchmarks"],
  },
  {
    number: "03",
    title: "Build, test, and refine",
    text: "We connect directly into your software stack, stress-test real edge-case scenarios, and keep deterministic human-in-the-loop safeguards active.",
    duration: "Weeks 2–4",
    deliverables: ["Production connectors", "Automated failover circuits", "Team operator training"],
    humanLoop: true,
  },
  {
    number: "04",
    title: "Handoff with confidence",
    text: "Your team gets complete ownership, telemetry dashboards, continuous drift monitoring, and ongoing prioritization for scaling automations.",
    duration: "Ongoing Scale",
    deliverables: ["Telemetry dashboards", "Continuous drift monitoring", "Priority engineering retainer"],
  },
]
