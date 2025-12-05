import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Services with icons
const services = [
  { icon: "/images/icons/document.svg", title: "Strategic and\nOrganizational Planning" },
  { icon: "/images/icons/flag.svg", title: "Board Development\nand Governance" },
  { icon: "/images/icons/crown.svg", title: "Leadership and\nExecutive Development" },
  { icon: "/images/icons/receipt.svg", title: "Fund Development and\nPhilanthropic Strategy" },
  { icon: "/images/icons/favorite.svg", title: "Social Impact Strategy\nand Partnership Building" },
];

// Why work with us - 5 pill bars
const whyWorkWithUs = [
  "More than 20 years of experience across 100 organizations",
  "Work across the United States and the African diaspora",
  "Millions in philanthropic revenue supported",
  "Deep expertise in equity, climate resilience, economic inclusion, and community transformation",
  "A consistent track record helping leaders build stronger systems and better results",
];

// Our Approach - 6 image cards
const approachSteps = [
  { image: "/images/approach-1.jpg", label: "Listen", color: "#1D1F4E", blend: "color" },
  { image: "/images/approach-2.jpg", label: "Assess", color: "#964C2D", blend: "color" },
  { image: "/images/approach-3.jpg", label: "Build Strategy", color: "#3490F3", blend: "color" },
  { image: "/images/approach-4.jpg", label: "Strengthen Leadership", color: "#FCBA04", blend: "color" },
  { image: "/images/approach-5.jpg", label: "Support Implementation", color: "#EBEBEB", blend: "saturation" },
  { image: "/images/approach-6.jpg", label: "Measure Progress", color: "#1D1F4E", blend: "color" },
];

// Who We Serve - top row (4 items)
const whoWeServeTop = [
  { icon: "/images/icons/educational.svg", label: "Schools and\nEducational Institutions" },
  { icon: "/images/icons/home.svg", label: "Foundations and\nPhilanthropic Entities" },
  { icon: "/images/icons/heart-rate.svg", label: "Faith-based\nOrganizations" },
  { icon: "/images/icons/group.svg", label: "Community-based\nNonprofits" },
];

// Who We Serve - bottom row (3 items)
const whoWeServeBottom = [
  { icon: "/images/icons/megaphone.svg", label: "Social Movements\nand Coalitions" },
  { icon: "/images/icons/scales.svg", label: "Government\nAgencies" },
  { icon: "/images/icons/earth.svg", label: "Networks working in\nclimate, equity, economic\njustice, and community\nresilience" },
];

