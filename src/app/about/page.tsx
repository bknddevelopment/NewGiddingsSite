import React from "react";
import Image from "next/image";
import Link from "next/link";

// Navigation links matching Figma
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/newsletter", label: "Newsletter" },
];

// Values data - matching Figma layout (2 rows of 3)
// Row 1: Collaboration (send-to-back), Integrity (shield), Accountability (rank)
// Row 2: Equity (sort), Innovation (launch), Practical action (direction)
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

// Process steps - matching Figma
const processSteps = [
  "Understand your goals and challenges",
  "Study your context",
  "Build strategy with your team",
  "Support implementation and change management",
  "Measure progress and refine",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Header - exactly matching Figma */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white h-[99px]">
        <div className="flex items-center justify-between h-full px-[122px]">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Giddings Consulting Group"
              width={184}
              height={58}
              className="h-[58px] w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-[64px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#212121] font-bold text-[18px] leading-[32px] tracking-[-0.36px] hover:text-[#3490f3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section - exactly matching Figma */}
      <section className="relative h-[660px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.jpg"
            alt="About hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Navy color overlay */}
          <div className="absolute inset-0 bg-[#1d1f4e] mix-blend-color" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[rgba(29,31,78,0.2)] mix-blend-multiply" />
        </div>

        {/* Gradient overlay from left */}
        <div className="absolute left-0 top-[99px] w-[1024px] h-[587px] bg-gradient-to-r from-[#1d1f4e] to-transparent z-10" />

        {/* Decorative Circles - exact positions from Figma */}
        <div className="absolute left-[-56px] top-[477px] w-[211px] h-[211px] rounded-full bg-[#3490f3] z-20" />
        <div className="absolute right-[-63px] top-[235px] w-[127px] h-[127px] rounded-full bg-[#fcba04] z-20" />
        <div className="absolute right-[90px] top-[151px] w-[51px] h-[51px] rounded-full bg-[#3490f3] z-20" />
        <div className="absolute right-[193px] top-[557px] w-[51px] h-[51px] rounded-full bg-[#964c2d] z-20" />

        {/* Hero Content */}
        <div className="relative z-30 pt-[262px] pl-[71px] max-w-[726px]">
          {/* Gold line */}
          <div className="flex items-center mb-6">
            <div className="w-[439px] h-[7px] bg-[#fcba04] ml-[190px]" />
          </div>

          <h1 className="text-[36px] font-bold text-white leading-[48px] tracking-[1.8px]">
            Giddings Consulting Group<br />
            is a social impact strategy firm based in Elizabeth, New Jersey.
          </h1>
        </div>
      </section>

      {/* White Content Area with rounded top */}
      <section className="relative -mt-[77px] z-40">
        <div className="bg-white rounded-t-[65px] pt-[51px]">
          {/* Who We Are Section */}
          <section className="px-[112px] mb-[64px]">
            <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] mb-[32px]">
              Who We Are
            </h2>
            <div className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] max-w-[1220px]">
              <p className="mb-4">
                We work with mission-driven organizations committed to equity, inclusion, and sustainable community outcomes.
              </p>
              <p>
                Our work spans strategic planning, governance, fundraising, leadership development, coalition building, and philanthropic advising.<br />
                The goal is simple. Help leaders deliver stronger results for the communities they serve.
              </p>
            </div>
          </section>

          {/* Our Founder Section - Image on LEFT, Text on RIGHT per Figma */}
          <section className="px-[110px] mb-[80px]">
            <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] mb-[32px]">
              Our Founder
            </h2>
            <div className="flex gap-[34px]">
              {/* Founder Image - LEFT side */}
              <div className="relative w-[648px] h-[314px] rounded-[32px] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/founder-image.jpg"
                  alt="Drew Giddings"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Founder Bio - RIGHT side */}
              <div className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] w-[540px]">
                <p className="mb-4">
                  Drew Giddings is a strategist, philanthropic advisor, and executive coach with more than two decades of experience across the nonprofit, philanthropic, and public sectors.
                </p>
                <p className="mb-4">
                  He has supported more than 100 organizations. he advised leaders through major transitions. he strengthened boards.<br />
                  he built fundraising models. he expanded partnerships<br />
                  across sectors, working on climate resilience, economic inclusion, and community development.
                </p>
                <p>
                  Her work sits at the intersection of strategy, equity,<br />
                  and systems change.
                </p>
              </div>
            </div>

            {/* Decorative lines with arrows pointing RIGHT - matching Figma */}
            {/* Two stacked lines with matching color triangles at the end */}
            <div className="relative mt-[80px]">
              {/* Blue line with blue triangle */}
              <div className="flex items-center">
                <div className="w-[1332px] h-[16px] bg-[#3490f3]" />
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#3490f3] -ml-[1px]" />
              </div>
              {/* Spacer between lines */}
              <div className="h-[64px]" />
              {/* Navy line with navy triangle */}
              <div className="flex items-center">
                <div className="w-[1027px] h-[16px] bg-[#1d1f4e]" />
                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#1d1f4e] -ml-[1px]" />
              </div>
            </div>
          </section>

          {/* What Guides Us Section - Gray background */}
          <section className="bg-[rgba(235,235,235,0.5)] py-[54px]">
            <div className="px-[114px]">
              <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px] mb-[32px]">
                What Guides Us
              </h2>

              <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] mb-[32px] max-w-[1230px]">
                We believe strong organizations lead to stronger communities.<br />
                We build strategy that reflects lived experience and local wisdom.<br />
                We respect your context. We support your values. We help you lead with clarity.
              </p>

              {/* Gold divider */}
              <div className="w-[1220px] h-[2px] bg-[#fcba04] mb-[32px]" />

              <p className="text-[18px] font-bold text-[#212121] leading-[26px] tracking-[-0.36px] mb-[74px]">
                Our Values:
              </p>

              {/* Values Grid - Top Row */}
              <div className="flex justify-center gap-[271px] mb-[64px]">
                {valuesTop.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[223px]">
                    <div className="w-[112px] h-[112px] rounded-full bg-[#3490f3] flex items-center justify-center mb-[25px]">
                      <Image src={value.icon} alt="" width={62} height={62} className="brightness-0 invert" />
                    </div>
                    <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px]">
                      {value.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Values Grid - Bottom Row */}
              <div className="flex justify-center gap-[271px]">
                {valuesBottom.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[223px]">
                    <div className="w-[112px] h-[112px] rounded-full bg-[#3490f3] flex items-center justify-center mb-[25px]">
                      <Image src={value.icon} alt="" width={62} height={62} className="brightness-0 invert" />
                    </div>
                    <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px]">
                      {value.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How We Work Section - Navy Background */}
          <section className="bg-[#1d1f4e] relative py-[65px]">
            {/* Decorative circles */}
            <div className="absolute right-[-63px] top-[194px] w-[127px] h-[127px] rounded-full bg-[#fcba04]" />
            <div className="absolute right-[135px] top-[50px] w-[61px] h-[61px] rounded-full bg-[#3490f3]" />
            <div className="absolute left-[-73px] top-[258px] w-[211px] h-[105px] rounded-full bg-[#964c2d]" />
            {/* Large blue ellipse at bottom right */}
            <div className="absolute right-[-77px] bottom-[-100px] w-[437px] h-[219px] rounded-full bg-[#3490f3] opacity-50" />

            <div className="text-center mb-[64px]">
              <h2 className="text-[28px] font-bold text-white leading-[32px] tracking-[-0.56px] mb-[32px]">
                How We Work
              </h2>

              {/* Gold divider */}
              <div className="w-[474px] h-[2px] bg-[#fcba04] mx-auto mb-[60px]" />

              {/* Bullet list - Regular weight per Figma */}
              <div className="text-[28px] text-white leading-[81px] text-center">
                <ul className="list-disc list-inside">
                  <li>You get direct engagement from senior leadership.</li>
                  <li>You get tools that support execution.</li>
                  <li>You get plans built around real conditions, not abstract theory.</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-[93px]">
              <h2 className="text-[28px] font-bold text-white leading-[32px] tracking-[-0.56px] mb-[32px]">
                Our Process
              </h2>

              {/* Gold divider */}
              <div className="w-[474px] h-[2px] bg-[#fcba04] mx-auto mb-[32px]" />
            </div>

            {/* Process Steps */}
            <div className="px-[110px] space-y-[16px] relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-[116px] py-[23px] px-[83px]">
                  <p className="font-bold text-[18px] text-[#212121] text-center leading-[26px] tracking-[-0.36px]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <p className="text-[28px] text-white leading-[81px] text-center mt-[54px] max-w-[1220px] mx-auto relative z-10">
              This approach strengthens culture, decision-making, and long-term sustainability.
            </p>
          </section>

          {/* Our Reach Section */}
          <section className="py-[64px] px-[110px]">
            <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] mb-[32px]">
              Our Reach
            </h2>

            {/* Gold divider */}
            <div className="w-[1220px] h-[2px] bg-[#fcba04] mb-[32px]" />

            <ul className="text-[18px] font-bold text-[#212121] leading-[32px] list-disc list-inside space-y-0">
              <li>Our primary office is in Elizabeth, New Jersey.</li>
              <li>Our work extends across the African diaspora and global partners.</li>
              <li>Recent milestones include an expanded office, a refreshed brand, and membership in the Clinton Global Initiative.</li>
            </ul>
          </section>

          {/* Commitment to Emerging Leaders Section */}
          <section className="px-[116px] pb-[32px]">
            {/* Blue pill bar */}
            <div className="bg-[#3490f3] rounded-[116px] py-[23px] px-[83px] mb-[32px]">
              <p className="font-bold text-[28px] text-white text-center leading-[26px] tracking-[-0.56px]">
                Commitment to Emerging Leaders
              </p>
            </div>

            <p className="text-[18px] text-[#212121] leading-[26px] max-w-[1230px] mb-[64px]">
              We launched the <span className="font-bold">GoodTrouble Social Impact Apprenticeship Program</span> to support rising strategists and practitioners.<br />
              Apprentices support client work and gain experience in real-world problem-solving.
            </p>

            {/* CTA Cards */}
            <div className="flex">
              {/* CTA 1 - Brown */}
              <div className="bg-[#964c2d] w-[518px] h-[248px] flex flex-col items-center justify-center px-[97px]">
                <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                  Meet with<br />our team.
                </p>
                <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={43} height={43} />
              </div>

              {/* CTA 2 - Gold */}
              <div className="bg-[#fcba04] w-[406px] h-[248px] flex flex-col items-center justify-center px-[40px]">
                <p className="text-[26px] font-bold text-black text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                  Join our partner network.
                </p>
                <Image src="/images/icons/circle-arrow-right.svg" alt="" width={39} height={39} />
              </div>

              {/* CTA 3 - Blue */}
              <div className="bg-[#3490f3] w-[518px] h-[248px] flex flex-col items-center justify-center px-[40px]">
                <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                  Sign up for updates and insights.
                </p>
                <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={39} height={39} />
              </div>
            </div>
          </section>

          {/* Footer placeholder area */}
          <section className="bg-[#d9d9d9] h-[262px] flex items-center justify-center">
            <p className="text-[36px] font-bold text-[#ff00d9] text-center leading-[48px]">
              [standard footer/sitemap including social icon drivers]
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
