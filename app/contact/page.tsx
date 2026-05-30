import Link from "next/link";

import { SectionBand } from "@/components/main/section-band";
import { SiteHero } from "@/components/main/site-hero";

const contacts = [
  {
    title: "Address",
    value:
      "56-57, Sheshadri Colony, Kila Maidan Road, Behind Police Petrol Pump, Indore, Madhya Pradesh 452006",
  },
  {
    title: "Digital Marketing",
    value: "+91 6232 949 923",
  },
  {
    title: "E-Commerce",
    value: "+91 7225 057 898",
  },
  {
    title: "Seller enquiry",
    value: "care@evitamin.in",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full pb-20">
      <SiteHero
        eyebrow="Contact"
        title="Reach the team for business, seller, or project enquiries"
        lead="The reference pages repeatedly surface the same contact details, so this page keeps the enquiry path easy to find."
        primaryCta={{ label: "Open enquiry", href: "#enquiry" }}
        secondaryCta={{ label: "View services", href: "/services" }}
        asideLabel="Quick contact"
        asideTitle="A simple place to start"
        asideText="If you are ready to talk about marketplace support, web work, or digital marketing, use the enquiry block below."
      />

      <SectionBand
        id="enquiry"
        eyebrow="Business enquiry"
        title="Primary contact details"
        description="These are the contact details highlighted across the reference site."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((contact) => (
            <article
              key={contact.title}
              className="rounded-2xl border border-white/10 bg-[rgba(7,4,24,0.72)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{contact.value}</p>
            </article>
          ))}
        </div>
      </SectionBand>

      <SectionBand
        eyebrow="Next move"
        title="Jump from contact to service context"
        description="The menu is easiest to use when a contact page can take you back to the exact service you want."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/services/e-commerce-marketing"
            className="rounded-lg border border-[rgba(245,179,45,0.38)] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[rgba(255,216,106,0.55)] hover:text-white"
          >
            E-commerce marketing
          </Link>
          <Link
            href="/services/web-development"
            className="rounded-lg border border-[rgba(245,179,45,0.38)] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[rgba(255,216,106,0.55)] hover:text-white"
          >
            Web development
          </Link>
          <Link
            href="/services/digital-marketing"
            className="rounded-lg border border-[rgba(245,179,45,0.38)] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[rgba(255,216,106,0.55)] hover:text-white"
          >
            Digital marketing
          </Link>
        </div>
      </SectionBand>
    </main>
  );
}
