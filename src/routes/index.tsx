import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ChevronRight, Expand, Instagram, Landmark, Mail, MapPin, Menu, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import bankVarada from "@/assets/bank-varadavision.jpeg.asset.json";
import bankRoyal from "@/assets/bank-royalbhoomi.jpeg.asset.json";
import crownEntrance from "@/assets/crown-town-entrance.jpeg.asset.json";
import crownPlay from "@/assets/crown-town-play-area.jpeg.asset.json";
import crownPool from "@/assets/crown-town-pool.jpeg.asset.json";
import crownResidences from "@/assets/crown-town-residences.jpeg.asset.json";
import sainikEntrance from "@/assets/sainik-vihar-entrance.jpeg.asset.json";
import sainikVideo from "@/assets/sainik-vihar-showcase.mp4.asset.json";
import ownerPhoto from "@/assets/tej-bahadur-singh.jpeg.asset.json";
import vardhaLogo from "@/assets/vardha-vision-logo.jpeg.asset.json";
import crownLogo from "@/assets/crown-town-logo.png.asset.json";
import sainikLogo from "@/assets/sainik-vihar-logo.jpeg.asset.json";
import sainikMap from "@/assets/sainik-vihar-map.jpg.asset.json";
import sainikMapPdf from "@/assets/sainik-vihar-map.pdf.asset.json";
import sainikSite11 from "@/assets/sainik-vihar-site-11.jpeg.asset.json";
import sainikSite12 from "@/assets/sainik-vihar-site-12.jpeg.asset.json";
import sainikSite13 from "@/assets/sainik-vihar-site-13.jpeg.asset.json";
import sainikSite14 from "@/assets/sainik-vihar-site-14.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vardha Vision | Building Spaces. Creating Visions." },
      { name: "description", content: "Vardha Vision presents Crown Town residences and Sainik Vihar plotted development, Faizabad Road, Lucknow." },
      { property: "og:title", content: "Vardha Vision | Building Spaces. Creating Visions." },
      { property: "og:description", content: "Discover Crown Town 2 & 3 BHK houses and Sainik Vihar plots by Vardha Vision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://share.google/Gb0Q3mm82rPOaVP3Q";
const PHONES = ["8826810951", "8056450951"];
const EMAIL = "tbsingh1981@gmail.com";
const INSTAGRAM = "https://www.instagram.com/sainikvihar.lko/";

const navigation = [["Home", "home"], ["Crown Town", "crown-town"], ["Sainik Vihar", "sainik-vihar"], ["Location", "location"], ["Contact", "contact"]] as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} data-shown={shown} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>;
}

