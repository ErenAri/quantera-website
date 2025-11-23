import { contractInfo } from "@/app/config/contract";

export function ContractTechnicalDetails() {
    return (
        <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Technical Details</h2>

            <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-6 grid gap-6 md:grid-cols-2 text-sm">
                <div className="space-y-3">
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Total Supply</p>
                        <p>{contractInfo.totalSupply}</p>
                    </div>
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Compiler Version</p>
                        <p>{contractInfo.compilerVersion}</p>
                    </div>
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Deployment Transaction</p>
                        <p className="font-mono break-all">{contractInfo.deploymentTx}</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Token Standard</p>
                        <p>{contractInfo.standard} on {contractInfo.network}</p>
                    </div>
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Decimals</p>
                        <p>{contractInfo.decimals}</p>
                    </div>
                    <div>
                        <p className="text-xs text-text-secondary mb-1">Audit Status</p>
                        <p>{contractInfo.auditStatus}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
