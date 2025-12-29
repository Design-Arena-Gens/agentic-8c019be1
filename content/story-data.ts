export const storySummary =
  "In the neon-drenched city of Halcyon, coder Nova and policy maker Orion race to launch a life-saving energy grid. When a sudden council mandate threatens to shut down the project, they must weave through political storms to keep their circuitry alive, revealing how every policy pulse reaches into the heart of innovation.";

export const characters = [
  {
    name: "Nova Lin",
    role: "Lead Systems Architect",
    description:
      "A visionary coder whose luminous holographic sketches make complex tech easy to grasp. Nova embodies resilience, translating community needs into code that hums with empathy."
  },
  {
    name: "Orion Hale",
    role: "Civic Tech Council Liaison",
    description:
      "A principled strategist who believes governance should move as quickly as invention. Orion navigates political power plays to shield transformative ideas from being dimmed."
  }
] as const;

export type Scene = {
  id: number;
  title: string;
  description: string;
  motion: string;
  palette: string;
};

export const scenes: Scene[] = [
  {
    id: 1,
    title: "Opening Pulse",
    description:
      "Halcyon City glows under a violet night as Nova sketches a shimmering energy grid on a transparent tablet. Orion watches news headlines ripple across the skyline, hinting at brewing policy debates.",
    motion:
      "Slow parallax of skyscrapers; glowing lines form the grid with ripple effects syncing to a heartbeat.",
    palette: "Deep purples with bright cyan circuitry highlights; soft rim lighting."
  },
  {
    id: 2,
    title: "Council Crossroads",
    description:
      "Inside a vast council hall, luminous projections of citizens fade behind rising policy walls. Nova’s prototype dims as new regulations flicker across the chamber ceiling.",
    motion:
      "Vertical panels slide upward like barriers; Nova’s hologram flickers between vibrant and muted tones.",
    palette: "Teal and indigo undercurrents; flashes of amber as decisions hit the floor."
  },
  {
    id: 3,
    title: "Street-Level Reverberations",
    description:
      "Nova and Orion sprint through rain-slicked alleys, passing communities waiting for power. Posters animate with political slogans, briefly overlaying potential futures.",
    motion:
      "Rain streaks with motion blur; posters animate with frame-by-frame style, then dissolve into binary sparks.",
    palette: "Electric magenta reflections balanced with charcoal greys and gold accents."
  },
  {
    id: 4,
    title: "Decision Surge",
    description:
      "Back at the lab, Nova rewrites code while Orion reroutes the mandate. A translucent timeline shows policy edits syncing with code commits, culminating in a city-wide reactivation.",
    motion:
      "Split-screen timeline animates left-to-right, merging into a full-screen light burst as systems reboot.",
    palette: "Blends of azure and ember tones, culminating in a radiant white crescendo."
  },
  {
    id: 5,
    title: "Final Frame",
    description:
      "The city lights stutter, then freeze mid-glow as a single council vote decides the grid’s fate. Characters lock eyes, silhouetted against circuitry suspended in time.",
    motion:
      "Time slows into a tableau; particles hover weightless before fading to black on the final beat.",
    palette: "High-contrast obsidian with laser-thin neon outlines and a final ember flare."
  }
];

export const narration = [
  {
    timecode: "00:00–00:10",
    text:
      "In Halcyon, every wire hums with hope—until tonight, when new rules threaten to pull the plug."
  },
  {
    timecode: "00:10–00:25",
    text:
      "Nova paints power grids in light, while Orion battles a council chamber that believes caution should outrun courage."
  },
  {
    timecode: "00:25–00:35",
    text:
      "A single amendment flickers across the skyline, dimming the prototype as neighborhoods watch their future fade."
  },
  {
    timecode: "00:35–00:50",
    text:
      "Together they sprint through rain and rhetoric, rewiring policies and code before the darkness settles in."
  },
  {
    timecode: "00:50–01:00",
    text:
      "Because when politics pauses progress, lives stall with it—and the next innovation waits for a decisive spark."
  }
] as const;

export const effects = [
  {
    title: "Animated Headline Ribbons",
    description:
      "Layers of translucent text sweep across the screen with additive blending, visualizing policy chatter that cascades into tech spaces."
  },
  {
    title: "Circuit Echo Trails",
    description:
      "Key character movements leave brief neon wireframe echoes, reinforcing the technology motif while dramatizing urgency."
  },
  {
    title: "Pulse-Synced Lighting",
    description:
      "Scene lighting swells on narration peaks, while shadows harden on regulatory setbacks to underline emotional beats."
  },
  {
    title: "Data Rain Transition",
    description:
      "Between scenes, falling glyphs transform into raindrops, bridging data flow with street-level consequences."
  }
] as const;
