import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/config/site";
import { Button } from "@/components/ui/Button";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/tokenomics", label: "Tokenomics" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/contract", label: "Contract" },
    { href: "/how-to-buy", label: "How to Buy" },
];

export function Navbar() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
            <div className="mx-auto max-w-5xl pointer-events-auto">
                <div className="rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl shadow-black/20 px-6 py-3 flex items-center justify-between transition-all hover:bg-white/10 hover:border-white/10 hover:shadow-accent-primary/5">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10 group-hover:border-accent-primary transition-colors">
                            <Image
                                src="/logo_transparent.png"
                                alt="Quantera logo"
                                fill
                                sizes="32px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-display font-bold tracking-tight text-lg">
                            {siteConfig.name}
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-full hover:bg-white/5"
                            >
                                {item.label}
                            </Link>
                        ))}


                        <Button
                            href={siteConfig.links.etherscan}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            className="ml-4 px-5 py-2 text-sm"
                        >
                            View Contract
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
