import { HeroSection } from "@/components/sections/home/HeroSection";
import { TokenSnapshot } from "@/components/sections/home/TokenSnapshot";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
      <HeroSection />
      <TokenSnapshot />
    </div>
  );
}
