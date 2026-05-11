import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { transactions } from "@/lib/wallet-data";
import { ArrowDownLeft, ArrowUpRight, Repeat } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — duacrypo" },
      { name: "description", content: "Your recent crypto transactions." },
    ],
  }),
  component: HistoryPage,
});

const iconFor = {
  send: ArrowUpRight,
  receive: ArrowDownLeft,
  swap: Repeat,
} as const;

function HistoryPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Transaction history</h1>
          <p className="mt-1 text-sm text-muted-foreground">All activity across your wallets.</p>
        </header>

        <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {transactions.map((tx) => {
            const Icon = iconFor[tx.type];
            const incoming = tx.type === "receive";
            return (
              <li key={tx.id} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full ${
                      incoming ? "bg-primary/15 text-primary" : "bg-secondary text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium capitalize">{tx.type} {tx.asset}</p>
                    <p className="text-sm text-muted-foreground">
                      {tx.type === "swap" ? `→ ${tx.counterparty}` : tx.counterparty}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${incoming ? "text-primary" : ""}`}>
                    {incoming ? "+" : "-"}
                    {tx.amount} {tx.asset}
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </AppLayout>
  );
}
