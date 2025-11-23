export type RoadmapStatus = "completed" | "in-progress" | "planned";

export type RoadmapPhase = {
    id: string;
    title: string;
    quarter: string;
    year: number;
    status: RoadmapStatus;
    items: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
    {
        id: "q1-2025",
        title: "Launch & Foundation",
        quarter: "Q1",
        year: 2025,
        status: "in-progress",
        items: [
            "Deploy Quantera (QNR) on Ethereum mainnet",
            "Verify contract and publish Quantera Core repo",
            "Release whitepaper v1 and tokenomics",
            "Launch official website and branding",
            "Open community channels and initial communications",
        ],
    },
    {
        id: "q2-2025",
        title: "Ecosystem MVP",
        quarter: "Q2",
        year: 2025,
        status: "planned",
        items: [
            "Launch QNR analytics and holdings dashboard",
            "Submit listings to leading market data aggregators",
            "Design and implement first staking / rewards mechanics",
            "Start partner integrations and ecosystem outreach",
        ],
    },
    {
        id: "q3-2025",
        title: "DeFi & Utility Expansion",
        quarter: "Q3",
        year: 2025,
        status: "planned",
        items: [
            "Release Quantera staking dApp v1",
            "Design Quantera Launchpad and initial DeFi modules",
            "Introduce buyback / burn mechanisms if sustainable",
            "Expand documentation, SDKs and developer resources",
        ],
    },
    {
        id: "q4-2025",
        title: "Scaling & Governance",
        quarter: "Q4",
        year: 2025,
        status: "planned",
        items: [
            "Formalize governance framework around QNR",
            "Explore L2 / modular chain direction for Quantera",
            "Publish annual transparency and treasury report",
            "Refine roadmap based on real usage and on-chain data",
        ],
    },
];
