import { RoadmapPhase } from "@/app/config/roadmap";

type Props = {
    phase: RoadmapPhase;
    index: number;
};

function StatusBadge({ status }: { status: RoadmapPhase["status"] }) {
    const label =
        status === "completed"
            ? "Completed"
            : status === "in-progress"
                ? "In Progress"
                : "Planned";

    const className =
        status === "completed"
            ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
            : status === "in-progress"
                ? "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/40"
                : "bg-white/5 text-text-secondary border-white/15";

    return (
        <span
            className={
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide " +
                className
            }
        >
            {label}
        </span>
    );
}

export function RoadmapPhaseCard({ phase, index }: Props) {
    return (
        <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-5 space-y-4">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary">
                        {phase.quarter} {phase.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                        {phase.title}
                    </h3>
                </div>
                <StatusBadge status={phase.status} />
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
                {phase.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-primary/80" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="text-[11px] text-text-secondary/70">
                Phase {index + 1} of {""}
                {phase.year}
            </div>
        </div>
    );
}
