import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dua Crypto — Investime në Kriptomonedha" },
      {
        name: "description",
        content:
          "Strategji, këshilla dhe burime për të investuar në kriptomonedha në Shqipëri.",
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

type LinkRow = { icon: string; label: string; href: string };

const links: LinkRow[] = [
  { icon: "ℹ️", label: "Çfarë është Duacrypto?", href: "#" },
  { icon: "📊", label: "BitGet në Shqipëri", href: "#" },
  { icon: "💼", label: "Portofoli nga Dua Crypto", href: "#" },
  { icon: "📞", label: "DuaCrypto Seanca Këshillimi (60 min)", href: "#" },
  { icon: "💱", label: "Duhet të shes fitimet për të tërhequr?", href: "#" },
  { icon: "✅", label: "Mbështet Rrugëtimin Tonë në Kripto", href: "#" },
  { icon: "🚩", label: "1. Si të investoni në Bitcoin nga Shqipëria?", href: "#" },
  { icon: "❗", label: "Kujdes", href: "#" },
  { icon: "📄", label: "Stake.com", href: "#" },
  { icon: "📘", label: "Dokumenti i Bardhë i Bitcoin", href: "#" },
  { icon: "🥧", label: "Pi Network", href: "#" },
];

const priceHistory = [
  { year: "2009", text: "Në vitin 2009 Bitcoin u krijua; nuk kishte treg të zhvilluar — vlera", price: "$0.1" },
  { year: "2015", text: "Rreth", price: "$504", suffix: "(pika më e lartë e regjistruar gjatë vitit)" },
  { year: "2017", text: "Afërsisht", price: "$19,700", suffix: "(ATH gjatë përfundimit të vitit)" },
  { year: "2021", text: "Afërsisht", price: "$69,000", suffix: "(rekord historik në nëntor 2021)" },
  {
    year: "2025",
    text: "Parashikim spekulativ: rreth",
    price: "$108,000",
    suffix: "(vlera e parashikuar $155,950)",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-black py-10">
        <h1 className="text-center font-mono text-4xl font-bold tracking-[0.2em] text-primary md:text-6xl">
          DUA CRYPTO
        </h1>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <article>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            Investime në Kriptomonedha: Strategji dhe Këshilla
          </h2>

          <section className="rounded-lg border border-border bg-card p-5 md:p-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 text-sm md:text-base">
              <div className="flex flex-col gap-3">
                <span aria-hidden className="text-2xl">🟢</span>
                <span aria-hidden className="text-2xl">🟠</span>
                <span aria-hidden className="text-2xl">🔷</span>
                <span aria-hidden className="text-2xl">🟡</span>
                <span aria-hidden className="text-2xl">🟣</span>
              </div>
              <ul className="space-y-3">
                {priceHistory.map((row) => (
                  <li key={row.year}>
                    <div className="font-semibold text-destructive">{row.year}</div>
                    <div className="text-foreground/90">
                      {row.text}{" "}
                      <span className="font-semibold text-primary">{row.price}</span>
                      {row.suffix ? <span> {row.suffix}</span> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <nav className="mt-8 divide-y divide-border border-y border-border">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-3 py-3 text-base text-accent hover:text-primary hover:underline"
              >
                <span aria-hidden className="text-lg">
                  {l.icon}
                </span>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
        </article>
      </main>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dua Crypto
      </footer>
    </div>
  );
}
