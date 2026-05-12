import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, ArrowRight, Bitcoin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dua Crypto — Investime në Kriptomonedha: Strategji dhe Këshilla" },
      {
        name: "description",
        content:
          "Investime në Kriptomonedha — strategji, këshilla, historiku i çmimit të Bitcoin dhe burime për investitorët shqiptarë.",
      },
      { property: "og:title", content: "Dua Crypto — Investime në Kriptomonedha" },
      {
        property: "og:description",
        content:
          "Strategji, këshilla dhe burime për të investuar në kriptomonedha në Shqipëri.",
      },
    ],
  }),
  component: HomePage,
});

type LinkRow = { icon: string; label: string; href: string; desc?: string };

const links: LinkRow[] = [
  { icon: "ℹ️", label: "Çfarë është Duacrypto?", href: "https://excited-edge-f5d.notion.site/far-sht-Duacrypto-18c22e4723cb801d9492c80bcec42758", desc: "Mëso bazat" },
  { icon: "📊", label: "BitGet në Shqipëri", href: "https://excited-edge-f5d.notion.site/BitGet-n-Shqip-ri-1a222e4723cb80cb9bcce7428b003ef2", desc: "Si të regjistrohesh" },
  { icon: "💼", label: "Portofoli nga Dua Crypto", href: "https://excited-edge-f5d.notion.site/Portofoli-nga-Dua-Crypto-1a622e4723cb805199def24c4e45fdc7", desc: "Shiko alokimin tonë" },
  { icon: "📞", label: "Seanca Këshillimi (60 min)", href: "https://excited-edge-f5d.notion.site/DuaCrypto-Seanca-K-shillimi-60-min-1a622e4723cb8062a1c6e5b7b9219b3c", desc: "Konsulencë 1-me-1" },
  { icon: "🏧", label: "Duhet të shes fitimet për të tërhequr?", href: "https://excited-edge-f5d.notion.site/Duhet-t-shes-fitimet-p-r-t-t-rhequr-18c22e4723cb802abdcfcd40540a81b4", desc: "Strategji tërheqjeje" },
  { icon: "✅", label: "Mbështet Rrugëtimin Tonë në Kripto", href: "https://excited-edge-f5d.notion.site/Mb-shtet-Rrug-timin-Ton-n-Kripto-1a622e4723cb8013a27dfff576b81598", desc: "Bashkohu me ne" },
  { icon: "🇦🇱", label: "Si të investoni në Bitcoin nga Shqipëria?", href: "https://excited-edge-f5d.notion.site/1-Si-t-investoni-n-Bitcoin-nga-Shqip-ria-18c22e4723cb80bf8f75c0cd88d18ea1", desc: "Udhëzues hap-pas-hapi" },
  { icon: "❗", label: "Kujdes", href: "https://excited-edge-f5d.notion.site/Kujdes-18c22e4723cb80918cdfeb1d8cda7280", desc: "Risqet e tregut" },
  { icon: "🎲", label: "Stake.com", href: "https://excited-edge-f5d.notion.site/Stake-com-32422e4723cb80bebed6cad329361f8a", desc: "Platformë e jashtme" },
  { icon: "📘", label: "Dokumenti i Bardhë i Bitcoin", href: "https://excited-edge-f5d.notion.site/Dokumenti-i-Bardh-i-Bitcoin-1a622e4723cb800baba7d67d9aaccb10", desc: "Whitepaper origjinal" },
  { icon: "🥧", label: "Pi Network", href: "https://excited-edge-f5d.notion.site/Pi-Network-1ab22e4723cb8069b8aff5ace725ccaa", desc: "Projekt mobile mining" },
];

type PricePoint = {
  year: string;
  coin: string;
  symbol: string;
  color: string;
  ring: string;
  price: string;
  note: string;
  forecast?: string;
};

