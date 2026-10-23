export type TalkData = {
  // Also the URL slug: the talk's page lives at /talks/<id>.
  id: string;
  title: string;
  year: number;
  venue: string;
  // One or two sentences for the home page list.
  summary: string;
  description: string;
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
      "A talk about burnout in modern software development, given to Campaign Monitor's engineers at the company's 2026 Dev Camp.",
    description:
      "A talk about burnout in modern software development, given to Campaign Monitor's engineers at the company's 2026 Dev Camp, and written up in full as a post on AI Dreams.",
    note: "An internal talk. The transcript on AI Dreams follows it closely, though not word for word.",
    transcriptUrl: "https://www.aidreams.world/posts/modern-development-burnout-machine",
  },
  {
    id: "does-ai-dream-of-original-ideas",
    title: "Does AI Dream of Original Ideas",
    year: 2025,
    venue: "Campaign Monitor Dev Camp",
    summary:
      "Campaign Monitor's first talk about AI, asking whether AI can have original ideas. Given at the company's 2025 Dev Camp.",
    description:
      "Campaign Monitor's first talk about AI, asking whether AI can have original ideas. Given to the company's engineers at its 2025 Dev Camp, and written up in full as a post on AI Dreams.",
    note: "An internal talk. The transcript on AI Dreams follows it closely, though not word for word.",
    transcriptUrl: "https://www.aidreams.world/posts/androids-dream-original-ideas",
  },
];