function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 7}deg`);
    e.currentTarget.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 7}deg`);
  };
  const onLeave = (e: PointerEvent<HTMLDivElement>) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };
  return <div onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt ${className}`}>{children}</div>;
}

function GalleryImage({ src, alt, className = "", fit = "cover" }: { src: string; alt: string; className?: string; fit?: "cover" | "contain" }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={`group relative block w-full cursor-zoom-in overflow-hidden depth-shadow ${className}`} aria-label={`View ${alt} fullscreen`}>
          <img src={src} alt={alt} loading="lazy" className={`h-full w-full transition duration-700 group-hover:scale-[1.03] ${fit === "cover" ? "object-cover" : "object-contain"}`} />
          <span className="absolute right-4 top-4 grid size-9 place-items-center border border-gallery-control bg-gallery-control text-gallery-control-foreground opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100"><Expand className="size-4" /></span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-[94vw] border-border/40 bg-gallery-control p-2 text-gallery-control-foreground sm:rounded-none">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">Fullscreen photograph</DialogDescription>
        <img src={src} alt={alt} className="max-h-[88vh] w-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}

function Gate({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.documentElement.style.overflow = "hidden"; return () => { document.documentElement.style.overflow = ""; }; }, []);
  const enter = () => {
    if (open) return;
    setOpen(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(onDone, reduce ? 50 : 1700);
  };
  return (
    <div className={`fixed inset-0 z-[100] flex bg-ink ${open ? "gate-open pointer-events-none" : "cursor-pointer"}`} onClick={enter} role="dialog" aria-label="Vardha Vision entrance">
      <div className="gate-door gate-left gate-bars relative h-full w-1/2 origin-left border-r border-primary/60" />
      <div className="gate-door gate-right gate-bars relative h-full w-1/2 origin-right border-l border-primary/60" />
      <div className="gate-center gate-door absolute inset-0 grid place-items-center px-6 text-center">
        <div className="animate-fade-in">
          <img src={vardhaLogo.url} alt="Varadavision Infrabuilt Pvt. Ltd." className="mx-auto w-[min(78vw,22rem)] border border-primary/60 depth-shadow" />
          <Button variant="gold" size="luxe" className="mt-10" onClick={(e) => { e.stopPropagation(); enter(); }} autoFocus>
            Enter <ArrowRight />
          </Button>
          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-ink-muted">Tap the gate to open</p>
        </div>
      </div>
    </div>
  );
}

function ContactButtons({ compact = false }: { compact?: boolean }) {
  const size = compact ? "sm" : "luxe";
  return (
    <div className="flex flex-wrap gap-3">
      {PHONES.map((p) => <Button key={p} asChild variant="gold" size={size}><a href={`tel:+91${p}`}><Phone /> Call {p}</a></Button>)}
      <Button asChild variant="goldOutline" size={size}><a href={`mailto:${EMAIL}`}><Mail /> Email us</a></Button>
      <Button asChild variant="goldOutline" size={size}><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /> View on Google Maps</a></Button>
      <Button asChild variant="goldOutline" size={size}><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram /> Instagram</a></Button>
    </div>
  );
}

function Index() {
  const [gate, setGate] = useState(true);

  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty("--scroll", String(window.scrollY));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {gate && <Gate onDone={() => setGate(false)} />}

      <header className="fixed inset-x-0 top-0 z-40 border-b border-nav-border bg-nav/85 text-nav-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" aria-label="Vardha Vision home"><img src={vardhaLogo.url} alt="Varadavision Infrabuilt Pvt. Ltd. logo" className="h-12 w-auto border border-primary/40" /></a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
            <Button asChild variant="gold" size="sm"><a href={`tel:+91${PHONES[0]}`}><Phone /> {PHONES[0]}</a></Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="text-nav-foreground lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-full border-primary/20 bg-ink p-8 text-ink-foreground sm:max-w-md">
              <SheetTitle className="font-display text-3xl text-ink-foreground">Vardha Vision</SheetTitle>
              <nav className="mt-12 grid" aria-label="Mobile navigation">
                {navigation.map(([label, id], i) => (
                  <SheetClose asChild key={id}>
                    <a href={`#${id}`} className="flex items-center justify-between border-b border-ink-border py-5 font-display text-2xl">
                      <span><span className="mr-4 font-sans text-xs text-primary">0{i + 1}</span>{label}</span><ChevronRight className="size-4 text-primary" />
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-10"><ContactButtons compact /></div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="relative flex min-h-[100svh] items-center bg-ink px-5 pt-24 text-ink-foreground sm:px-8 lg:px-12">
        <div className="hero-grid absolute inset-0 opacity-40" style={{ transform: "translateY(calc(var(--scroll, 0) * 0.25px))" }} />
        <div className="pointer-events-none absolute right-[6%] top-[16%] hidden h-[62%] w-[30%] border border-primary/20 lg:block" style={{ transform: "perspective(1200px) rotateY(-18deg) translateY(calc(var(--scroll, 0) * -0.12px))" }} />
        <div className="pointer-events-none absolute right-[10%] top-[22%] hidden h-[62%] w-[30%] border border-primary/45 lg:block" style={{ transform: "perspective(1200px) rotateY(-18deg) translateY(calc(var(--scroll, 0) * -0.22px))" }} />
        <div className="pointer-events-none absolute right-[14%] top-[28%] hidden h-[62%] w-[30%] bg-ink-soft/80 depth-shadow lg:block" style={{ transform: "perspective(1200px) rotateY(-18deg) translateY(calc(var(--scroll, 0) * -0.32px))" }}>
          <img src={vardhaLogo.url} alt="" className="absolute inset-x-8 top-1/2 w-[calc(100%-4rem)] -translate-y-1/2 opacity-90" />
        </div>
        <div className="relative mx-auto w-full max-w-[92rem]">
          <p className="eyebrow mb-8 text-primary animate-fade-in">Vision · Trust · Architecture</p>
          <h1 className="dim-text font-display text-[clamp(3.5rem,11vw,10rem)] font-medium leading-[0.9] tracking-[-0.02em] animate-fade-in">VARDHA<br /><span className="italic text-primary">Vision</span></h1>
          <p className="mt-8 max-w-md text-lg font-light text-ink-muted">Building Spaces. Creating Visions.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="luxe"><a href="#projects">Explore projects <ArrowRight /></a></Button>
            <Button asChild variant="goldOutline" size="luxe"><a href="#contact">Enquire now</a></Button>
          </div>
        </div>
        <a href="#projects" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink-muted">Discover <ArrowDown className="size-4 animate-bounce" /></a>
      </section>

      {/* PROJECTS CHOOSER */}
      <section id="projects" className="section-pad bg-warm">
        <div className="page-shell">
          <Reveal><p className="eyebrow text-primary">Two distinct worlds</p><h2 className="section-title">Choose your experience</h2></Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal><Tilt>
              <a href="#crown-town" className="group relative block aspect-[4/5] overflow-hidden bg-crown text-crown-foreground depth-shadow sm:aspect-[5/4]">
                <img src={crownEntrance.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-crown via-crown/60 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="eyebrow text-crown-accent">Project 01</span>
                  <div><img src={crownLogo.url} alt="Crown Town logo" className="mb-6 h-20 w-auto" /><p className="text-sm text-crown-muted">2 BHK & 3 BHK houses</p><span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-crown-accent">Enter Crown Town <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></div>
                </div>
              </a>
            </Tilt></Reveal>
            <Reveal delay={120}><Tilt>
              <a href="#sainik-vihar" className="group relative block aspect-[4/5] overflow-hidden bg-ink text-ink-foreground depth-shadow sm:aspect-[5/4]">
                <img src={sainikEntrance.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="eyebrow text-primary">Project 02</span>
                  <div><img src={sainikLogo.url} alt="Sainik Vihar logo" className="mb-6 h-24 w-auto border border-primary/40" /><p className="text-sm text-ink-muted">Plotted development · Plots of different sizes</p><span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">Enter Sainik Vihar <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></div>
                </div>
              </a>
            </Tilt></Reveal>
          </div>
        </div>
      </section>

      {/* CROWN TOWN WORLD */}
      <section id="crown-town" className="bg-crown text-crown-foreground">
        <div className="relative min-h-[90svh] overflow-hidden">
          <img src={crownEntrance.url} alt="Crown Town entrance gate" className="absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.08)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-crown via-crown/40 to-crown/20" />
          <div className="page-shell relative flex min-h-[90svh] flex-col justify-end pb-16 pt-32">
            <Reveal>
              <img src={crownLogo.url} alt="Crown Town logo" className="h-28 w-auto depth-shadow sm:h-36" />
              <h2 className="dim-text mt-8 max-w-3xl font-display text-5xl font-medium leading-[1] sm:text-7xl">A crowning address for family life.</h2>
              <p className="eyebrow mt-6 text-crown-accent">Project 01 · Residential houses</p>
            </Reveal>
          </div>
        </div>

        <div className="page-shell section-pad grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal><Tilt><GalleryImage src={crownResidences.url} alt="Crown Town houses aligned along a landscaped street" className="aspect-[16/10]" /></Tilt></Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-crown-accent">Residences</p>
            <h3 className="section-title">Homes with room to belong.</h3>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {["2", "3"].map((n) => (
                <Tilt key={n} className="border border-crown-border bg-crown-soft p-7 depth-shadow">
                  <span className="font-display text-7xl text-crown-accent">{n}</span>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em]">BHK Houses</p>
                </Tilt>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="page-shell pb-24 sm:pb-32">
          <Reveal><p className="eyebrow text-crown-accent">Crown Town amenities</p><h3 className="section-title">Life beyond the doorstep</h3></Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal><article>
              <Tilt><GalleryImage src={crownPool.url} alt="Crown Town club house with swimming pool" className="aspect-[16/11]" /></Tilt>
              <div className="mt-6 flex items-baseline justify-between border-b border-crown-border pb-4"><h4 className="font-display text-3xl">Swimming Pool & Club House</h4><span className="text-xs text-crown-accent">01</span></div>
            </article></Reveal>
            <Reveal delay={150}><article className="lg:mt-24">
              <Tilt><GalleryImage src={crownPlay.url} alt="Crown Town club house with kids playing area" className="aspect-[16/11]" /></Tilt>
              <div className="mt-6 flex items-baseline justify-between border-b border-crown-border pb-4"><h4 className="font-display text-3xl">Kids’ Playing Area & Club House</h4><span className="text-xs text-crown-accent">02</span></div>
            </article></Reveal>
          </div>
          <Reveal><div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-crown-muted">
            {["Swimming Pool", "Indoor Games", "Kids’ Playing Area", "Badminton Court", "Club House", "Jogging Track"].map((a) => <span key={a} className="flex items-center gap-3"><span className="size-1.5 rotate-45 bg-crown-accent" />{a}</span>)}
          </div></Reveal>
        </div>
      </section>

      {/* SAINIK VIHAR WORLD */}
      <section id="sainik-vihar" className="bg-ink text-ink-foreground">
        <div className="relative min-h-[90svh] overflow-hidden">
          <img src={sainikEntrance.url} alt="Sainik Vihar entrance" className="absolute inset-0 h-full w-full object-cover" style={{ transform: "scale(1.08)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <div className="page-shell relative flex min-h-[90svh] flex-col justify-end pb-16 pt-32">
            <Reveal>
              <img src={sainikLogo.url} alt="Sainik Vihar logo" className="h-32 w-auto border border-primary/50 depth-shadow sm:h-40" />
              <h2 className="dim-text mt-8 max-w-3xl font-display text-5xl font-medium leading-[1] sm:text-7xl">Ground ready for the life you plan.</h2>
              <p className="eyebrow mt-6 text-primary">Project 02 · Plotted development</p>
            </Reveal>
          </div>
        </div>

        <div className="page-shell section-pad">
          <Reveal className="mb-10 grid items-end gap-6 lg:grid-cols-2">
            <div><p className="eyebrow text-primary">Main project showcase</p><h3 className="section-title">See the vision in motion.</h3></div>
            <p className="max-w-md text-sm leading-7 text-ink-muted lg:justify-self-end">Plots of different sizes, with a temple, garden and play area forming part of the community.</p>
          </Reveal>
          <Reveal><div className="border border-primary/30 p-2 depth-shadow sm:p-3">
            <video src={sainikVideo.url} controls preload="metadata" playsInline className="aspect-[848/478] w-full bg-video object-contain" aria-label="Sainik Vihar project showcase video" />
          </div></Reveal>
        </div>

        <div className="page-shell pb-24 sm:pb-32">
          <Reveal><p className="eyebrow text-primary">On the ground</p><h3 className="section-title">The project, column by column.</h3></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Plots", d: "Plots of different sizes, marked out across the site.", img: sainikSite12.url, alt: "Sainik Vihar plots marked out across the site" },
              { t: "Plot Boundaries", d: "Individual plots defined on the ground.", img: sainikSite13.url, alt: "A demarcated Sainik Vihar plot with sapling" },
              { t: "Site Roads", d: "Access through the development.", img: sainikSite11.url, alt: "Road through Sainik Vihar with plots on both sides" },
              { t: "Community", d: "Sainik Vihar, marked on site.", img: sainikSite14.url, alt: "Sainik Vihar name on the site boundary wall" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}><Tilt className="border border-ink-border bg-ink-soft">
                <GalleryImage src={c.img} alt={c.alt} className="aspect-[3/4]" />
                <div className="p-6"><span className="text-xs text-primary">0{i + 1}</span><h4 className="mt-2 font-display text-3xl">{c.t}</h4><p className="mt-2 text-sm text-ink-muted">{c.d}</p></div>
              </Tilt></Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-px border border-ink-border bg-ink-border sm:grid-cols-3">
            {[["Temple", "A place for reflection"], ["Garden", "Green community space"], ["Play Area", "Space made for play"]].map(([n, d]) => (
              <div key={n} className="bg-ink p-7"><h4 className="font-display text-3xl">{n}</h4><p className="mt-2 text-sm text-ink-muted">{d}</p></div>
            ))}
          </div>
        </div>

        <div id="location" className="border-t border-ink-border">
          <div className="page-shell section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-primary">Sainik Vihar · Location</p>
              <h3 className="section-title">Site layout & location</h3>
              <p className="mt-6 flex items-start gap-3 text-sm leading-7 text-ink-muted"><MapPin className="mt-1 size-4 shrink-0 text-primary" /> Kisan Path, Faizabad Road, Lucknow · Behind Tata Telco</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="luxe"><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin /> View on Google Maps</a></Button>
                <Button asChild variant="goldOutline" size="luxe"><a href={sainikMapPdf.url} target="_blank" rel="noreferrer">Full layout (PDF)</a></Button>
              </div>
            </Reveal>
            <Reveal delay={150}><Tilt><GalleryImage src={sainikMap.url} alt="Sainik Vihar site layout map" className="aspect-[1140/780] bg-ink-soft" /></Tilt></Reveal>
          </div>
        </div>
      </section>

      {/* OWNER */}
      <section className="bg-background" aria-labelledby="owner-heading">
        <div className="page-shell grid min-h-[78svh] items-center gap-10 py-20 lg:grid-cols-2">
          <Reveal><Tilt className="relative mx-auto aspect-[4/5] w-full max-w-lg">
            <div className="absolute -inset-3 translate-x-6 translate-y-6 border border-primary/50" />
            <img src={ownerPhoto.url} alt="Tej Bahadur Singh" className="relative h-full w-full object-cover object-top depth-shadow" />
          </Tilt></Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-primary">Owner’s vision</p>
            <blockquote id="owner-heading" className="mt-6 font-display text-4xl italic leading-tight sm:text-5xl">“Every project begins with a vision — and every vision is built with trust.”</blockquote>
            <div className="mt-10 h-px w-16 bg-primary" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em]">— Tej Bahadur Singh</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad bg-ink text-ink-foreground">
        <div className="page-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow text-primary">Contact & enquiry</p>
            <h2 className="section-title">Let’s begin with your vision.</h2>
            <div className="mt-10"><ContactButtons /></div>
          </Reveal>
          <Reveal delay={150} className="grid content-start gap-px border border-ink-border bg-ink-border">
            {PHONES.map((p) => <a key={p} href={`tel:+91${p}`} className="flex items-center gap-4 bg-ink p-6 transition hover:bg-ink-soft"><Phone className="size-4 text-primary" /><span className="font-display text-3xl">{p}</span></a>)}
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 bg-ink p-6 transition hover:bg-ink-soft"><Mail className="size-4 text-primary" /><span className="break-all text-lg">{EMAIL}</span></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-ink p-6 transition hover:bg-ink-soft"><Instagram className="size-4 text-primary" /><span className="text-lg">@sainikvihar.lko</span></a>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="flex items-center justify-between gap-4 bg-ink-soft p-6 text-left transition hover:bg-ink">
                  <span className="flex items-center gap-4"><Landmark className="size-4 text-primary" /><span><span className="block font-display text-2xl">Payment & Bank Details</span><span className="text-xs uppercase tracking-[0.16em] text-ink-muted">View bank details</span></span></span>
                  <ArrowRight className="size-4 text-primary" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[92vh] w-[94vw] max-w-4xl overflow-y-auto border-primary/30 bg-warm sm:rounded-none">
                <DialogTitle className="font-display text-3xl">Payment & Bank Details</DialogTitle>
                <DialogDescription>Please verify the company name and account details before making a payment.</DialogDescription>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <img src={bankVarada.url} alt="ICICI Bank details for Varadavision Infrabuilt Pvt Ltd" className="w-full border border-border object-contain" />
                  <img src={bankRoyal.url} alt="ICICI Bank details for Royalbhoomi Developers" className="w-full border border-border object-contain" />
                </div>
              </DialogContent>
            </Dialog>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-ink-border bg-ink px-5 py-12 text-ink-foreground sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-[1fr_auto_auto]">
          <div><img src={vardhaLogo.url} alt="Varadavision Infrabuilt Pvt. Ltd. logo" className="h-16 w-auto border border-primary/40" /><p className="mt-5 text-xs text-ink-muted">© {new Date().getFullYear()} Varadavision Infrabuilt Pvt. Ltd.</p></div>
          <div className="grid content-start gap-3 text-xs uppercase tracking-[0.16em] text-ink-muted">
            <a href="#crown-town" className="hover:text-primary">Crown Town</a><a href="#sainik-vihar" className="hover:text-primary">Sainik Vihar</a><a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-primary">Google Maps</a><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
          </div>
          <div className="grid content-start gap-3 text-sm text-ink-muted">
            {PHONES.map((p) => <a key={p} href={`tel:+91${p}`} className="hover:text-primary">{p}</a>)}
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