const priceHistory: PricePoint[] = [
  {
    year: "2009",
    coin: "Genesis",
    symbol: "₿",
    color: "from-emerald-400 to-emerald-600",
    ring: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]",
    price: "$0.10",
    note: "Bitcoin u krijua. Ende pa treg të zhvilluar.",
  },
  {
    year: "2015",
    coin: "Early Bull",
    symbol: "₿",
    color: "from-orange-400 to-orange-600",
    ring: "shadow-[0_0_30px_-5px_rgba(251,146,60,0.6)]",
    price: "$504",
    note: "Pika më e lartë e regjistruar gjatë vitit.",
  },
  {
    year: "2017",
    coin: "ICO Mania",
    symbol: "₿",
    color: "from-sky-400 to-blue-600",
    ring: "shadow-[0_0_30px_-5px_rgba(56,189,248,0.6)]",
    price: "$19,700",
    note: "ATH gjatë përfundimit të vitit.",
  },
  {
    year: "2021",
    coin: "Institutional",
    symbol: "₿",
    color: "from-yellow-400 to-amber-600",
    ring: "shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)]",
    price: "$69,000",
    note: "Rekord historik në nëntor 2021.",
  },
  {
    year: "2025",
    coin: "Forecast",
    symbol: "₿",
    color: "from-fuchsia-400 to-purple-600",
    ring: "shadow-[0_0_30px_-5px_rgba(217,70,239,0.6)]",
    price: "$108,000",
    note: "Parashikim spekulativ.",
    forecast: "Vlera e parashikuar $155,950",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_20%_10%,oklch(0.78_0.18_155/0.35),transparent_50%),radial-gradient(circle_at_80%_30%,oklch(0.72_0.2_200/0.3),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            LIVE · Dua Crypto · Albania
          </div>
          <h1 className="font-mono text-4xl font-black tracking-[0.2em] text-primary md:text-6xl">
            DUA CRYPTO
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Investime në Kriptomonedha — strategji, këshilla dhe burime për investitorët shqiptarë.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Article title */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]">
            <Bitcoin className="size-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Investime në Kriptomonedha: Strategji dhe Këshilla
            </h2>
            <p className="text-xs text-muted-foreground">Historiku i çmimit të Bitcoin · BTC/USD</p>
          </div>
        </div>

        {/* Price history timeline */}
        <section className="relative rounded-2xl border border-border bg-[var(--gradient-surface)] p-5 shadow-[var(--shadow-card)] md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <TrendingUp className="size-4 text-primary" />
              Historiku i çmimit
            </div>
            <span className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              2009 → 2025
            </span>
          </div>

          <ol className="relative space-y-5 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-accent/40 before:to-transparent md:space-y-6">
            {priceHistory.map((p) => (
              <li key={p.year} className="relative flex items-start gap-4 md:gap-5">
                <div
                  className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${p.color} ${p.ring} font-mono text-2xl font-bold text-white ring-4 ring-background`}
                >
                  {p.symbol}
                </div>
                <div className="flex-1 rounded-xl border border-border bg-card/70 p-4 backdrop-blur transition hover:border-primary/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-foreground">{p.year}</span>
                      <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {p.coin}
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-mono text-xl font-extrabold text-transparent md:text-2xl">
                      {p.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/80">{p.note}</p>
                  {p.forecast ? (
                    <p className="mt-2 inline-block rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-xs text-accent">
                      🔮 {p.forecast}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs text-muted-foreground">
            * Çmimet janë të përafërta dhe shërbejnë vetëm për qëllime informative. Tregu i kriptomonedhave është shumë volatil.
          </p>
        </section>

        {/* Resources grid */}
        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between">
            <h3 className="text-xl font-bold">Burime &amp; Udhëzues</h3>
            <span className="text-xs text-muted-foreground">{links.length} artikuj</span>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 transition hover:border-primary/50 hover:bg-card hover:shadow-[var(--shadow-glow)]"
              >
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-muted text-xl"
                >
                  {l.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground group-hover:text-primary">
                    {l.label}
                  </span>
                  {l.desc ? (
                    <span className="block truncate text-xs text-muted-foreground">{l.desc}</span>
                  ) : null}
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dua Crypto · Made with 💚 in Albania
      </footer>
    </div>
  );
}
