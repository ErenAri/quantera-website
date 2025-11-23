import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 mt-12 bg-black/20 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-secondary">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <p>© {new Date().getFullYear()} Quantera. All rights reserved.</p>
                    <div className="hidden md:block w-px h-3 bg-white/10"></div>
                    <p className="flex items-center gap-1">
                        Created by <span className="text-text-primary font-medium">Eren Ari</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/ErenAri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/eren-ari/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </Link>
                        <Link
                            href="https://medium.com/@erenari27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="Medium"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                        </Link>
                    </div>
                    <div className="hidden md:block w-px h-3 bg-white/10"></div>
                    <div className="flex gap-4">
                        <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
                        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
