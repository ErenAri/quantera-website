import Link from "next/link";
import { siteConfig } from "@/app/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center overflow-hidden">
            {/* Background Glow - More subtle and professional */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] -z-10 opacity-60" />

            <div className="space-y-10 max-w-5xl mx-auto px-4 z-10">
                {/* Badge - Clean and static */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-text-secondary backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                    </span>
                    <span className="tracking-wide uppercase text-xs font-medium">Quantera Protocol · ERC-20</span>
                </div>

                {/* Headline - Serious and Impactful */}
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                    The Standard for <br />
                    <span className="text-white drop-shadow-2xl">
                        Decentralized Value
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                    Quantera (QNR) is an institutional-grade utility token on Ethereum.
                    Built for security, scalability, and long-term ecosystem governance.
                </p>

                <div className="flex flex-wrap justify-center gap-5 pt-6">
                    <Button
                        href={siteConfig.links.etherscan}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        icon={
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        }
                    >
                        View Contract
                    </Button>
                    <Button
                        href="/how-to-buy"
                        variant="secondary"
                    >
                        How to Buy QNR
                    </Button>
                </div>

                {/* Contract Card - Professional and Clean */}
                <div className="pt-16 flex justify-center">
                    <GlassCard className="max-w-2xl w-full" hoverEffect={false}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className="text-center md:text-left px-4">
                                <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-1">
                                    Token Symbol
                                </p>
                                <p className="font-display font-bold text-xl text-white">
                                    $QNR
                                </p>
                            </div>
                            <div className="text-center px-4 pt-4 md:pt-0">
                                <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-1">
                                    Contract Address
                                </p>
                                <div className="flex items-center justify-center gap-2 group cursor-pointer">
                                    <p className="font-mono text-sm text-accent-primary truncate max-w-[150px]">
                                        {siteConfig.contractAddress}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:text-right px-4 pt-4 md:pt-0">
                                <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-1">
                                    Network
                                </p>
                                <p className="font-display font-bold text-xl text-white">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
