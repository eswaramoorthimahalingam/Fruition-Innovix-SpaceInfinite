"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type HeroBullet = {
  title: string;
  description: string;
};

type SiteHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  bullets?: readonly HeroBullet[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  asideLabel?: string;
  asideTitle?: string;
  asideText?: string;
  asideContent?: ReactNode;
};

export const SiteHero = ({
  eyebrow,
  title,
  lead,
  bullets,
  primaryCta,
  secondaryCta,
  asideLabel,
  asideTitle,
  asideText,
  asideContent,
}: SiteHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#f6b32d]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            {lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="button-primary rounded-lg px-5 py-3 text-sm font-medium text-white"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-lg border border-[rgba(245,179,45,0.38)] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[rgba(255,216,106,0.55)] hover:text-white"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        <aside className="fi-panel-strong rounded-2xl border p-6">
          {(asideLabel || asideTitle || asideText) && (
            <div className="space-y-3">
              {asideLabel && (
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#f6b32d]">
                  {asideLabel}
                </p>
              )}
              {asideTitle && (
                <h2 className="text-2xl font-semibold text-white">
                  {asideTitle}
                </h2>
              )}
              {asideText && <p className="text-sm leading-7 text-gray-300">{asideText}</p>}
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <div className="mt-6 space-y-4">
              {bullets.map((bullet) => (
                <div
                  key={bullet.title}
                  className="rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {bullet.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {bullet.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {asideContent}
        </aside>
      </div>
    </section>
  );
};
