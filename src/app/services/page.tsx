import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";

// Service cards data - 5 cards with different header colors
const serviceCards = [
  {
    headerColor: "bg-navy",
    textColor: "text-white",
    title: "Strategic and\nOrganizational Planning",
    description: "Develop clear, actionable strategies that align your team, focus resources, and drive measurable impact.",
    deliverables: [
      "Strategic plan development",
      "Organizational assessments",
      "Theory of change development",
      "Implementation roadmaps",
    ],
    outcomes: [
      "Aligned leadership",
      "Clear priorities",
      "Focused execution",
    ],
  },
  {
    headerColor: "bg-blue",
    textColor: "text-white",
    title: "Board Development\nand Governance",
    description: "Build an engaged, effective board that provides strategic leadership and oversight.",
    deliverables: [
      "Board assessments and retreats",
      "Governance policy development",
      "Board recruitment strategies",
      "Board training and development",
      "Committee structure optimization",
    ],
    outcomes: [
      "Stronger oversight",
      "Better decisions",
      "Clear roles",
    ],
  },
  {
    headerColor: "bg-brown",
    textColor: "text-white",
    title: "Leadership and\nExecutive Development",
    description: "Strengthen leadership capacity across your organization with coaching and development.",
    deliverables: [
      "Executive coaching",
      "Leadership team development",
      "Succession planning",
      "Management training",
    ],
    outcomes: [
      "Confident leaders",
      "Strong teams",
      "Sustainable growth",
    ],
  },
  {
    headerColor: "bg-gold",
    textColor: "text-dark",
    title: "Fund Development and\nPhilanthropic Strategy",
    description: "Build sustainable funding systems and deepen donor relationships for lasting impact.",
    deliverables: [
      "Fundraising strategy development",
      "Donor cultivation plans",
      "Case for support development",
      "Campaign planning and execution",
    ],
    outcomes: [
      "Sustainable funding",
      "Deeper relationships",
      "Stronger systems",
    ],
  },
  {
    headerColor: "bg-navy",
    textColor: "text-white",
    title: "Social Impact Strategy\nand Partnership Building",
    description: "Design strategies that create meaningful community impact and build strong coalitions.",
    deliverables: [
      "Coalition building",
      "Partnership development",
      "Community engagement strategies",
      "Impact measurement frameworks",
    ],
    outcomes: [
      "Stronger partnerships",
      "Greater impact",
      "Aligned action",
    ],
  },
];

// How We Work statements - 6 pill bars
const howWeWorkStatements = [
  "Retreat facilitation",
  "Strategic communications support",
  "Philanthropic advising for funders",
  "Resource development roadmaps",
  "Organizational health scans",
  "Climate justice and economic inclusion strategy",
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero-bg.jpg")}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy mix-blend-color" />
          <div className="absolute inset-0 bg-navy/20" style={{ mixBlendMode: 'multiply' }} />
        </div>

        {/* Gradient overlay from left */}
        <div
          className="absolute inset-y-0 left-0 w-[70%]"
          style={{ background: 'linear-gradient(90deg, #1D1F4E 0%, rgba(255, 255, 255, 0) 98.21%)' }}
        />

        {/* Decorative Circles */}
        <div className="absolute w-[127px] h-[127px] -right-16 top-[140px] rounded-full bg-gold" />
        <div className="absolute w-[51px] h-[51px] right-[60px] top-[50px] rounded-full bg-blue" />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <div className="max-w-[726px]">
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              How we <span className="relative inline-block">support your mission<span className="absolute left-0 -bottom-1 w-full h-[7px] bg-gold"></span></span>
            </h1>
          </div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Intro text */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <p className="max-w-[1220px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-4">
            You get targeted support across strategy, leadership, governance, and fundraising.<br />
            Each engagement adapts to your needs and builds your capacity for lasting impact.
          </p>

          {/* Gold divider */}
          <div className="w-[300px] h-0 mx-auto border-[2px] border-gold mb-12" />
        </div>

        {/* ============ SERVICE CARDS SECTION ============ */}
        <section className="py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {serviceCards.slice(0, 3).map((card, index) => (
                <ServiceCard key={index} {...card} />
              ))}
            </div>

            {/* Second row - 2 cards aligned left */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.slice(3, 5).map((card, index) => (
                <ServiceCard key={index + 3} {...card} />
              ))}
              {/* Empty third column on large screens to maintain grid alignment */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ============ OUR IMPACT SECTION - Navy Background ============ */}
        <section className="w-full bg-navy relative py-16 overflow-hidden mt-16">
          {/* Decorative circles */}
          <div className="absolute w-[127px] h-[127px] -right-16 top-[100px] rounded-full bg-gold" />
          <div className="absolute w-[61px] h-[61px] right-[100px] top-[20px] rounded-full bg-gold" />
          <div className="absolute w-[211px] h-[105px] -left-[60px] top-[200px] rounded-full bg-blue" />
          <div className="absolute w-[437px] h-[219px] right-0 -bottom-[100px] rounded-full bg-blue opacity-50" />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                How We Work
              </h2>

              {/* Gold divider */}
              <div className="w-[474px] max-w-full h-0 border-[2px] border-gold mx-auto" />
            </div>

            {/* How We Work statements - 6 white pill bars */}
            <div className="space-y-4">
              {howWeWorkStatements.map((statement, index) => (
                <div key={index} className="bg-white rounded-[116px] py-6 px-8 lg:px-20">
                  <p className="font-bold text-[18px] text-dark text-center leading-[26px] tracking-[-0.02em]">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* White bar separator */}
        <div className="w-full h-[16px] bg-white" />

        {/* ============ 3 CTA CARDS ============ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {/* Brown CTA */}
          <Link href="/contact" className="bg-brown h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[323px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Schedule a<br />strategy session.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={43} height={43} />
          </Link>

          {/* Gold CTA */}
          <Link href="#" className="bg-gold h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[327px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-black mb-5">
              Request<br />a proposal.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right.svg")} alt="" width={39} height={39} />
          </Link>

          {/* Blue CTA */}
          <Link href="#" className="bg-blue h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[311px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Download our<br />services overview
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={39} height={39} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Service Card Component
function ServiceCard({
  headerColor,
  textColor,
  title,
  description,
  deliverables,
  outcomes,
}: {
  headerColor: string;
  textColor: string;
  title: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
}) {
  return (
    <div className="flex flex-col">
      {/* Colored header */}
      <div className={`${headerColor} rounded-t-[32px] h-[108px] flex items-center justify-center px-6`}>
        <p className={`font-bold text-[24px] leading-[36px] text-center whitespace-pre-line ${textColor}`}>
          {title}
        </p>
      </div>

      {/* Gray content area */}
      <div className="bg-gray-100 rounded-b-[32px] p-8 flex-1">
        {/* Description */}
        <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-6">
          {description}
        </p>

        {/* Black divider */}
        <div className="w-full h-0 border-[2px] border-dark mb-6" />

        {/* Deliverables */}
        <div className="mb-6">
          <p className="font-bold text-[18px] leading-[28px] text-dark mb-2">What you get:</p>
          <ul className="space-y-1">
            {deliverables.map((item, index) => (
              <li key={index} className="font-bold text-[18px] leading-[28px] text-dark">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div>
          <p className="font-bold text-[18px] leading-[28px] text-dark mb-2">Outcomes:</p>
          <ul className="space-y-1">
            {outcomes.map((item, index) => (
              <li key={index} className="font-bold text-[18px] leading-[28px] text-dark">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
