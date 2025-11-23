import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal & Disclaimers | Quantera (QNR)",
    description:
        "Terms of Service, Privacy Policy, and Risk Disclaimers for the Quantera (QNR) ecosystem.",
};

export default function LegalPage() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                        Legal & Disclaimers
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Last Updated: {new Date().getFullYear()}
                    </p>
                </div>

                <section className="space-y-6 bg-bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-semibold text-accent-primary">
                        1. General Disclaimer
                    </h2>
                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        <p>
                            The information provided on this website and in the Quantera (QNR)
                            whitepaper is for informational purposes only and does not constitute
                            financial, investment, or legal advice. Quantera is a utility token
                            designed for use within its specific ecosystem.
                        </p>
                        <p>
                            Nothing herein shall be construed as a solicitation, recommendation,
                            endorsement, or offer to buy or sell any tokens or other financial
                            instruments. You should consult with a qualified professional before
                            making any financial decisions.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 bg-bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-semibold text-accent-primary">
                        2. Risk Disclosure
                    </h2>
                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        <p>
                            <strong>Volatility Risk:</strong> Cryptographic tokens are highly
                            volatile. The value of QNR may fluctuate significantly over short
                            periods. You should only interact with the ecosystem if you can afford
                            to lose the entire value of your contribution.
                        </p>
                        <p>
                            <strong>Regulatory Risk:</strong> Blockchain technology and
                            cryptocurrencies are subject to evolving regulations in various
                            jurisdictions. Changes in laws or regulations may adversely affect the
                            utility or value of QNR.
                        </p>
                        <p>
                            <strong>Technical Risk:</strong> While we prioritize security, smart
                            contracts and blockchain technology involve inherent risks, including
                            but not limited to bugs, vulnerabilities, and hacks.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 bg-bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-semibold text-accent-primary">
                        3. Terms of Service
                    </h2>
                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        <p>
                            By accessing this website or purchasing QNR tokens, you agree to be
                            bound by these terms. You confirm that you are not a citizen or
                            resident of any jurisdiction where the holding or trading of
                            cryptographic tokens is prohibited by law.
                        </p>
                        <p>
                            The Quantera team reserves the right to modify the roadmap,
                            tokenomics, or platform features as necessary for the project's
                            success and compliance with applicable laws.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 bg-bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-semibold text-accent-primary">
                        4. Privacy Policy
                    </h2>
                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        <p>
                            We respect your privacy. This website does not collect personal
                            identifiable information (PII) unless explicitly provided by you (e.g.,
                            via a contact form). We may use cookies or similar technologies to
                            analyze site traffic and improve user experience.
                        </p>
                        <p>
                            Public blockchain data (wallet addresses, transaction history) is
                            transparent and immutable. By interacting with the Quantera smart
                            contracts, you acknowledge that your on-chain activity is public.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
