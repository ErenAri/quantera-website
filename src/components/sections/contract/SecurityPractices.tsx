import { contractInfo } from "@/app/config/contract";

export function SecurityPractices() {
    return (
        <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Security Practices</h2>

            <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-4 space-y-2">
                    <p className="text-xs text-text-secondary uppercase tracking-[0.18em]">
                        Ownership
                    </p>
                    <p>{contractInfo.ownershipDescription}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-4 space-y-2">
                    <p className="text-xs text-text-secondary uppercase tracking-[0.18em]">
                        Liquidity
                    </p>
                    <p>{contractInfo.liquidityLockDescription}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-4 space-y-2">
                    <p className="text-xs text-text-secondary uppercase tracking-[0.18em]">
                        Audits
                    </p>
                    <p>{contractInfo.auditStatus}</p>
                </div>
            </div>
        </section>
    );
}
