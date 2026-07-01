import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/site/PublicLayout";
import { PageHero } from "@/components/site/PageHero";
import aerial from "@/assets/campus-aerial.jpg";
import grad from "@/assets/graduation.jpg";
import lab from "@/assets/lab.jpg";
import lib from "@/assets/library.jpg";
import hero from "@/assets/hero-campus.jpg";
import { X } from "lucide-react";

const IMGS = [aerial, hero, lib, grad, lab, aerial, lab, lib, hero, grad, aerial, lib];

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — AITR" }, { name: "description", content: "Photos from campus life, events and facilities at AITR." }]}),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <PublicLayout>
      <PageHero eyebrow="Gallery" title="Life at AITR, in pictures." crumbs={[{ label: "Gallery" }]} />
      <section className="container-page py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMGS.map((src, i) => (
            <button key={i} onClick={() => setActive(src)} className={`overflow-hidden rounded-2xl group ${i % 6 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={src} alt="Gallery" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </button>
          ))}
        </div>
      </section>
      {active && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm grid place-items-center p-6 animate-fade-in" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10" aria-label="Close"><X className="h-5 w-5" /></button>
          <img src={active} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </PublicLayout>
  );
}