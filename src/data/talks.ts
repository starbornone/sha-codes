export type TalkSection = {
  heading: string;
  body: string;
  points?: string[];
};

export type TalkData = {
  // Also the URL slug: the talk's page lives at /talks/<id>.
  id: string;
  title: string;
  year: number;
  venue: string;
  // One or two sentences for the home page list.
  summary: string;
  description: string;
  // What the talk covers, in order, summarised from the transcript.
  sections: TalkSection[];
  // A line from the talk worth repeating.
  quote?: string;
  // Anything a reader should know about the transcript or the occasion.
  note?: string;
  transcriptUrl: string;
};

// Newest first.
export const TALKS: TalkData[] = [
  {
    id: "modern-development-burnout-machine",
    title: "The Modern Development Burnout Machine",
    year: 2026,
    venue: "Campaign Monitor Dev Camp",
    summary:
      "Why software teams are more capable than ever but have less time to think, and how to treat cognitive load as a design constraint rather than a personal failing.",
    description:
      "A talk about burnout in modern software development, given to Campaign Monitor's engineers at the company's 2026 Dev Camp. Engineering has never been more capable, yet people have less usable thinking time than ever. The talk argues that overload is structural, so the fix is better system design, not more personal grit.",
    sections: [
      {
        heading: "More tools, less thinking",
        body: "Every new tool, service and workflow adds capability, and adds something else to hold in your head. The talk opens on that trade: the industry has increased what teams can do, and increased their cognitive load faster.",
      },
      {
        heading: "The cognitive stack",
        body: "Developers carry a stack of systems in their heads, plus the social map of who owns what and the tacit knowledge that never made it into docs. Working memory is limited, and every role on a team feels it, not just engineers.",
      },
      {
        heading: "Context switching is not a virtue",
        body: "Each interruption or handoff has a reload cost: rebuilding the mental model you just dropped. Being good at context switching is treated as a skill, but it's a cost everyone pays, likened in the talk to rerunning npm install on your brain every time someone asks if you've got a minute.",
      },
      {
        heading: "The problem or the environment?",
        body: "Much of the complexity people fight comes from the environment around the problem rather than the problem itself. That makes overload a structural issue to design away, not a habit for individuals to fix. The same goes for the expectation that everyone should be full stack, which the talk calls a trap whose answer is usually better system and boundary design.",
      },
      {
        heading: "AI: relief, or a faster treadmill?",
        body: "AI tools can help, but time they save tends to become the new baseline. The talk warns against automating the work that benefits from human taste and empathy while leaving people with the busywork, and frames which one gets automated as a value choice.",
      },
      {
        heading: "What teams can do",
        body: "The talk closes with practical moves for treating attention as a resource:",
        points: [
          "Audit the reload cost: before adding a tool or process, ask who pays for it. There is no neutral.",
          "Reclaim \"fail fast\" as learn fast, fail small, with time to reflect built in.",
          "Know who holds what, and find the single points of cognitive failure, such as the one person who can fix a system at 2 AM.",
          "Time a small change end to end to expose the complexity tax.",
          "Budget attention like infrastructure: protect deep work and track the longest uninterrupted block each person gets in a week.",
          "Flip the automation: point AI at drudgery, not at judgement.",
          "Scope for excellence: check that each role can realistically be excellent at its core work.",
          "Build in recovery, because sprints without cooldowns aren't sustainable.",
        ],
      },
      {
        heading: "Constraints make better design",
        body: "Good software design starts with constraints, and the brain's limits are some of them. Tools and workflows should fit human cognition instead of demanding people stretch to fit them.",
      },
    ],
    quote: "If you ignore constraints long enough, reality files a bug report. In production.",
    note: "An internal talk. The write-up on AI Dreams follows it closely, though not word for word.",
    transcriptUrl: "https://www.aidreams.world/posts/modern-development-burnout-machine",
  },
  {
    id: "does-ai-dream-of-original-ideas",
    title: "Does AI Dream of Original Ideas",
    year: 2025,
    venue: "Campaign Monitor Dev Camp",
    summary:
      "Campaign Monitor's first talk about AI, asking whether AI can have original ideas, and making the case for the human creativity it can't replace.",
    description:
      "Campaign Monitor's first talk about AI, given at the company's Dev Camp in June 2025. It asks whether AI can have original ideas, looks at why AI output drifts towards the average, and makes the case for the lived experience, intention and weirdness that only people bring, including in front-end engineering.",
    sections: [
      {
        heading: "Beautiful but empty",
        body: "The talk opens with an AI-generated cyberpunk sunset set beside real photos of Sydney. The AI image is polished, but it flattens a city that mixes eras and styles into a single look.",
      },
      {
        heading: "Averaging towards safe",
        body: "Generative models produce content quickly by averaging existing human work, which pulls their output towards what's common and safe. The talk connects this to a wider flattening of taste, such as near-identical Airbnb interiors.",
      },
      {
        heading: "A double decay",
        body: "Models decay in two ways that compound: the world moves on while their training stays frozen, and future models increasingly train on AI-generated content, so they become both outdated and less human.",
      },
      {
        heading: "What AI can't bring",
        body: "Art moves people because someone turned lived experience into something you can see or hear, as in the work of Frida Kahlo, Yayoi Kusama or Bo Burnham's Inside. AI struggles with intentional absurdity, cultural nuance and detail, and makes different mistakes from people. Some artists use it as an instrument rather than a replacement.",
      },
      {
        heading: "Constraints and creativity in code",
        body: "Constraints often spark more creativity than total freedom, and deliberately making the familiar strange is a creative technique in its own right. Front-end and accessibility work is creative and empathetic, and AI's training data lags behind a field that moves this fast.",
      },
      {
        heading: "Protecting time to think",
        body: "Faster tools can raise what clients and employers expect, squeezing out time for deep creative work. The talk ends by urging people to lean into meaning, intention, emotion and purpose, and to take it as permission to let their unique and weird run free.",
      },
    ],
    quote: "Do androids dream of original ideas? No. But you do.",
    note: "An internal talk. The post on AI Dreams is a slightly modified transcript.",
    transcriptUrl: "https://www.aidreams.world/posts/androids-dream-original-ideas",
  },
];
