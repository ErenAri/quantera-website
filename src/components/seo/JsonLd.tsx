export default function JsonLd() {
    const tokenSchema = {
        "@context": "https://schema.org",
        "@type": "Cryptocurrency", // Note: This is a pending type in schema.org, often mapped to Product or FinancialProduct in standard parsers, but widely used in crypto.
        name: "Quantera",
        symbol: "QNR",
        description:
            "Official ERC-20 token on Ethereum with transparent tokenomics, long-term utility roadmap, strong governance, and security-first design.",
        image: "https://quantera.site/logo.png",
        url: "https://quantera.site",
        sameAs: [
            "https://twitter.com/QuanteraToken",
            "https://t.me/QuanteraPortal",
            "https://github.com/QuanteraProject",
            "https://linkedin.com/company/quantera",
        ],
        contractAddress: "0x38b8725a048Fa851508bB1566Ce9946f3486b309",
        network: "Ethereum Mainnet",
        category: "Utility Token",
        supply: "1000000000",
        dateCreated: "2025-01-01",
        creator: {
            "@type": "Organization",
            name: "Quantera",
        },
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Quantera",
        url: "https://quantera.site",
        logo: "https://quantera.site/logo.png",
        description: "Blockchain Project",
        foundingDate: "2025",
        sameAs: [
            "https://twitter.com/QuanteraToken",
            "https://t.me/QuanteraPortal",
            "https://github.com/QuanteraProject",
            "https://linkedin.com/company/quantera",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@quantera.site",
        },
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tokenSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
        </section>
    );
}
