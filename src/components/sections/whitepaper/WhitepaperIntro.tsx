import { siteConfig } from "@/app/config/site";

export function WhitepaperIntro() {
    return (
        <section className="space-y-4 text-center">
            <h1 className="font-display text-3xl font-semibold">Whitepaper</h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
                The Quantera Whitepaper describes the economic model, token design,
                roadmap, and long-term vision behind QNR. The PDF below is the primary
                reference for the protocol&apos;s architecture, tokenomics, and
                governance assumptions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
                <a
                    href={siteConfig.whitepaper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent-primary to-accent-secondary text-black"
                >
                    Download PDF
                </a>
                <a
                    href={siteConfig.whitepaper.mdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-5 py-2.5 text-sm font-medium border border-white/20 text-text-primary hover:bg-white/5"
                >
                    View on GitHub
                </a>
            </div>
        </section>
    );
}
