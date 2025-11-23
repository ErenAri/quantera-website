import { siteConfig } from "@/app/config/site";
import { contractInfo } from "@/app/config/contract";

export function ContractSummary() {
    return (
        <section className="space-y-6 text-center">
            <div className="space-y-4">
                <h1 className="font-display text-3xl font-semibold">Contract & Security</h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    This page summarizes the on-chain contract details for Quantera (QNR),
                    including the verified address, network, and key technical parameters.
                    Always verify the contract address before interacting with QNR.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-6 space-y-4 max-w-4xl mx-auto">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="text-left">
                        <p className="text-xs text-text-secondary uppercase tracking-[0.18em]">
                            Contract
                        </p>
                        <p className="font-mono text-sm break-all">
                            {contractInfo.address}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={siteConfig.links.etherscan}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full px-4 py-2 text-xs font-medium bg-gradient-to-r from-accent-primary to-accent-secondary text-black"
                        >
                            View on Etherscan
                        </a>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 text-sm">
                    <div className="text-left">
                        <p className="text-xs text-text-secondary mb-1">Network</p>
                        <p>{contractInfo.network}</p>
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-text-secondary mb-1">Standard</p>
                        <p>{contractInfo.standard}</p>
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-text-secondary mb-1">Decimals</p>
                        <p>{contractInfo.decimals}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
