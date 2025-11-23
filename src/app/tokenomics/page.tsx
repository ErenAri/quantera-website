import { TokenomicsIntro } from "@/components/sections/tokenomics/TokenomicsIntro";
import { AllocationTable } from "@/components/sections/tokenomics/AllocationTable";
import { AllocationPieChart } from "@/components/sections/tokenomics/AllocationPieChart";
import { tokenomics } from "@/app/config/tokenomics";

export default function TokenomicsPage() {
    return (
        <div className="min-h-screen">
            {/* Header Section with gradient */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,193,79,0.1),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20">
                    <TokenomicsIntro />
                </div>
            </div>

            {/* Two-column layout */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                    {/* Main content - Table */}
                    <div className="space-y-6">
                        <AllocationTable allocations={tokenomics.allocations} />
                    </div>

                    {/* Sidebar - Sticky Chart */}
                    <div className="lg:sticky lg:top-24">
                        <div className="relative">
                            {/* Accent glow behind chart */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-3xl -z-10" />
                            <AllocationPieChart allocations={tokenomics.allocations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
