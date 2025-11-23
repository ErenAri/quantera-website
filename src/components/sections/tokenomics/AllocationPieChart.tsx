"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
    "#F2C14F", // Gold
    "#7B61FF", // Purple
    "#3DE0B2", // Teal
    "#A0A3B1", // Grey
    "#FFD966", // Light Gold
    "#C8A2FF", // Light Purple
];

interface Allocation {
    label: string;
    value: number;
    [key: string]: any;
}

interface AllocationPieChartProps {
    allocations: Allocation[];
}

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-bg-secondary border border-white/10 rounded-lg p-3 shadow-xl z-50 relative">
                <p className="font-display font-medium text-white mb-1">{data.label}</p>
                <p className="text-sm text-text-secondary">
                    <span className="font-mono text-accent-primary font-bold">{data.value}%</span> Allocation
                </p>
            </div>
        );
    }
    return null;
};

export function AllocationPieChart({ allocations }: AllocationPieChartProps) {
    return (
        <section className="space-y-6">
            <h2 className="font-display text-xl font-semibold">Allocation Breakdown</h2>

            <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Chart Area */}
                <div className="h-80 w-full md:w-1/2 relative">
                    {/* Center Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <span className="text-xs text-text-tertiary uppercase tracking-wider">Total</span>
                            <div className="text-xl font-bold text-white">100%</div>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={allocations}
                                dataKey="value"
                                nameKey="label"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                innerRadius={75}
                                paddingAngle={2}
                                stroke="none"
                            >
                                {allocations.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                        className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend Area */}
                <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {allocations.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div
                                className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-text-primary">{item.label}</span>
                                <span className="text-xs text-text-secondary font-mono">{item.value}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
