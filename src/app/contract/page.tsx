import { ContractSummary } from "@/components/sections/contract/ContractSummary";
import { ContractTechnicalDetails } from "@/components/sections/contract/ContractTechnicalDetails";
import { SecurityPractices } from "@/components/sections/contract/SecurityPractices";
import { RiskNotice } from "@/components/sections/contract/RiskNotice";

export default function ContractPage() {
    return (
        <div className="min-h-screen">
            {/* Header Section with gradient - matching Tokenomics */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,193,79,0.1),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20">
                    <ContractSummary />
                </div>
            </div>

            {/* Content sections */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <ContractTechnicalDetails />
                        <RiskNotice />
                    </div>
                    <div>
                        <SecurityPractices />
                    </div>
                </div>
            </div>
        </div>
    );
}
