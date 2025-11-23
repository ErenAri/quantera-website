import { WhitepaperIntro } from "@/components/sections/whitepaper/WhitepaperIntro";
import { WhitepaperViewer } from "@/components/sections/whitepaper/WhitepaperViewer";
import { WhitepaperChapters } from "@/components/sections/whitepaper/WhitepaperChapters";

export default function WhitepaperPage() {
    return (
        <div className="min-h-screen">
            {/* Header Section with gradient - matching Tokenomics */}
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,193,79,0.08),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20">
                    <WhitepaperIntro />
                </div>
            </div>

            {/* Document viewer with chapters sidebar */}
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)] items-start">
                    <div className="relative">
                        <WhitepaperViewer />
                    </div>

                    <div className="lg:sticky lg:top-24">
                        <WhitepaperChapters />
                    </div>
                </div>
            </div>
        </div>
    );
}
