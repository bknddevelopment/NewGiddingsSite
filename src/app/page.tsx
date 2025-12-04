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

// Service data matching Figma exactly
const services = [
  { icon: "/images/icons/document.svg", title: "Strategic and\nOrganizational Planning" },
  { icon: "/images/icons/flag.svg", title: "Board Development\nand Governance" },
  { icon: "/images/icons/crown.svg", title: "Leadership and\nExecutive Development" },
  { icon: "/images/icons/receipt.svg", title: "Fund Development and Philanthropic Strategy" },
  { icon: "/images/icons/favorite.svg", title: "Social Impact Strategy and Partnership Building" },
];

// Why work with us stats - matching Figma
const whyWorkWithUs = [
  "More than 20 years of experience across 100 organizations",
  "Millions in philanthropic revenue supported",
  "Work across the United States and the African diaspora",
  "Deep expertise in equity, climate resilience, economic inclusion, and community transformation",
  "A consistent track record helping leaders build stronger systems and better results",
];

// Approach steps with images - matching Figma
const approachSteps = [
  { image: "/images/approach-1.jpg", label: "Listen", color: "navy" },
  { image: "/images/approach-2.jpg", label: "Assess", color: "brown" },
  { image: "/images/approach-3.jpg", label: "Build Strategy", color: "blue" },
  { image: "/images/approach-4.jpg", label: "Strengthen Leadership", color: "gold" },
  { image: "/images/approach-5.jpg", label: "Support Implementation", color: "gray" },
  { image: "/images/approach-6.jpg", label: "Measure Progress", color: "navy" },
];

// Who we serve - matching Figma layout
const whoWeServeTop = [
  { icon: "/images/icons/document.svg", label: "Schools and\nEducational Institutions" },
  { icon: "/images/icons/home.svg", label: "Foundations and Philanthropic Entities" },
  { icon: "/images/icons/heart-rate.svg", label: "Faith-based Organizations" },
  { icon: "/images/icons/group.svg", label: "Community-based Nonprofits" },
];

const whoWeServeBottom = [
  { icon: "/images/icons/megaphone.svg", label: "Social Movements\nand Coalitions" },
  { icon: "/images/icons/scales.svg", label: "Government Agencies" },
  { icon: "/images/icons/earth.svg", label: "Networks working in climate, equity, economic justice, and community resilience" },
];

