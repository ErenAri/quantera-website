import { siteConfig } from "@/app/config/site";
import { tokenomics } from "@/app/config/tokenomics";
import { GlassCard } from "@/components/ui/GlassCard";

export function TokenSnapshot() {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">Token Snapshot</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <GlassCard className="p-4">
                    <p className="text-xs text-text-secondary mb-1">Token</p>
                    <p className="text-sm font-medium">
                        {siteConfig.name} ({siteConfig.symbol})
                    </p>
                </GlassCard>
                <GlassCard className="p-4">
                    <p className="text-xs text-text-secondary mb-1">Total Supply</p>
                    <p className="text-sm font-medium">{tokenomics.totalSupply}</p>
                </GlassCard>
                <GlassCard className="p-4">
                    <p className="text-xs text-text-secondary mb-1">Standard</p>
                    <p className="text-sm font-medium">ERC-20 · 18 decimals</p>
                </GlassCard>
            </div>
        </section>
    );
}
