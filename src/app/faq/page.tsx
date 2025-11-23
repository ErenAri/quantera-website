import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Quantera (QNR)",
    description:
        "Frequently Asked Questions about Quantera (QNR), tokenomics, roadmap, and how to buy.",
};

const faqs = [
    {
        question: "What is Quantera (QNR)?",
        answer:
            "Quantera (QNR) is an ERC-20 utility token built on the Ethereum blockchain. It is designed to power a modular, scalable, and security-first decentralized ecosystem, offering governance rights and utility within the platform.",
    },
    {
        question: "How can I buy QNR?",
        answer:
            "QNR will be available on major decentralized exchanges (DEXs) like Uniswap after the official launch. Detailed instructions can be found on our 'How to Buy' page. Always verify the contract address before trading.",
    },
    {
        question: "What is the total supply of QNR?",
        answer:
            "The total supply of Quantera is fixed at 1,000,000,000 (1 Billion) QNR tokens. There is no minting function, ensuring a non-inflationary supply cap.",
    },
    {
        question: "Is the liquidity locked?",
        answer:
            "Yes, initial liquidity will be locked to ensure market stability and investor confidence. Details of the lock period and proof of lock will be published upon listing.",
    },
    {
        question: "What is the utility of the QNR token?",
        answer:
            "QNR serves multiple purposes: it is used for governance voting on protocol upgrades, staking to earn rewards, and as the primary medium of exchange within the Quantera ecosystem services.",
    },
    {
        question: "When is the launch date?",
        answer:
            "The official launch is scheduled for Q1 2025. Follow our official social media channels for the exact date and time announcements to avoid scams.",
    },
    {
        question: "How do I participate in governance?",
        answer:
            "Token holders can participate in governance by staking their QNR tokens in the governance portal. This grants voting power proportional to the amount staked, allowing you to vote on proposals.",
    },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Everything you need to know about Quantera.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-bg-secondary/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent-primary/30 transition-colors duration-300"
                        >
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                                    <span className="text-lg text-white group-hover:text-accent-primary transition-colors">
                                        {faq.question}
                                    </span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            className="text-text-secondary"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="text-text-secondary px-6 pb-6 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
