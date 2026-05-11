import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { assets, formatUsd, totalBalance } from "@/lib/wallet-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wallet — duacrypo" },
      { name: "description", content: "Your crypto portfolio at a glance." },
    ],
  }),
  component: WalletPage,
});

function WalletPage() {
  const total = totalBalance();
  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <section
          className="rounded-3xl p-8"
          style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-card)" }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Total balance
          </p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight">{formatUsd(total)}</h1>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
            <ArrowUpRight className="h-3.5 w-3.5" /> +1.84% today
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold">Assets</h2>
          <ul className="space-y-2">
            {assets.map((a) => {
              const value = a.balance * a.priceUsd;
              const positive = a.change24h >= 0;
              return (
                <li
                  key={a.symbol}
                  className="flex items-center justify-between rounded-2xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-sm font-semibold">
                      {a.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <p className="font-medium">{a.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {a.balance} {a.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatUsd(value)}</p>
                    <p
                      className={`inline-flex items-center gap-0.5 text-sm ${positive ? "text-primary" : "text-destructive"}`}
                    >
                      {positive ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDownRight className="h-3.5 w-3.5" />
                      )}
                      {Math.abs(a.change24h).toFixed(2)}%
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </AppLayout>
  );
}