// Impact stats - matching Figma
const impactStats = [
  { number: "100+", label: "Organizations Served" },
  { number: "Millions", label: "Leveraged to strengthen programs and communities" },
  { number: "Dozens", label: "of boards received training" },
  { number: "Strategic", label: "Strategic fundraising frameworks built for local, national,\nand global organizations" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
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
                className="text-[#212121] font-bold text-[18px] leading-[40.96px] tracking-[-0.36px] hover:text-[#3490f3] transition-colors"
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
            src="/images/hero-bg.jpg"
            alt="Hero background"
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
          {/* Gold lines */}
          <div className="flex items-center gap-[110px] mb-6">
            <div className="w-[124px] h-[7px] bg-[#fcba04]" />
            <div className="w-[382px] h-[7px] bg-[#fcba04]" />
          </div>

          <h1 className="text-[36px] font-bold text-white leading-[48px] tracking-[1.8px]">
            Giddings Consulting Group strengthens organizations working for equity and community impact.
          </h1>
        </div>
      </section>

      {/* White Content Area with rounded top */}
      <section className="relative -mt-[77px] z-40">
        <div className="bg-white rounded-t-[65px] pt-[51px]">
          {/* Mission Statement */}
          <div className="text-center px-6 mb-[45px]">
            <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] max-w-[782px] mx-auto">
              You want clarity. Strong leadership. Sustainable funding.<br />
              We help you build the systems, partnerships, and strategy to move your mission forward.
            </p>
            {/* Gold divider */}
            <div className="w-[300.5px] h-[2px] bg-[#fcba04] mx-auto mt-[43px]" />
          </div>

          {/* What We Do Section */}
          <section className="bg-[rgba(235,235,235,0.5)] py-[64px]">
            <div className="max-w-[1440px] mx-auto px-[112px]">
              <div className="flex items-center gap-[89px] mb-[32px]">
                <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px]">
                  What We Do
                </h2>
                <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
              </div>

              <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] mb-[68px] max-w-[885px]">
                You get support across strategy, leadership, governance, and fundraising.<br />
                You leave with aligned teams. Better decisions. Clear priorities. A stronger organization.
              </p>

              {/* Services Grid */}
              <div className="flex justify-between">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[223px]">
                    <div className="w-[112px] h-[112px] rounded-full bg-[#3490f3] flex items-center justify-center mb-[25px]">
                      <Image src={service.icon} alt="" width={62} height={62} className="brightness-0 invert" />
                    </div>
                    <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] whitespace-pre-line">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Organizations Work With Us */}
          <section className="py-[65px] bg-white">
            <div className="max-w-[1440px] mx-auto px-[112px]">
              <div className="flex items-center gap-[89px] mb-[32px]">
                <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px]">
                  Why Organizations Work With Us
                </h2>
                <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
              </div>

              <div className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] mb-[32px] max-w-[1230px]">
                <p className="mb-4">
                  The social sector faces complex pressure. More demand. Limited resources. Boards needing direction.<br />
                  Fundraising stuck in short cycles. Leaders stretched thin. You need practical solutions that increase alignment and impact.
                </p>
                <p className="font-bold">We bring:</p>
              </div>

              {/* Stats Bars */}
              <div className="space-y-[16px]">
                {whyWorkWithUs.map((stat, index) => (
                  <div key={index} className="bg-[rgba(235,235,235,0.5)] rounded-[116px] py-[23px] px-[83px]">
                    <p className="font-bold text-[18px] text-[#212121] text-center leading-[26px] tracking-[-0.36px]">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gold divider */}
              <div className="w-full h-[2px] bg-[#fcba04] mt-[64px] mb-[32px]" />

              <p className="text-[18px] font-bold text-[#212121] leading-[26px] tracking-[-0.36px]">
                You get simple steps. Straight talk. Measurable outcomes.
              </p>
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="py-[32px] bg-white">
            <div className="max-w-[1440px] mx-auto px-[112px]">
              <div className="flex items-center gap-[111px] mb-[32px]">
                <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px]">
                  Our Approach
                </h2>
                <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
              </div>

              {/* Approach Grid - 2 rows of 3 */}
              <div className="grid grid-cols-3 gap-x-[31px] gap-y-[79px]">
                {approachSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="relative h-[214px] w-[386px] rounded-[32px] overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.label}
                        fill
                        className="object-cover"
                      />
                      {/* Color overlay based on step */}
                      <div className={`absolute inset-0 mix-blend-color ${
                        step.color === 'navy' ? 'bg-[#1d1f4e]' :
                        step.color === 'brown' ? 'bg-[#964c2d]' :
                        step.color === 'blue' ? 'bg-[#3490f3]' :
                        step.color === 'gold' ? 'bg-[#fcba04]' :
                        'bg-[#ebebeb]'
                      } ${step.color === 'gold' ? 'opacity-70' : step.color === 'gray' ? 'mix-blend-saturation' : 'opacity-90'}`} />
                    </div>
                    <p className="text-[18px] text-[#212121] text-center leading-[26px] tracking-[-0.36px] mt-[21px]">
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who We Serve Section */}
          <section className="relative">
            {/* Navy header bar */}
            <div className="bg-[#1d1f4e] h-[150px] flex items-center px-[112px]">
              <h2 className="text-[28px] font-bold text-white leading-[32px] tracking-[-0.56px]">
                Who We Serve
              </h2>
              <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={32} height={32} className="ml-[7px]" />
            </div>

            {/* Blue section */}
            <div className="bg-[#3490f3] pt-[226px] pb-[108px] px-[112px]">
              {/* Top row - 4 items */}
              <div className="flex justify-between mb-[132px]">
                {whoWeServeTop.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[235px]">
                    <div className="w-[112px] h-[112px] flex items-center justify-center mb-[24px]">
                      <Image src={item.icon} alt="" width={112} height={112} className="brightness-0 invert" />
                    </div>
                    <p className="text-[18px] font-bold text-white leading-[26px] whitespace-pre-line">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom row - 3 items centered */}
              <div className="flex justify-center gap-[96px]">
                {whoWeServeBottom.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[235px]">
                    <div className="w-[112px] h-[112px] flex items-center justify-center mb-[24px]">
                      <Image src={item.icon} alt="" width={112} height={112} className="brightness-0 invert" />
                    </div>
                    <p className={`text-[18px] font-bold text-white leading-[26px] ${index === 2 ? 'max-w-[301px]' : ''}`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Snapshot Section */}
          <section className="py-[64px] bg-white">
            <div className="max-w-[1440px] mx-auto px-[112px]">
              <div className="flex items-center gap-[149px] mb-[32px]">
                <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px]">
                  Impact Snapshot
                </h2>
                <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
              </div>

              <div className="flex gap-[348px]">
                {/* Left side - text and stats */}
                <div className="w-[694px]">
                  <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] mb-[76px]">
                    Having worked on the forefront of creating social change through community outreach and engagement – we know social change is hard. We don&apos;t believe in emphasizing the latest buzzwords, providing quick answers or taking short cuts, because they don&apos;t foster social change. Instead, we provide individualized solutions based on the needs of the client and their constituency.
                  </p>

                  {/* Stats Grid - 2x2 */}
                  <div className="grid grid-cols-2 gap-x-[48px]">
                    {impactStats.map((stat, index) => (
                      <div key={index} className="border-t-[1.5px] border-[rgba(92,92,92,0.2)] pt-[24px] pb-[48px]">
                        <p className="text-[48px] font-bold text-[#212121] leading-[52px] tracking-[-0.96px] mb-[8px]">
                          {stat.number}
                        </p>
                        <p className="text-[18px] text-[#212121] leading-[24px] whitespace-pre-line">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - image */}
                <div className="relative w-[460px] h-[573px] rounded-[32px] overflow-hidden">
                  <Image
                    src="/images/impact-image.jpg"
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Initiative Section */}
          <section className="py-[32px] bg-white">
            <div className="max-w-[1440px] mx-auto px-[112px]">
              {/* Blue Featured Initiative Bar */}
              <div className="bg-[#3490f3] rounded-[116px] py-[23px] px-[83px] mb-[32px]">
                <p className="font-bold text-[28px] text-white text-center leading-[26px] tracking-[-0.56px]">
                  Featured Initiative
                </p>
              </div>

              {/* Carousel placeholder */}
              <div className="bg-[#d9d9d9] rounded-[32px] h-[359px] flex items-center justify-center mb-[32px]">
                <p className="text-[36px] font-bold text-[#ff00d9] text-center leading-[48px]">
                  [imagery showcasing apprenticeship program in action in a rotating carousel]
                </p>
              </div>

              {/* Program title and description */}
              <h3 className="text-[28px] font-bold text-[#212121] leading-[32px] mb-[16px]">
                GoodTrouble Social Impact Apprenticeship Program.
              </h3>
              <p className="text-[18px] text-[#212121] leading-[26px] mb-[64px]">
                Three emerging leaders. Real client work. Practical training in strategy, philanthropy, and community development.
              </p>

              {/* CTA Cards */}
              <div className="flex gap-0">
                {/* CTA 1 - Brown */}
                <div className="bg-[#964c2d] w-[518px] h-[248px] flex flex-col items-center justify-center px-[97px]">
                  <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                    Schedule a 60-minute strategy session.
                  </p>
                  <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={43} height={43} />
                </div>

                {/* CTA 2 - Gold */}
                <div className="bg-[#fcba04] w-[406px] h-[248px] flex flex-col items-center justify-center px-[40px]">
                  <p className="text-[26px] font-bold text-black text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                    Download our Board Governance Checklist.
                  </p>
                  <Image src="/images/icons/circle-arrow-right.svg" alt="" width={39} height={39} />
                </div>

                {/* CTA 3 - Blue */}
                <div className="bg-[#3490f3] w-[518px] h-[248px] flex flex-col items-center justify-center px-[103px]">
                  <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                    Join our mailing list for tools and insights.
                  </p>
                  <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={39} height={39} />
                </div>
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
