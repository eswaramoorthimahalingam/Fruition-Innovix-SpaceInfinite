import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const policyPages = [
  {
    title: "Privacy Policy",
    href: "/policies/privacy-policy",
    description: "How personal information is handled and protected.",
  },
  {
    title: "Terms and conditions",
    href: "/policies/terms-and-conditions",
    description: "The rules that govern use of the site and services.",
  },
  {
    title: "Refund & Cancellation Policy",
    href: "/policies/refund-cancellation-policy",
    description: "The refund and cancellation approach for service work.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Policies"
        title="The policy area stays easy to find"
        lead="The navbar includes a policies branch, so this page keeps the legal basics visible and accessible."
        primaryCta={{ label: "Privacy policy", href: "/policies/privacy-policy" }}
        secondaryCta={{ label: "Contact us", href: "/contact#enquiry" }}
        asideLabel="Policy set"
        asideTitle="Privacy, terms, and refund guidance"
        asideText="This keeps the top-level policy links organized without turning the page into a wall of text."
      />

      <SectionBand
        eyebrow="Documents"
        title="Open the policy that matters"
        description="These links map directly to the individual policy pages in the navbar."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {policyPages.map((policy) => (
            <Link
              key={policy.title}
              href={policy.href}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5 transition hover:border-[rgba(255,216,106,0.4)] hover:bg-[rgba(12,7,34,0.78)]"
            >
              <h3 className="text-lg font-semibold text-white">{policy.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {policy.description}
              </p>
            </Link>
          ))}
        </div>
      </SectionBand>
    </main>
  );
}
