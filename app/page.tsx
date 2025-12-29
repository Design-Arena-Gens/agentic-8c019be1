import SceneCard from "@/components/scene-card";
import { scenes, storySummary, characters, effects, narration } from "@/content/story-data";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
      <div className="absolute inset-0 -z-20">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7b5cfb" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#f44f68" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffb169" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g stroke="url(#glow)" strokeWidth="0.7" fill="none">
            {Array.from({ length: 14 }).map((_, row) =>
              Array.from({ length: 18 }).map((__, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 70 + (row % 2 === 0 ? 35 : 0)}
                  cy={row * 60 + 40}
                  r={18}
                  opacity={(row + col) % 3 === 0 ? 0.5 : 0.2}
                />
              ))
            )}
          </g>
        </svg>
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <header className="glass-panel rounded-3xl p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.55em] text-aurora/80">1-Minute Animation</p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            Circuit of Influence: When Politics Shapes Tomorrow&apos;s Tech
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-200/90 md:text-lg">
            A dramatic 2D journey following two creators caught between vision and regulation,
            revealing how decisions in council chambers pulse through circuits and cities alike.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="glass-panel rounded-3xl p-8">
            <h2 className="font-display text-2xl text-white">Story Summary</h2>
            <p className="mt-4 text-slate-200/90 leading-relaxed">{storySummary}</p>
          </article>

          <article className="glass-panel rounded-3xl p-8">
            <h2 className="font-display text-2xl text-white">Main Characters</h2>
            <ul className="mt-5 space-y-4 text-slate-200/90">
              {characters.map((character) => (
                <li key={character.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">{character.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-aurora/70">
                    {character.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{character.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="glass-panel rounded-3xl border border-white/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-2xl text-white">Narration Script</h2>
            <p className="text-sm uppercase tracking-[0.4em] text-ember/80">~60 Seconds</p>
          </div>
          <ol className="mt-6 space-y-4">
            {narration.map((line, index) => (
              <li key={line.timecode} className="rounded-2xl bg-white/5 p-4 text-slate-200/90">
                <p className="text-xs uppercase tracking-[0.3em] text-dawn/80">{line.timecode}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-100">
                  <span className="font-semibold text-aurora">{index + 1}.</span> {line.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {scenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </section>

        <section className="glass-panel rounded-3xl p-8">
          <h2 className="font-display text-2xl text-white">Visual &amp; Motion Effects</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {effects.map((effect) => (
              <li key={effect.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{effect.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{effect.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-aurora/40" aria-hidden />
            <p className="relative font-display text-3xl text-white md:text-4xl">
              Policies sculpt our code. Choose the future you want written.
            </p>
            <p className="relative mt-4 text-sm uppercase tracking-[0.45em] text-slate-200/70">
              Final Frame • Neon city fades to black as circuitry freezes mid-glow
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