// Impact stats
const impactStats = [
  { number: "100+", label: "Organizations Served" },
  { number: "Millions", label: "Leveraged to strengthen\nprograms and communities" },
  { number: "Dozens", label: "of boards received training" },
  { number: "Strategic", label: "Strategic fundraising frameworks\nbuilt for local, national,\nand global organizations" },
];

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[660px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-new.jpg"
            alt=""
            fill
            className="object-cover object-top"
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
        <div className="absolute w-[211px] h-[211px] -left-14 bottom-[100px] rounded-full bg-blue" />
        <div className="absolute w-[127px] h-[127px] -right-16 top-[140px] rounded-full bg-gold" />
        <div className="absolute w-[51px] h-[51px] right-[60px] top-[50px] rounded-full bg-blue" />
        <div className="absolute w-[51px] h-[51px] right-[200px] bottom-[100px] rounded-full bg-brown" />

        {/* Hero Text with gold underlines */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <div className="max-w-[726px]">
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Giddings Consulting Group strengthens organizations working
            </h1>
            {/* Line with gold underlines */}
            <div className="flex items-baseline gap-2 mt-1">
              <div className="relative">
                <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">for equity</span>
                <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-gold" />
              </div>
              <div className="relative">
                <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">and community</span>
                <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-gold" />
              </div>
              <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">impact.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Tagline */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <p className="max-w-[782px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
            You want clarity. Strong leadership. Sustainable funding.<br />
            We help you build the systems, partnerships, and strategy to move your mission forward.
          </p>

          {/* Gold divider */}
          <div className="w-[300px] h-0 mx-auto mt-8 border-[2px] border-gold" />
        </div>

        {/* ============ WHAT WE DO SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] mt-12 py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                What We Do
              </h2>
              <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
            </div>

            {/* Description */}
            <p className="max-w-[885px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-12">
              You get support across strategy, leadership, governance, and fundraising.<br />
              You leave with aligned teams. Better decisions. Clear priorities. A stronger organization.
            </p>

            {/* Services Grid - 5 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Blue circle with icon */}
                  <div className="w-[112px] h-[112px] rounded-full bg-blue flex items-center justify-center mb-6">
                    <Image src={service.icon} alt="" width={62} height={62} className="brightness-0 invert" />
                  </div>
                  {/* Label */}
                  <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark whitespace-pre-line">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY ORGANIZATIONS WORK WITH US ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                Why Organizations Work With Us
              </h2>
              <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
            </div>

            {/* Description */}
            <div className="max-w-[1230px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8">
              <p>
                The social sector faces complex pressure. More demand. Limited resources. Boards needing direction.<br />
                Fundraising stuck in short cycles. Leaders stretched thin. You need practical solutions that increase alignment and impact.
              </p>
              <p className="mt-4 font-bold">We bring:</p>
            </div>

            {/* 5 Pill Bars */}
            <div className="space-y-4 mb-8">
              {whyWorkWithUs.map((text, index) => (
                <div
                  key={index}
                  className="w-full max-w-[1220px] h-[72px] bg-[rgba(235,235,235,0.5)] rounded-[116px] flex items-center justify-center px-6"
                >
                  <p className="font-bold text-[16px] md:text-[18px] leading-[26px] text-center tracking-[-0.02em] text-dark">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Gold divider */}
            <div className="w-full max-w-[1220px] h-0 border-[2px] border-gold mb-8" />

            {/* Bottom text */}
            <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
              You get simple steps. Straight talk. Measurable outcomes.
            </p>
          </div>
        </section>

        {/* ============ OUR APPROACH ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                Our Approach
              </h2>
              <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
            </div>

            {/* 6 Image Cards - 2 rows of 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full max-w-[386px] h-[214px] rounded-[32px] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.label}
                      fill
                      className="object-cover"
                      style={{ opacity: step.blend === 'saturation' ? 0.9 : 0.9 }}
                    />
                    <div
                      className="absolute inset-0 rounded-[32px]"
                      style={{
                        backgroundColor: step.color,
                        mixBlendMode: step.blend as 'color' | 'saturation',
                      }}
                    />
                  </div>
                  <p className="mt-5 font-normal text-[18px] leading-[26px] text-center tracking-[-0.02em] text-dark">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHO WE SERVE ============ */}
        {/* Navy header bar */}
        <div className="w-full bg-navy py-12">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex items-center gap-4">
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white">
                Who We Serve
              </h2>
              <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={32} height={32} />
            </div>
          </div>
        </div>

        {/* Blue section */}
        <div className="w-full bg-blue py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Top row - 4 icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {whoWeServeTop.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[112px] h-[112px] flex items-center justify-center mb-6">
                    <Image src={item.icon} alt="" width={112} height={112} className="brightness-0 invert" />
                  </div>
                  <p className="font-bold text-[18px] leading-[26px] text-center text-white whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row - 3 icons centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
              {whoWeServeBottom.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[112px] h-[112px] flex items-center justify-center mb-6">
                    <Image src={item.icon} alt="" width={112} height={112} className="brightness-0 invert" />
                  </div>
                  <p className="font-bold text-[18px] leading-[26px] text-center text-white whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ IMPACT SNAPSHOT ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left content */}
              <div className="flex-1">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                    Impact Snapshot
                  </h2>
                  <Image src="/images/icons/circle-arrow-right.svg" alt="" width={32} height={32} />
                </div>

                {/* Description */}
                <p className="max-w-[694px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-12">
                  Having worked on the forefront of creating social change through community outreach and engagement – we know social change is hard. We don&apos;t believe in emphasizing the latest buzzwords, providing quick answers or taking short cuts, because they don&apos;t foster social change. Instead, we provide individualized solutions based on the needs of the client and their constituency.
                </p>

                {/* Stats Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-0 max-w-[630px]">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="border-t-[1.5px] border-[rgba(92,92,92,0.2)] pt-6 pb-12">
                      <p className="font-bold text-[48px] leading-[52px] tracking-[-0.02em] text-dark">
                        {stat.number}
                      </p>
                      <p className="mt-2 font-normal text-[18px] leading-[24px] text-dark whitespace-pre-line">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full lg:w-[460px] h-[400px] lg:h-[573px] rounded-[32px] overflow-hidden flex-shrink-0">
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

        {/* Gold and Navy decorative lines with arrow points */}
        <div className="relative w-full h-[120px] overflow-hidden">
          {/* Gold arrow line */}
          <div className="absolute left-0 top-[20px] w-[90%] flex items-center">
            <div className="flex-1 h-[16px] bg-gold" />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '32px solid #FCBA04',
              }}
            />
          </div>
          {/* Navy arrow line */}
          <div className="absolute left-0 top-[65px] w-[75%] flex items-center">
            <div className="flex-1 h-[16px] bg-navy" />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '32px solid #1D1F4E',
              }}
            />
          </div>
        </div>

        {/* ============ FEATURED INITIATIVE ============ */}
        <section className="w-full py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Blue pill bar */}
            <div className="w-full max-w-[1220px] h-[72px] bg-blue rounded-[116px] flex items-center justify-center mb-8">
              <p className="font-bold text-[28px] leading-[26px] text-center tracking-[-0.02em] text-white">
                Featured Initiative
              </p>
            </div>

            {/* Carousel placeholder */}
            <div className="w-full max-w-[1220px] h-[359px] bg-gray-300 rounded-[32px] flex items-center justify-center mb-4">
              <p className="font-bold text-[24px] md:text-[36px] leading-[48px] text-center text-[#FF00D9] px-4">
                [imagery showcasing apprenticeship program in action in a rotating carousel]
              </p>
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-[18px] h-[18px] rounded-full bg-white border border-gray-300 flex items-center justify-center">
                <div className="w-[14px] h-[14px] rounded-full bg-gray-400" />
              </div>
              <div className="w-[18px] h-[18px] rounded-full bg-white border border-gray-300" />
              <div className="w-[18px] h-[18px] rounded-full bg-white border border-gray-300" />
            </div>

            {/* Program title and description */}
            <h3 className="font-bold text-[28px] leading-[32px] text-dark mb-4">
              GoodTrouble Social Impact Apprenticeship Program.
            </h3>
            <p className="font-normal text-[18px] leading-[26px] text-dark">
              Three emerging leaders. Real client work. Practical training in strategy, philanthropy, and community development.
            </p>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-16">
          {/* Brown CTA */}
          <Link href="/contact" className="bg-brown h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[323px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Schedule a 60-minute strategy session.
            </p>
            <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={43} height={43} />
          </Link>

          {/* Gold CTA */}
          <Link href="#" className="bg-gold h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[327px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-black mb-5">
              Download our Board Governance Checklist.
            </p>
            <Image src="/images/icons/circle-arrow-right.svg" alt="" width={39} height={39} />
          </Link>

          {/* Blue CTA */}
          <Link href="/newsletter" className="bg-blue h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[311px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Join our mailing list for tools and insights.
            </p>
            <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={39} height={39} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
