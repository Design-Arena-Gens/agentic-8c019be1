import type { Scene } from "@/content/story-data";
import clsx from "clsx";

type Props = {
  scene: Scene;
};

const palette = ["aurora", "ember", "dawn"];

export default function SceneCard({ scene }: Props) {
  const color = palette[(scene.id - 1) % palette.length];

  return (
    <article
      className={clsx(
        "glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-8",
        `scene-border-${color}`
      )}
    >
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-200/70">
          Scene {scene.id}
        </p>
        <h3 className="mt-3 font-display text-xl text-white">{scene.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
          {scene.description}
        </p>
        <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Animation Beat</p>
            <p className="mt-1 text-sm text-slate-100">{scene.motion}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Palette &amp; Mood</p>
            <p className="mt-1 text-sm text-slate-100">{scene.palette}</p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "pointer-events-none absolute inset-x-0 bottom-0 h-32 translate-y-1/2 opacity-60 blur-3xl",
          {
            "bg-aurora": color === "aurora",
            "bg-ember": color === "ember",
            "bg-dawn": color === "dawn"
          }
        )}
        aria-hidden
      />
    </article>
  );
}
