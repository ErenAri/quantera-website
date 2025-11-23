import { RoadmapIntro } from "@/components/sections/roadmap/RoadmapIntro";
import { RoadmapTimeline } from "@/components/sections/roadmap/RoadmapTimeline";
import { roadmapPhases } from "@/app/config/roadmap";

export default function RoadmapPage() {
    return (
        <div className="min-h-screen">
            {/* Header Section with gradient - matching Tokenomics */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-accent-secondary/5 via-transparent to-accent-primary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(123,97,255,0.1),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20">
                    <RoadmapIntro />
                </div>
            </div>

            {/* Timeline content */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                <RoadmapTimeline phases={roadmapPhases} />
            </div>
        </div>
    );
}
