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

// Stay informed items - 5 items matching Figma
const stayInformedItems = [
  { icon: "/images/icons/rank.svg", label: "New client \nwins and \ncase studies" },
  { icon: "/images/icons/brain.svg", label: "Upcoming \nconvening and \nlearning sessions" },
  { icon: "/images/icons/file.svg", label: "Leadership \nand fundraising \ntools" },
  { icon: "/images/icons/bell.svg", label: "GoodTrouble apprenticeship \nupdates" },
  { icon: "/images/icons/bulb.svg", label: "Insights from our work across climate, equity, \n& community resilience" },
];

// Tell us items - 4 numbered items
const tellUsItems = [
  "What you need",
  "Your timeline",
  "Your goals",
  "How we can support your next step",
];

export default function ContactPage() {
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
                className="text-[#212121] font-bold text-[18px] leading-[40.96px] tracking-[-0.36px] hover:text-[#3490f3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section - exactly matching Figma */}
      <section className="relative h-[496px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-bg.jpg"
            alt="Contact hero background"
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
        <div className="absolute left-0 top-[99px] w-[1024px] h-[397px] bg-gradient-to-r from-[#1d1f4e] to-transparent z-10" />

        {/* Decorative Circles - exact positions from Figma */}
        <div className="absolute left-[-56px] top-[477px] w-[211px] h-[211px] rounded-full bg-[#3490f3] z-20" />
        <div className="absolute right-[-63px] top-[235px] w-[127px] h-[127px] rounded-full bg-[#fcba04] z-20" />
        <div className="absolute right-[90px] top-[151px] w-[51px] h-[51px] rounded-full bg-[#3490f3] z-20" />
        <div className="absolute right-[193px] top-[557px] w-[51px] h-[51px] rounded-full bg-[#964c2d] z-20" />

        {/* Hero Content */}
        <div className="relative z-30 pt-[259px] pl-[71px] max-w-[726px]">
          {/* Gold line */}
          <div className="flex items-center mb-6">
            <div className="w-[224px] h-[7px] bg-[#fcba04] ml-[210px]" />
          </div>

          <h1 className="text-[36px] font-bold text-white leading-[48px] tracking-[1.8px]">
            Let&apos;s stay connected!
          </h1>
        </div>
      </section>

      {/* White Content Area with rounded top */}
      <section className="relative -mt-[77px] z-40">
        <div className="bg-white rounded-t-[65px]">
          {/* Intro text below hero */}
          <div className="pt-[51px] px-[329px] text-center mb-[64px]">
            <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px]">
              You want tools, insights, and practical strategies that strengthen your work.<br />
              We share updates that help you lead with clarity and confidence.
            </p>
          </div>

          {/* Stay informed about Section - Gray background */}
          <section className="bg-[rgba(235,235,235,0.5)] py-[64px]">
            <div className="px-[112px]">
              <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px] mb-[32px]">
                Stay informed about
              </h2>

              {/* 5 icon items in a row */}
              <div className="flex justify-between">
                {stayInformedItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[223px]">
                    <div className="w-[112px] h-[112px] rounded-full bg-[#3490f3] flex items-center justify-center mb-[25px]">
                      <Image src={item.icon} alt="" width={62} height={62} className="brightness-0 invert" />
                    </div>
                    <p className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] whitespace-pre-line">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Navy bar with message */}
          <div className="bg-[#1d1f4e] py-[24px]">
            <p className="text-[18px] font-bold text-white text-center leading-[32px]">
              Share your information below. We&apos;ll keep you up to date on what matters most to your mission.
            </p>
          </div>

          {/* Work with us Section */}
          <section className="py-[64px] px-[112px]">
            <div className="flex gap-[60px]">
              {/* Left Column - Content */}
              <div className="w-[644px]">
                <h2 className="text-[28px] font-bold text-[#212121] leading-[32px] tracking-[-0.56px] mb-[32px]">
                  Work with us
                </h2>

                <div className="text-[18px] text-[#212121] leading-[26px] tracking-[-0.36px] mb-[32px]">
                  <p className="mb-4">
                    If you want support with strategy, leadership, fundraising, or partnership development, complete the form. We respond within two business days.
                  </p>
                  <p className="font-bold">Tell us:</p>
                </div>

                {/* Numbered items */}
                <div className="space-y-[16px] mb-[32px]">
                  {tellUsItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-[16px]">
                      {/* Blue circle with number */}
                      <div className="w-[72px] h-[72px] rounded-full bg-[#3490f3] flex items-center justify-center flex-shrink-0">
                        <span className="text-[28px] font-bold text-white tracking-[-0.56px]">
                          {index + 1}
                        </span>
                      </div>
                      {/* Gray pill */}
                      <div className="bg-[rgba(235,235,235,0.5)] rounded-[116px] h-[72px] flex-1 flex items-center px-[32px]">
                        <p className="text-[18px] font-bold text-[#212121] leading-[26px] tracking-[-0.36px]">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[18px] font-bold text-[#212121] leading-[26px] tracking-[-0.36px]">
                  We look forward to hearing from you.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-[535px] h-[578px] rounded-[32px] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/contact-form-image.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* CTA Cards */}
          <section className="flex">
            {/* CTA 1 - Brown */}
            <div className="bg-[#964c2d] w-[518px] h-[248px] flex flex-col items-center justify-center px-[97px]">
              <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                Submit your information.
              </p>
              <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={43} height={43} />
            </div>

            {/* CTA 2 - Gold */}
            <div className="bg-[#fcba04] w-[406px] h-[248px] flex flex-col items-center justify-center px-[40px]">
              <p className="text-[26px] font-bold text-black text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                Join our<br />mailing list.
              </p>
              <Image src="/images/icons/circle-arrow-right.svg" alt="" width={39} height={39} />
            </div>

            {/* CTA 3 - Blue */}
            <div className="bg-[#3490f3] w-[518px] h-[248px] flex flex-col items-center justify-center px-[40px]">
              <p className="text-[26px] font-bold text-white text-center leading-[38px] tracking-[-0.13px] mb-[20px]">
                Stay connected to a community focused on impact and results.
              </p>
              <Image src="/images/icons/circle-arrow-right-white.svg" alt="" width={39} height={39} />
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
