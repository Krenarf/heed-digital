import Image from "next/image";
import Link from "next/link";
import { CATEGORY_META, WORK_ITEMS } from "@/data/portfolio";

export default function ThreeD() {
  const items = WORK_ITEMS.filter(i => i.category === "3d");
  const meta = CATEGORY_META["3d"];
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-8 py-16 space-y-8">
      <header>
        <h1 className="text-3xl md:text-5xl font-semibold">{meta.title}</h1>
        <p className="text-neutral-600">{meta.subtitle}</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Wrapper:any = item.href ? Link : "div";
          const props = item.href ? { href: item.href } : {};
          return (
            <Wrapper key={idx} {...props} className="group border rounded-2xl overflow-hidden hover:-translate-y-0.5 transition">
              <div className="relative aspect-[16/10] bg-neutral-100">
                {item.cover && <Image src={item.cover} alt="" fill className="object-cover" />}
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{item.blurb}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </main>
  );
}
