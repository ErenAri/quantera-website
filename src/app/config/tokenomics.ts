export const tokenomics = {
    totalSupply: "1,000,000,000 QNR",
    allocations: [
        {
            label: "Liquidity & Market Making",
            value: 10,
            tokens: "100,000,000",
            vesting: "Unlocked (LP locked separately)",
        },
        {
            label: "Community & Airdrops",
            value: 20,
            tokens: "200,000,000",
            vesting: "4-year linear",
        },
        {
            label: "Staking Rewards",
            value: 25,
            tokens: "250,000,000",
            vesting: "8–10 years",
        },
        {
            label: "Team Allocation",
            value: 15,
            tokens: "150,000,000",
            vesting: "1-year cliff + 3 years linear",
        },
        {
            label: "Strategic Partners",
            value: 10,
            tokens: "100,000,000",
            vesting: "10% TGE + 2-year linear",
        },
        {
            label: "Treasury & Ecosystem",
            value: 15,
            tokens: "150,000,000",
            vesting: "Multi-sig (Gnosis Safe)",
        },
        {
            label: "Reserve / Burn Allocation",
            value: 5,
            tokens: "50,000,000",
            vesting: "Locked",
        },
    ],
};
