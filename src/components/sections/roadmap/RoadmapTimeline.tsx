import { RoadmapPhase } from "@/app/config/roadmap";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";

interface RoadmapTimelineProps {
    phases: RoadmapPhase[];
}

export function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
    return (
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {phases.map((phase, index) => (
                <div key={phase.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon/Dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className={`w-3 h-3 rounded-full ${phase.status === 'completed' ? 'bg-accent-primary' : phase.status === 'in-progress' ? 'bg-accent-secondary' : 'bg-white/20'}`} />
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                        <RoadmapPhaseCard phase={phase} index={index} />
                    </div>
                </div>
            ))}
        </div>
    );
}
