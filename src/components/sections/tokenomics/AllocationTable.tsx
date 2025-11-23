interface Allocation {
    label: string;
    value: number;
}

interface AllocationTableProps {
    allocations: Allocation[];
}

export function AllocationTable({ allocations }: AllocationTableProps) {
    return (
        <section className="space-y-6">
            <h2 className="font-display text-xl font-semibold">Allocation Model</h2>

            <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 p-6">
                <table className="w-full text-sm">
                    <thead className="text-text-secondary">
                        <tr>
                            <th className="text-left pb-3 font-normal">Category</th>
                            <th className="text-right pb-3 font-normal">Allocation</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {allocations.map((a, idx) => (
                            <tr key={idx} className="h-12">
                                <td className="text-left">{a.label}</td>
                                <td className="text-right">{a.value}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
