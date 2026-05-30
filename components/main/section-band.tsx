import type { ReactNode } from "react";

type SectionBandProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export const SectionBand = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionBandProps) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#f6b32d]">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-7 text-gray-300">
              {description}
            </p>
          )}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
};
