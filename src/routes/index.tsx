import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, ChevronRight, Expand, Menu, Play, Trees } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vardha Vision | Spaces That Shape Better Futures" },
      { name: "description", content: "Explore Vardha Vision, Crown Town residences, and Sainik Vihar plotted development." },
      { property: "og:title", content: "Vardha Vision | Spaces That Shape Better Futures" },
      { property: "og:description", content: "Discover Crown Town residences and Sainik Vihar plotted development by Vardha Vision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  ["Home", "home"], ["About", "about"], ["Projects", "projects"], ["Crown Town", "crown-town"],
  ["Sainik Vihar", "sainik-vihar"], ["Gallery", "gallery"], ["Location", "location"], ["Contact", "contact"],
] as const;

function BrandMark() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Vardha Vision home">
      <span className="grid size-9 place-items-center border border-primary/50 font-display text-lg text-primary">V</span>
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground">
        Vardha <span className="text-primary">Vision</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={light ? "eyebrow text-crown-accent" : "eyebrow text-primary"}>{eyebrow}</p>
      <h2 className={light ? "section-title text-crown-foreground" : "section-title text-foreground"}>{title}</h2>
    </div>
  );
}

function GalleryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={`group relative block cursor-zoom-in overflow-hidden ${className}`} aria-label={`View ${alt} fullscreen`}>
          <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
          <span className="absolute right-4 top-4 grid size-9 place-items-center border border-gallery-control bg-gallery-control text-gallery-control-foreground opacity-0 backdrop-blur-md transition group-hover:opacity-100">
            <Expand className="size-4" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-[94vw] border-border/40 bg-gallery-control p-2 text-gallery-control-foreground sm:rounded-none">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">Fullscreen project photograph</DialogDescription>
        <img src={src} alt={alt} className="max-h-[88vh] w-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {introVisible && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-ink px-6 text-center text-ink-foreground">
          <div className="absolute inset-x-[8vw] top-1/2 h-px bg-primary/30" />
          <div className="absolute bottom-0 left-1/2 h-1/3 w-px bg-primary/30" />
          <div className="relative animate-fade-in">
            <p className="eyebrow mb-5 text-primary">An architectural journey</p>
            <p className="font-display text-5xl sm:text-7xl">Vardha Vision</p>
            <Button variant="goldOutline" size="luxe" className="mt-10" onClick={() => setIntroVisible(false)}>
              Enter website <ArrowRight />
            </Button>
            <p className="mt-5 text-[0.62rem] uppercase tracking-[0.22em] text-ink-muted">Opening gate visual awaiting supplied media</p>
          </div>
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-40 border-b border-nav-border bg-nav/90 text-nav-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandMark />
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-nav-foreground xl:hidden" aria-label="Open menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-full border-primary/20 bg-ink p-8 text-ink-foreground sm:max-w-md">
              <SheetTitle className="font-display text-3xl text-ink-foreground">Vardha Vision</SheetTitle>
              <nav className="mt-16 grid" aria-label="Mobile navigation">
                {navigation.map(([label, id], index) => (
                  <SheetClose asChild key={id}>
                    <a href={`#${id}`} className="flex items-center justify-between border-b border-ink-border py-4 text-sm uppercase tracking-[0.16em]">
                      <span><span className="mr-4 text-primary">0{index + 1}</span>{label}</span><ChevronRight className="size-4" />
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="home" className="relative flex min-h-[92svh] items-end bg-ink px-5 pb-14 pt-32 text-ink-foreground sm:px-8 lg:px-12 lg:pb-20">
        <div className="hero-grid absolute inset-0 opacity-35" />
        <div className="absolute right-[7%] top-[18%] hidden h-[58%] w-[27%] border border-primary/25 lg:block" />
        <div className="absolute right-[11%] top-[23%] hidden h-[58%] w-[27%] border border-primary/50 lg:block" />
        <div className="relative mx-auto w-full max-w-[92rem]">
          <p className="eyebrow mb-7 text-primary">Purposeful spaces · Enduring vision</p>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.97] sm:text-8xl lg:text-[8.5rem]">
            Spaces That Shape<br /><span className="text-primary">Better Futures.</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="luxe"><a href="#projects">Explore our projects <ArrowRight /></a></Button>
            <Button asChild variant="goldOutline" size="luxe"><a href="#contact">Enquire now</a></Button>
          </div>
          <a href="#about" className="absolute bottom-0 right-0 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted md:flex">Discover <ArrowDown className="size-4" /></a>
        </div>
      </section>

      <section id="about" className="section-pad bg-warm">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <p className="eyebrow text-primary">Vardha Vision</p>
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">Thoughtful places, composed for the way life unfolds.</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Vardha Vision presents residential environments through considered architecture, open space, and a clear sense of belonging.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad bg-background">
        <div className="page-shell">
          <SectionHeading eyebrow="Two distinct experiences" title="Explore our projects" />
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-2">
            <a href="#crown-town" className="project-panel bg-crown p-8 text-crown-foreground sm:p-12">
              <span className="grid size-12 place-items-center border border-crown-accent/50"><Building2 /></span>
              <div className="mt-24 sm:mt-40"><p className="eyebrow text-crown-accent">Residential housing</p><h3 className="font-display text-5xl sm:text-7xl">Crown Town</h3><p className="mt-5 max-w-md text-sm leading-7 text-crown-muted">A residential setting of 2 BHK and 3 BHK houses with spaces for recreation and community.</p></div>
            </a>
            <a href="#sainik-vihar" className="project-panel bg-ink p-8 text-ink-foreground sm:p-12">
              <span className="grid size-12 place-items-center border border-primary/50"><Trees /></span>
              <div className="mt-24 sm:mt-40"><p className="eyebrow text-primary">Plotted development</p><h3 className="font-display text-5xl sm:text-7xl">Sainik Vihar</h3><p className="mt-5 max-w-md text-sm leading-7 text-ink-muted">Plots of different sizes, complemented by a temple, garden, and play area.</p></div>
            </a>
          </div>
        </div>
      </section>

      <section id="crown-town" className="bg-crown text-crown-foreground">
        <div className="page-shell section-pad">
          <SectionHeading eyebrow="Crown Town · The arrival" title="A welcoming entrance to a greener way of living." light />
        </div>
        <GalleryImage src={crownEntrance.url} alt="Crown Town entrance gate" className="aspect-[16/8] w-full" />

        <div className="page-shell section-pad grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <GalleryImage src={crownResidences.url} alt="Crown Town residences aligned along a landscaped street" className="aspect-[16/9]" />
          <div>
            <p className="eyebrow text-crown-accent">Residences</p>
            <h3 className="font-display text-5xl sm:text-6xl">Homes with room to belong.</h3>
            <div className="mt-10 grid grid-cols-2 gap-px bg-crown-border">
              <div className="bg-crown-soft p-6"><span className="font-display text-4xl">2</span><p className="mt-2 text-xs uppercase tracking-[0.16em]">BHK Houses</p></div>
              <div className="bg-crown-soft p-6"><span className="font-display text-4xl">3</span><p className="mt-2 text-xs uppercase tracking-[0.16em]">BHK Houses</p></div>
            </div>
          </div>
        </div>

        <div id="gallery" className="page-shell pb-24 sm:pb-32">
          <div className="mb-10 flex items-end justify-between"><SectionHeading eyebrow="Crown Town amenities" title="Life beyond the doorstep" light /><span className="hidden text-xs uppercase tracking-[0.16em] text-crown-muted md:block">Select an image to expand</span></div>
          <div className="grid gap-3 lg:grid-cols-2">
            <GalleryImage src={crownPool.url} alt="Crown Town club house and swimming pool" className="aspect-[16/10]" />
            <GalleryImage src={crownPlay.url} alt="Crown Town club house and kids playing area" className="aspect-[16/10]" />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-crown-border pt-6 text-xs uppercase tracking-[0.14em] text-crown-muted">
            <span>Swimming Pool</span><span>Indoor Games</span><span>Kids’ Playing Area</span><span>Badminton Court</span><span>Club House</span><span>Jogging Track</span>
          </div>
        </div>
      </section>

      <section id="sainik-vihar" className="bg-ink text-ink-foreground">
        <div className="page-shell section-pad">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <SectionHeading eyebrow="Sainik Vihar" title="A plotted development shaped around community." light />
            <p className="max-w-lg justify-self-end text-sm leading-7 text-ink-muted">Plots of different sizes are available, with a temple, garden, and play area forming part of the community environment.</p>
          </div>
          <GalleryImage src={sainikEntrance.url} alt="Sainik Vihar entrance" className="mt-14 aspect-[16/9] w-full" />
        </div>

        <div className="page-shell pb-24 sm:pb-32">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow text-primary">Project showcase</p><h3 className="font-display text-4xl sm:text-6xl">See the vision in motion.</h3></div><Play className="size-8 text-primary" /></div>
          <video src={sainikVideo.url} controls preload="metadata" playsInline className="aspect-[848/478] w-full bg-video" aria-label="Sainik Vihar project showcase video" />
        </div>

        <div className="border-y border-ink-border">
          <div className="page-shell grid md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Plots", "Plots of different sizes"], ["Temple", "A place for reflection"], ["Garden", "Green community space"], ["Play Area", "Space made for play"],
            ].map(([name, detail], index) => <div key={name} className="min-h-56 border-ink-border p-7 md:border-r"><span className="text-xs text-primary">0{index + 1}</span><h4 className="mt-16 font-display text-3xl">{name}</h4><p className="mt-2 text-sm text-ink-muted">{detail}</p></div>)}
          </div>
        </div>

        <div id="location" className="page-shell section-pad">
          <p className="eyebrow text-primary">Sainik Vihar · Location</p>
          <div className="mt-4 grid min-h-72 place-items-center border border-dashed border-primary/35 bg-ink-soft px-6 text-center">
            <div><p className="font-display text-3xl">Location map awaiting supplied media</p><p className="mt-3 text-sm text-ink-muted">The verified map and Google Maps destination will appear here.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm" aria-labelledby="payment-heading">
        <div className="page-shell">
          <SectionHeading eyebrow="Official payment information" title="Payment / Bank Details" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Please verify the company name and account details shown on the official bank image before making a payment.</p>
          <div className="mt-12 grid items-start gap-8 sm:grid-cols-2 lg:gap-16">
            <img src={bankVarada.url} alt="ICICI Bank details for Varadavision Infrabuilt Pvt Ltd" className="mx-auto w-full max-w-md border border-border object-contain" />
            <img src={bankRoyal.url} alt="ICICI Bank details for Royalbhoomi Developers" className="mx-auto w-full max-w-md border border-border object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-background" aria-labelledby="owner-heading">
        <div className="page-shell grid min-h-[78svh] lg:grid-cols-2">
          <div className="relative min-h-[34rem] overflow-hidden lg:min-h-full">
            <img src={ownerPhoto.url} alt="Tej Bahadur Singh" className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-14 lg:px-20">
            <div>
              <p className="eyebrow text-primary">Owner’s vision</p>
              <blockquote id="owner-heading" className="mt-6 font-display text-4xl leading-tight sm:text-5xl">“Every project begins with a vision — and every vision is built with trust.”</blockquote>
              <div className="mt-10 h-px w-16 bg-primary" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">Tej Bahadur Singh</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-ink text-center text-ink-foreground">
        <div className="page-shell">
          <p className="eyebrow text-primary">Contact & enquiry</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Let’s begin with your vision.</h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-ink-muted">Verified contact and enquiry details will be made available here.</p>
        </div>
      </section>

      <footer className="border-t border-ink-border bg-ink px-5 py-10 text-ink-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <BrandMark />
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
            <a href="#crown-town">Crown Town</a><a href="#sainik-vihar">Sainik Vihar</a><a href="#home">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}