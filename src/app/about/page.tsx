import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";

// Values data - matching Figma layout (2 rows of 3)
const valuesTop = [
  { icon: "/images/icons/send-to-back.svg", label: "Collaboration" },
  { icon: "/images/icons/shield.svg", label: "Integrity" },
  { icon: "/images/icons/rank.svg", label: "Accountability" },
];

const valuesBottom = [
  { icon: "/images/icons/sort.svg", label: "Equity" },
  { icon: "/images/icons/launch.svg", label: "Innovation" },
  { icon: "/images/icons/direction.svg", label: "Practical action" },
];

// Process steps
const processSteps = [
  "Understand your goals and challenges",
  "Study your context",
  "Build strategy with your team",
  "Support implementation and change management",
  "Measure progress and refine",
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[560px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/about-hero-bg.jpg")}
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
        <div className="absolute w-[211px] h-[211px] -left-14 bottom-[20px] rounded-full bg-blue" />
        <div className="absolute w-[127px] h-[127px] -right-16 top-[140px] rounded-full bg-gold" />
        <div className="absolute w-[51px] h-[51px] right-[60px] top-[50px] rounded-full bg-blue" />
        <div className="absolute w-[51px] h-[51px] right-[200px] bottom-[20px] rounded-full bg-brown" />

        {/* Hero Content - positioned in center-left area */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <div className="max-w-[726px]">
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Giddings Consulting Group<br />
              is a social impact strategy firm<br />
              based in <span className="relative inline-block">Elizabeth, New Jersey.<span className="absolute left-0 -bottom-1 w-full h-[7px] bg-gold"></span></span>
            </h1>
          </div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Who We Are Section */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
              Who We Are
            </h2>
            <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark max-w-[1220px]">
              <p className="mb-4">
                We work with mission-driven organizations committed to equity, inclusion, and sustainable community outcomes.
              </p>
              <p>
                Our work spans strategic planning, governance, fundraising, leadership development, coalition building, and philanthropic advising.<br />
                The goal is simple. Help leaders deliver stronger results for the communities they serve.
              </p>
            </div>
          </div>
        </section>

        {/* Our Founder Section */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
              Our Founder
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Founder Image */}
              <div className="relative w-full lg:w-[648px] h-[450px] rounded-[32px] overflow-hidden flex-shrink-0">
                <Image
                  src={getImagePath("/images/founder-image.jpg")}
                  alt="Drew Giddings"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Founder Bio */}
              <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark lg:w-[540px]">
                <p className="mb-4">
                  Drew Giddings is a strategist, philanthropic advisor, and executive coach with more than two decades of experience across the nonprofit, philanthropic, and public sectors.
                </p>
                <p className="mb-4">
                  He has supported more than 100 organizations. He advised leaders through major transitions. He strengthened boards.<br />
                  He built fundraising models. He expanded partnerships<br />
                  across sectors, working on climate resilience, economic inclusion, and community development.
                </p>
                <p>
                  His work sits at the intersection of strategy, equity,<br />
                  and systems change.
                </p>
              </div>
            </div>

            {/* Decorative lines with arrows pointing RIGHT */}
            <div className="relative mt-20 overflow-hidden">
              {/* Blue arrow line */}
              <div className="flex items-center w-full lg:w-[92%]">
                <div className="flex-1 h-[16px] bg-blue" />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '40px solid #3490F3',
                  }}
                />
              </div>
              {/* Spacer */}
              <div className="h-[64px]" />
              {/* Navy arrow line */}
              <div className="flex items-center w-full lg:w-[71%]">
                <div className="flex-1 h-[16px] bg-navy" />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '40px solid #1D1F4E',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT GUIDES US SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] py-14">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
              What Guides Us
            </h2>

            <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8 max-w-[1230px]">
              We believe strong organizations lead to stronger communities.<br />
              We build strategy that reflects lived experience and local wisdom.<br />
              We respect your context. We support your values. We help you lead with clarity.
            </p>

            {/* Gold divider */}
            <div className="w-full max-w-[1220px] h-0 border-[2px] border-gold mb-8" />

            <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-16">
              Our Values:
            </p>

            {/* Values Grid - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-[271px] justify-items-center mb-16">
              {valuesTop.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center w-[223px]">
                  <div className="w-[112px] h-[112px] rounded-full bg-blue flex items-center justify-center mb-6">
                    <Image src={getImagePath(value.icon)} alt="" width={62} height={62} className="brightness-0 invert" />
                  </div>
                  <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                    {value.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Values Grid - Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-[271px] justify-items-center">
              {valuesBottom.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center w-[223px]">
                  <div className="w-[112px] h-[112px] rounded-full bg-blue flex items-center justify-center mb-6">
                    <Image src={getImagePath(value.icon)} alt="" width={62} height={62} className="brightness-0 invert" />
                  </div>
                  <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                    {value.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW WE WORK SECTION ============ */}
        <section className="w-full bg-navy relative py-16 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute w-[127px] h-[127px] -right-16 top-[194px] rounded-full bg-gold" />
          <div className="absolute w-[61px] h-[61px] right-[135px] top-[50px] rounded-full bg-blue" />
          <div className="absolute w-[211px] h-[105px] -left-[73px] top-[258px] rounded-full bg-brown" />
          <div className="absolute w-[437px] h-[219px] -right-[77px] -bottom-[100px] rounded-full bg-blue opacity-50" />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                How We Work
              </h2>

              {/* Gold divider */}
              <div className="w-[474px] h-0 border-[2px] border-gold mx-auto mb-12" />

              {/* Bullet list */}
              <div className="text-[24px] md:text-[28px] text-white leading-[60px] md:leading-[81px] text-center">
                <ul className="list-disc list-inside">
                  <li>You get direct engagement from senior leadership.</li>
                  <li>You get tools that support execution.</li>
                  <li>You get plans built around real conditions, not abstract theory.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-20">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                Our Process
              </h2>

              {/* Gold divider */}
              <div className="w-[474px] h-0 border-[2px] border-gold mx-auto mb-8" />
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-[116px] py-6 px-8 lg:px-20">
                  <p className="font-bold text-[18px] text-dark text-center leading-[26px] tracking-[-0.02em]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <p className="text-[24px] md:text-[28px] text-white leading-[60px] md:leading-[81px] text-center mt-14">
              This approach strengthens culture, decision-making, and long-term sustainability.
            </p>
          </div>
        </section>

        {/* Gold divider bar between navy section and Our Reach */}
        <div className="w-full h-[16px] bg-gold" />

        {/* ============ OUR REACH SECTION ============ */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
              Our Reach
            </h2>

            {/* Black divider */}
            <div className="w-full max-w-[1220px] h-0 border-[2px] border-dark mb-8" />

            <ul className="font-bold text-[18px] leading-[32px] text-dark list-disc list-inside space-y-0">
              <li>Our primary office is in Elizabeth, New Jersey.</li>
              <li>Our work extends across the African diaspora and global partners.</li>
              <li>Recent milestones include an expanded office, a refreshed brand, and membership in the Clinton Global Initiative.</li>
            </ul>
          </div>
        </section>

        {/* ============ COMMITMENT TO EMERGING LEADERS ============ */}
        <section className="pb-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Blue pill bar */}
            <div className="w-full max-w-[1220px] bg-blue rounded-[116px] py-6 px-8 mb-8">
              <p className="font-bold text-[24px] md:text-[28px] text-white text-center leading-[26px] tracking-[-0.02em]">
                Commitment to Emerging Leaders
              </p>
            </div>

            <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark max-w-[1230px] mb-16">
              We launched the <span className="font-bold">GoodTrouble Social Impact Apprenticeship Program</span> to support rising strategists and practitioners.<br />
              Apprentices support client work and gain experience in real-world problem-solving.
            </p>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {/* Brown CTA */}
          <Link href="/contact" className="bg-brown h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[323px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Meet with<br />our team.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={43} height={43} />
          </Link>

          {/* Gold CTA */}
          <Link href="#" className="bg-gold h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[327px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-black mb-5">
              Join our partner network.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right.svg")} alt="" width={39} height={39} />
          </Link>

          {/* Blue CTA */}
          <Link href="/newsletter" className="bg-blue h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[311px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Sign up for updates and insights.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={39} height={39} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
