"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
    const layer1Ref = useRef<HTMLDivElement>(null);
    const layer2Ref = useRef<HTMLDivElement>(null);
    const layer3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPercent = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const yPercent = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

            // Parallax effect: layers move opposite to mouse at different speeds
            if (layer1Ref.current) {
                layer1Ref.current.style.transform = `translate(${xPercent * -15}px, ${yPercent * -15}px)`;
            }
            if (layer2Ref.current) {
                layer2Ref.current.style.transform = `translate(${xPercent * -30}px, ${yPercent * -30}px)`;
            }
            if (layer3Ref.current) {
                layer3Ref.current.style.transform = `translate(${xPercent * -50}px, ${yPercent * -50}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Generate star positions
    const generateStars = (count: number, seed: number) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            const x = ((i * 137.508 + seed) % 100); // Golden angle distribution
            const y = ((i * 222.492 + seed * 2) % 100);
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.5 + 0.3;
            stars.push({ x, y, size, opacity });
        }
        return stars;
    };

    const stars1 = generateStars(50, 1);
    const stars2 = generateStars(30, 2);
    const stars3 = generateStars(20, 3);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050814]">
            {/* Deep space gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,32,56,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(13,16,36,0.4),transparent_50%)]" />

            {/* Star Layer 1 - Closest (moves most) */}
            <div
                ref={layer1Ref}
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{ willChange: 'transform' }}
            >
                {stars1.map((star, i) => (
                    <div
                        key={`l1-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,${star.opacity * 0.5})`
                        }}
                    />
                ))}
            </div>

            {/* Star Layer 2 - Middle */}
            <div
                ref={layer2Ref}
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{ willChange: 'transform' }}
            >
                {stars2.map((star, i) => (
                    <div
                        key={`l2-${i}`}
                        className="absolute rounded-full bg-accent-primary"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size * 1.5}px`,
                            height: `${star.size * 1.5}px`,
                            opacity: star.opacity * 0.6,
                            boxShadow: `0 0 ${star.size * 3}px rgba(242,193,79,${star.opacity * 0.3})`
                        }}
                    />
                ))}
            </div>

            {/* Star Layer 3 - Farthest (moves least) */}
            <div
                ref={layer3Ref}
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{ willChange: 'transform' }}
            >
                {stars3.map((star, i) => (
                    <div
                        key={`l3-${i}`}
                        className="absolute rounded-full bg-accent-secondary"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size * 2}px`,
                            height: `${star.size * 2}px`,
                            opacity: star.opacity * 0.4,
                            boxShadow: `0 0 ${star.size * 4}px rgba(123,97,255,${star.opacity * 0.2})`
                        }}
                    />
                ))}
            </div>

            {/* Nebula clouds for depth */}
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent-primary/5 blur-[100px]" />
            <div className="absolute bottom-[10%] left-[15%] w-[35%] h-[35%] rounded-full bg-accent-secondary/5 blur-[120px]" />
        </div>
    );
}
