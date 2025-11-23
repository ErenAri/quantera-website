import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    icon?: ReactNode;
    target?: string;
    rel?: string;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className,
    icon,
    target,
    rel
}: ButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-500 overflow-hidden group";

    const variants = {
        primary: cn(
            "px-8 py-4 text-base rounded-2xl",
            "text-black",
            // Solid gold with subtle gradient
            "bg-gradient-to-br from-[#FFD700] via-accent-primary to-[#DAA520]",
            // Animated gradient border
            "before:absolute before:inset-0 before:-z-10 before:m-[-2px] before:rounded-2xl",
            "before:bg-gradient-to-r before:from-accent-primary before:via-[#FFD700] before:to-accent-primary",
            "before:bg-[length:200%_100%] before:animate-shimmer",
            // Neon glow effect
            "shadow-[0_0_20px_rgba(242,193,79,0.3),0_0_40px_rgba(242,193,79,0.1)]",
            "hover:shadow-[0_0_30px_rgba(242,193,79,0.5),0_0_60px_rgba(242,193,79,0.2),0_0_80px_rgba(242,193,79,0.1)]",
            // Smooth lift
            "hover:-translate-y-0.5",
            "active:translate-y-0 active:scale-[0.98]",
            // Highlight stripe
            "after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent"
        ),
        secondary: cn(
            "px-8 py-4 text-base rounded-2xl",
            "text-white",
            // Dark glass with border
            "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
            "backdrop-blur-xl",
            // Animated border gradient
            "before:absolute before:inset-0 before:-z-10 before:m-[-1px] before:rounded-2xl",
            "before:bg-gradient-to-r before:from-white/40 before:via-white/20 before:to-white/40",
            "before:opacity-80",
            // Minimal glow
            "shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            "hover:shadow-[0_0_25px_rgba(255,255,255,0.2),0_0_50px_rgba(255,255,255,0.1)]",
            "hover:before:opacity-100",
            // Smooth interactions
            "hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/5",
            "active:translate-y-0 active:scale-[0.98]",
            // Inner glow line
            "after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent"
        ),
        ghost: cn(
            "px-6 py-3 text-sm rounded-xl",
            "text-text-secondary hover:text-white",
            "hover:bg-white/5",
            "transition-all duration-300"
        )
    };

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2.5 font-semibold tracking-wide">
                {children}
                {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
            </span>
        </>
    );

    const classes = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={classes} target={target} rel={rel}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {content}
        </button>
    );
}
