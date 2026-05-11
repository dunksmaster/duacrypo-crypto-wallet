export type Asset = {
  symbol: string;
  name: string;
  balance: number;
  priceUsd: number;
  change24h: number;
};

export const assets: Asset[] = [
  { symbol: "BTC", name: "Bitcoin", balance: 0.4821, priceUsd: 68420, change24h: 2.4 },
  { symbol: "ETH", name: "Ethereum", balance: 6.213, priceUsd: 3540, change24h: -1.2 },
  { symbol: "SOL", name: "Solana", balance: 142.7, priceUsd: 168, change24h: 5.1 },
  { symbol: "USDC", name: "USD Coin", balance: 12480.55, priceUsd: 1, change24h: 0.0 },
];

export type Tx = {
  id: string;
  type: "send" | "receive" | "swap";
  asset: string;
  amount: number;
  counterparty: string;
  date: string;
};

export const transactions: Tx[] = [
  { id: "1", type: "receive", asset: "BTC", amount: 0.05, counterparty: "bc1q...8x4n", date: "2026-05-10" },
  { id: "2", type: "send", asset: "ETH", amount: 1.2, counterparty: "0xA1...c39F", date: "2026-05-09" },
  { id: "3", type: "swap", asset: "SOL", amount: 25, counterparty: "USDC", date: "2026-05-07" },
  { id: "4", type: "receive", asset: "USDC", amount: 2500, counterparty: "0xB7...11aD", date: "2026-05-05" },
  { id: "5", type: "send", asset: "BTC", amount: 0.012, counterparty: "bc1q...kk22", date: "2026-05-02" },
];

export const totalBalance = (list: Asset[] = assets) =>
  list.reduce((sum, a) => sum + a.balance * a.priceUsd, 0);

export const formatUsd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
