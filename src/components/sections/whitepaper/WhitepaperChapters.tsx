const chapters = [
    "1. Overview and Motivation",
    "2. Token Design and Utility",
    "3. Economic Model and Tokenomics",
    "4. Architecture and Security",
    "5. Roadmap and Execution Phases",
    "6. Governance and Treasury",
    "7. Risk Factors and Disclaimers",
];

export function WhitepaperChapters() {
    return (
        <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Chapters Overview</h2>
            <ul className="space-y-2 text-sm text-text-secondary">
                {chapters.map((c, i) => (
                    <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-primary/80" />
                        <span>{c}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
