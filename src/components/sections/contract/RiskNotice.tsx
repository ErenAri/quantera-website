export function RiskNotice() {
    return (
        <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold">Risk Notice</h2>
            <div className="rounded-2xl border border-red-500/40 bg-red-500/5 p-4 text-sm text-red-100 space-y-2">
                <p>
                    Digital assets are highly volatile and can result in total loss of
                    capital. Nothing on this site constitutes financial, legal, or tax
                    advice.
                </p>
                <p>
                    Always verify the official contract address from multiple trusted
                    sources before interacting with QNR. Do not send funds to addresses
                    shared in private messages or unofficial channels.
                </p>
                <p>
                    By interacting with the Quantera contract, you acknowledge that you
                    understand and accept these risks.
                </p>
            </div>
        </section>
    );
}
