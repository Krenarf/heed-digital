import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "@/content/work";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} · Work · Heed Digital`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: [p.hero] }
  };
}

export default function WorkPage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-widest text-emerald-400">{p.category}</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-3xl text-neutral-300">{p.summary}</p>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image src={p.hero} alt={p.title} width={1600} height={900} className="h-auto w-full object-cover" priority />
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="mx-auto max-w-6xl gap-8 px-6 py-12 md:grid md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200">Role</h3>
          <ul className="list-disc pl-5 text-neutral-300">{p.role.map(r => <li key={r}>{r}</li>)}</ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200">Timeline</h3>
          <p className="text-neutral-300">{p.timeline}</p>
          <h3 className="mt-6 text-sm font-semibold text-neutral-200">Stack</h3>
          <p className="text-neutral-300">{p.stack.join(" · ")}</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-200">Results</h3>
          <ul className="text-neutral-300">
            {(p.results ?? []).map(r => <li key={r.label}><span className="text-neutral-400">{r.label}:</span> {r.value}</li>)}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {p.gallery.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image src={src} alt={`${p.title} shot ${i + 1}`} width={1200} height={800} className="h-auto w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <a href="/contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black">
          Start a Project
        </a>
      </section>
    </main>
  );
}
