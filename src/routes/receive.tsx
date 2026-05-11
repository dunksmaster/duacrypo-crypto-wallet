import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { assets } from "@/lib/wallet-data";
import { Copy, Check } from "lucide-react";

export const Route = createFileRoute("/receive")({
  head: () => ({
    meta: [
      { title: "Receive — duacrypo" },
      { name: "description", content: "Get a deposit address to receive crypto." },
    ],
  }),
  component: ReceivePage,
});

const demoAddresses: Record<string, string> = {
  BTC: "bc1qexampledemoaddressduacrypo000xyz",
  ETH: "0xExampleDemoAddressDuacrypo0000000000a1b2",
  SOL: "DemoSoLanaAddressDuacrypo000000000000xyz",
  USDC: "0xExampleDemoAddressDuacrypo0000000000a1b2",
};

function QrPlaceholder() {
  return (
    <div
      className="grid h-48 w-48 grid-cols-12 grid-rows-12 gap-px rounded-2xl bg-foreground p-2"
      aria-hidden
    >
      {Array.from({ length: 144 }).map((_, i) => (
        <div
          key={i}
          className={(i * 37) % 5 < 2 ? "bg-background" : "bg-foreground"}
        />
      ))}
    </div>
  );
}

function ReceivePage() {
  const [asset, setAsset] = useState("BTC");
  const [copied, setCopied] = useState(false);
  const address = demoAddresses[asset];

  const copy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-xl space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Receive crypto</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Only send the matching asset on its native network to this address.
          </p>
        </header>

        <div className="space-y-5 rounded-3xl border border-border bg-card p-6">
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

          <div className="flex flex-col items-center gap-4 py-4">
            <QrPlaceholder />
            <p className="break-all text-center font-mono text-sm text-muted-foreground">
              {address}
            </p>
            <Button onClick={copy} variant="secondary" className="gap-2">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy address"}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
