import { siteConfig } from "./site";

export type OwnershipStatus = "owned" | "renounced" | "multisig" | "tbd";

export const contractInfo = {
    address: siteConfig.contractAddress,
    network: siteConfig.network,
    standard: "ERC-20",
    decimals: 18,
    totalSupply: "1,000,000,000 QNR",
    compilerVersion: "TBD",
    deploymentTx: "TBD",
    ownershipStatus: "tbd" as OwnershipStatus,
    ownershipDescription: "Ownership details will be added after final security review.",
    liquidityLockDescription: "Liquidity lock information will be published after TGE.",
    auditStatus: "Audit planned. Report link will be added once available.",
};
