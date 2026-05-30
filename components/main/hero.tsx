import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="about-me" className="relative flex flex-col h-full w-full">
      <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-85 bg-[radial-gradient(circle_at_top_center,rgba(255,201,78,0.8),rgba(255,201,78,0.18)_16%,transparent_32%),radial-gradient(circle_at_12%_50%,rgba(46,124,246,0.08),transparent_12%),radial-gradient(circle_at_82%_26%,rgba(255,201,78,0.26),transparent_24%)]" />

      <HeroContent />
    </section>
  );
};
