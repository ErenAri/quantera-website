import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/config/site";

export const metadata: Metadata = {
    title: "How to Buy Quantera (QNR) | Step-by-Step Guide",
    description:
        "Learn how to buy Quantera (QNR) tokens on Ethereum. Follow our simple step-by-step guide to purchase QNR safely using MetaMask or other Web3 wallets.",
};

const steps = [
    {
        title: "Create a Wallet",
        description:
            "Download and install a Web3 wallet like MetaMask, Trust Wallet, or Coinbase Wallet. These wallets allow you to store and manage your Ethereum and QNR tokens securely.",
        icon: (
            <svg
                className="w-8 h-8 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
            </svg>
        ),
    },
    {
        title: "Get ETH",
        description:
            "You need Ethereum (ETH) to buy QNR. You can buy ETH directly within your wallet app, or purchase it on a centralized exchange (like Coinbase or Binance) and transfer it to your wallet address.",
        icon: (
            <svg
                className="w-8 h-8 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        title: "Connect to Uniswap",
        description:
            "Go to Uniswap (or the official trading link provided below) and connect your wallet. Ensure you are on the Ethereum Mainnet network.",
        icon: (
            <svg
                className="w-8 h-8 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
            </svg>
        ),
    },
    {
        title: "Swap ETH for QNR",
        description:
            "Enter the amount of ETH you want to swap. Paste the official QNR contract address to ensure you are buying the correct token. Confirm the transaction in your wallet.",
        icon: (
            <svg
                className="w-8 h-8 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
            </svg>
        ),
    },
];

export default function HowToBuyPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">
                        How to Buy <span className="text-accent-primary">QNR</span>
                    </h1>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        Follow this simple guide to become part of the Quantera ecosystem.
                        Always verify the contract address before trading.
                    </p>
                </div>

                {/* Contract Address Box */}
                <div className="bg-bg-secondary/50 border border-accent-primary/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm text-center max-w-3xl mx-auto relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors duration-500"></div>
                    <h3 className="text-lg font-medium text-text-secondary mb-2 relative z-10">
                        Official Contract Address (ERC-20)
                    </h3>
                    <div className="font-mono text-sm md:text-xl text-white break-all bg-black/30 p-4 rounded-lg border border-white/10 relative z-10 select-all">
                        0x38b8725a048Fa851508bB1566Ce9946f3486b309
                    </div>
                    <p className="text-xs text-accent-primary mt-3 relative z-10">
                        ⚠️ Always double-check the address on Etherscan
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-bg-secondary/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-accent-primary/30 transition-all duration-300 group"
                        >
                            <div className="bg-bg-primary/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-3">
                                {index + 1}. {step.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-8 pt-8">
                    <Link
                        href={siteConfig.links.uniswap || "#"}
                        target="_blank"
                        className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-black overflow-hidden group transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(242,193,79,0.6)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-[#FFD700] to-accent-primary bg-[length:200%_100%] animate-shimmer"></div>
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
                        <span className="relative z-10">Buy on Uniswap</span>
                        <svg
                            className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </Link>
                    <p className="text-sm text-text-secondary">
                        New to crypto?{" "}
                        <Link href="/faq" className="text-accent-primary hover:underline">
                            Read our FAQ
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
