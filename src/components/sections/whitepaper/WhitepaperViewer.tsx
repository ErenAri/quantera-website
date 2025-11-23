import { siteConfig } from "@/app/config/site";

export function WhitepaperViewer() {
    return (
        <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Inline Viewer</h2>
            <p className="text-sm text-text-secondary">
                For best readability use fullscreen mode or download the PDF. If the
                embedded viewer does not load in your browser, use the download button
                above.
            </p>
            <div className="rounded-2xl border border-white/10 bg-bg-secondary/60 overflow-hidden h-[720px]">
                <iframe
                    src="https://drive.google.com/file/d/1FOPxovwUxLTFgLN5sDyH_zievsCk2sNT/view"
                    className="w-full h-full"
                    title="Quantera Whitepaper"
                />
            </div>
        </section>
    );
}
