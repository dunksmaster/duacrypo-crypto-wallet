import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — duacrypo" },
      { name: "description", content: "Manage security, currency, and notifications." },
    ],
  }),
  component: SettingsPage,
});

const rows = [
  { id: "biometric", label: "Biometric unlock", desc: "Use Face ID / Touch ID to open the app." },
  { id: "notifications", label: "Push notifications", desc: "Get alerts for sends and receives." },
  { id: "testnet", label: "Show testnet assets", desc: "Display tokens from test networks." },
];

function SettingsPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-2xl space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">Tune your wallet to your liking.</p>
        </header>

        <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {rows.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-6 p-5">
              <div>
                <Label htmlFor={r.id} className="text-base font-medium">
                  {r.label}
                </Label>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
              <Switch id={r.id} defaultChecked={r.id === "notifications"} />
            </li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}
