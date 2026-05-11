import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { assets, formatUsd } from "@/lib/wallet-data";
import { Send } from "lucide-react";

export const Route = createFileRoute("/send")({
  head: () => ({
    meta: [
      { title: "Send — duacrypo" },
      { name: "description", content: "Send crypto to any wallet address." },
    ],
  }),
  component: SendPage,
});

function SendPage() {
  const [asset, setAsset] = useState(assets[0].symbol);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const selected = assets.find((a) => a.symbol === asset)!;
  const usd = parseFloat(amount || "0") * selected.priceUsd;

  return (
    <AppLayout>
      <div className="mx-auto max-w-xl space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Send crypto</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Double-check the address — transactions cannot be reversed.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Demo: would send ${amount} ${asset} to ${address}`);
          }}
          className="space-y-5 rounded-3xl border border-border bg-card p-6"
        >
          <div className="space-y-2">
            <Label>Asset</Label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {assets.map((a) => (
                <button
                  type="button"
                  key={a.symbol}
                  onClick={() => setAsset(a.symbol)}
                  className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                    asset === a.symbol
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {a.symbol}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="any"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">≈ {formatUsd(usd)}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Recipient address</Label>
            <Input
              id="address"
              placeholder="bc1q... or 0x..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!amount || !address}
            style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}
          >
            <Send className="mr-2 h-4 w-4" /> Review & send
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
