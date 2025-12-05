import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";

// Stay informed items - 5 items matching Figma
const stayInformedItems = [
  { icon: "/images/icons/rank.svg", label: "New client\nwins and\ncase studies" },
  { icon: "/images/icons/brain.svg", label: "Upcoming\nconvening and\nlearning sessions" },
  { icon: "/images/icons/file.svg", label: "Leadership\nand fundraising\ntools" },
  { icon: "/images/icons/bell.svg", label: "GoodTrouble\napprenticeship\nupdates" },
  { icon: "/images/icons/bulb.svg", label: "Insights from our work\nacross climate, equity,\n& community resilience" },
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
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/contact-hero-bg.jpg")}
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
        <div className="absolute w-[51px] h-[51px] right-[200px] bottom-[60px] rounded-full bg-brown" />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <div className="max-w-[726px]">
            {/* Gold line above text */}
            <div className="w-[200px] md:w-[224px] h-[7px] bg-gold mb-6" />
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Let&apos;s stay connected!
            </h1>
          </div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Intro text */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <p className="max-w-[782px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-16">
            You want tools, insights, and practical strategies that strengthen your work.<br />
            We share updates that help you lead with clarity and confidence.
          </p>
        </div>

        {/* ============ STAY INFORMED ABOUT SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
              Stay informed about
            </h2>

            {/* 5 icon items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {stayInformedItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-[112px] h-[112px] rounded-full bg-blue flex items-center justify-center mb-6">
                    <Image src={getImagePath(item.icon)} alt="" width={62} height={62} className="brightness-0 invert" />
                  </div>
                  <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navy bar with message */}
        <div className="w-full bg-navy py-6">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <p className="font-bold text-[18px] leading-[32px] text-center text-white">
              Share your information below. We&apos;ll keep you up to date on what matters most to your mission.
            </p>
          </div>
        </div>

        {/* ============ WORK WITH US SECTION ============ */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Content */}
              <div className="flex-1">
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                  Work with us
                </h2>

                <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8">
                  <p className="mb-4">
                    If you want support with strategy, leadership, fundraising, or partnership development, complete the form. We respond within two business days.
                  </p>
                  <p className="font-bold">Tell us:</p>
                </div>

                {/* Numbered items */}
                <div className="space-y-4 mb-8">
                  {tellUsItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {/* Blue circle with number */}
                      <div className="w-[72px] h-[72px] rounded-full bg-blue flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-[28px] text-white tracking-[-0.02em]">
                          {index + 1}
                        </span>
                      </div>
                      {/* Gray pill */}
                      <div className="bg-[rgba(235,235,235,0.5)] rounded-[116px] h-[72px] flex-1 flex items-center px-8">
                        <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                  We look forward to hearing from you.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-full lg:w-[535px] h-[400px] lg:h-[578px] rounded-[32px] overflow-hidden flex-shrink-0">
                <Image
                  src={getImagePath("/images/contact-form-image.jpg")}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {/* Brown CTA */}
          <Link href="#" className="bg-brown h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[323px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Submit your information.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={43} height={43} />
          </Link>

          {/* Gold CTA */}
          <Link href="/newsletter" className="bg-gold h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[327px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-black mb-5">
              Join our<br />mailing list.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right.svg")} alt="" width={39} height={39} />
          </Link>

          {/* Blue CTA */}
          <Link href="#" className="bg-blue h-[248px] flex flex-col items-center justify-center px-8 hover:opacity-90 transition-opacity">
            <p className="max-w-[311px] font-bold text-[26px] leading-[38px] text-center tracking-[-0.005em] text-white mb-5">
              Stay connected to a community focused on impact and results.
            </p>
            <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={39} height={39} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
