"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  CountUp,
  FloatingCircle,
  AnimatedUnderline,
} from "@/components/animations";
import { motion } from "framer-motion";

// Services with icons and brand color borders
const services = [
  {
    icon: "/images/icons/home_document.png",
    title: "Strategic and\nOrganizational Planning",
    borderColor: "#3490f3",
  },
  {
    icon: "/images/icons/home_flag.png",
    title: "Board Development\nand Governance",
    borderColor: "#fcba04",
  },
  {
    icon: "/images/icons/home_crown.png",
    title: "Leadership and\nExecutive Development",
    borderColor: "#964c2d",
  },
  {
    icon: "/images/icons/home_receipt.png",
    title: "Fund Development and\nPhilanthropic Strategy",
    borderColor: "#1d1f4e",
  },
  {
    icon: "/images/icons/home_favorite.png",
    title: "Social Impact Strategy\nand Partnership Building",
    borderColor: "#3490f3",
  },
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
  {
    image: "/images/approach-1.jpg",
    label: "Listen",
    color: "#1D1F4E",
    blend: "color",
  },
  {
    image: "/images/approach-2.jpg",
    label: "Assess",
    color: "#964C2D",
    blend: "color",
  },
  {
    image: "/images/approach-3.jpg",
    label: "Build Strategy",
    color: "#3490F3",
    blend: "color",
  },
  {
    image: "/images/approach-4.jpg",
    label: "Strengthen Leadership",
    color: "#FCBA04",
    blend: "color",
  },
  {
    image: "/images/approach-5.jpg",
    label: "Support Implementation",
    color: "#EBEBEB",
    blend: "saturation",
  },
  {
    image: "/images/approach-6.jpg",
    label: "Measure Progress",
    color: "#1D1F4E",
    blend: "color",
  },
];

// Who We Serve - top row (4 items)
const whoWeServeTop = [
  {
    icon: "/images/icons/home_educational.png",
    label: "Schools and\nEducational Institutions",
  },
  {
    icon: "/images/icons/home_home.png",
    label: "Foundations and\nPhilanthropic Entities",
  },
  { icon: "/images/icons/home_heart.png", label: "Faith-based\nOrganizations" },
  {
    icon: "/images/icons/home_group.png",
    label: "Community-based\nNonprofits",
  },
];

// Who We Serve - bottom row (3 items)
const whoWeServeBottom = [
  {
    icon: "/images/icons/home_megaphone.png",
    label: "Social Movements\nand Coalitions",
  },
  { icon: "/images/icons/home_scales.png", label: "Government\nAgencies" },
  {
    icon: "/images/icons/home_earth.png",
    label:
      "Networks working in\nclimate, equity, economic\njustice, and community\nresilience",
  },
];

// Impact stats
const impactStats = [
  { number: 100, suffix: "+", label: "Organizations Served" },
  {
    number: null,
    text: "Millions",
    label: "Leveraged to strengthen\nprograms and communities",
  },
  { number: null, text: "Dozens", label: "of boards received training" },
  {
    number: null,
    text: "Strategic",
    label:
      "Strategic fundraising frameworks\nbuilt for local, national,\nand global organizations",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[520px] md:h-[900px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero-bg-new.jpg")}
            alt=""
            fill
            className="object-cover object-[75%_top] md:object-top"
            priority
          />
          <div className="absolute inset-0 bg-navy mix-blend-color" />
          <div
            className="absolute inset-0 bg-navy/10 md:bg-navy/20"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Gradient overlay from left - narrower on mobile to show more image */}
        <div
          className="absolute inset-y-0 left-0 w-[60%] md:w-[70%]"
          style={{
            background:
              "linear-gradient(90deg, #1D1F4E 0%, rgba(29, 31, 78, 0.8) 40%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Animated Decorative Circles */}
        <FloatingCircle
          size={211}
          color="#3490F3"
          className="-left-14 bottom-[100px] hidden md:block"
          delay={0.2}
          floatRange={12}
          duration={5}
        />
        <FloatingCircle
          size={127}
          color="#FCBA04"
          className="-right-16 top-[140px]"
          delay={0.4}
          floatRange={8}
          duration={4}
        />
        <FloatingCircle
          size={51}
          color="#3490F3"
          className="right-[60px] top-[50px] hidden sm:block"
          delay={0.6}
          floatRange={6}
          duration={3.5}
        />
        <FloatingCircle
          size={51}
          color="#964C2D"
          className="right-[200px] bottom-[100px] hidden lg:block"
          delay={0.8}
          floatRange={8}
          duration={4.5}
        />

        {/* Hero Text with gold underlines */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-start pt-24 md:pt-0 md:items-center">
          <motion.div
            className="max-w-[300px] md:max-w-[726px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Giddings Consulting Group strengthens organizations working
            </h1>
            {/* Line with gold underlines */}
            <div className="flex items-baseline gap-2 mt-1 flex-wrap">
              <AnimatedUnderline delay={0.8}>
                <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
                  for equity
                </span>
              </AnimatedUnderline>
              <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
                and
              </span>
              <AnimatedUnderline delay={1.0}>
                <span className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
                  community impact.
                </span>
              </AnimatedUnderline>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight - 100,
              behavior: "smooth",
            })
          }
        >
          <span className="text-white/70 text-xs font-bold tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Tagline */}
        <FadeIn delay={0.2}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <p className="max-w-[782px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
              You want clarity. Strong leadership. Sustainable funding.
              <br />
              We help you build the systems, partnerships, and strategy to move
              your mission forward.
            </p>

            {/* Gold divider */}
            <motion.div
              className="w-[300px] h-0 mx-auto mt-8 border-[2px] border-gold"
              initial={{ width: 0 }}
              whileInView={{ width: 300 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </FadeIn>

        {/* ============ WHAT WE DO SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] mt-12 py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                  What We Do
                </h2>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath("/images/icons/circle-arrow-right.svg")}
                    alt=""
                    width={32}
                    height={32}
                  />
                </motion.div>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.1}>
              <p className="max-w-[885px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-12">
                You get support across strategy, leadership, governance, and
                fundraising.
                <br />
                You leave with aligned teams. Better decisions. Clear
                priorities. A stronger organization.
              </p>
            </FadeIn>

            {/* Services Grid - 5 items */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {services.map((service, index) => (
                <StaggerItem key={index} className="h-full">
                  <motion.div
                    className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-[20px] md:rounded-[24px] border-2 cursor-pointer h-full"
                    style={{ borderColor: service.borderColor }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Colored circle with icon */}
                    <motion.div
                      className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-full flex items-center justify-center mb-4 md:mb-6"
                      style={{ backgroundColor: service.borderColor }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={getImagePath(service.icon)}
                        alt=""
                        width={200}
                        height={200}
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain"
                      />
                    </motion.div>
                    {/* Label */}
                    <p className="text-[14px] md:text-[18px] text-[#212121] leading-[20px] md:leading-[26px] tracking-[-0.36px] whitespace-pre-line">
                      {service.title}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ============ WHY ORGANIZATIONS WORK WITH US ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                  Why Organizations Work With Us
                </h2>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath("/images/icons/circle-arrow-right.svg")}
                    alt=""
                    width={32}
                    height={32}
                  />
                </motion.div>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.1}>
              <div className="max-w-[1230px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8">
                <p>
                  The social sector faces complex pressure. More demand. Limited
                  resources. Boards needing direction.
                  <br />
                  Fundraising stuck in short cycles. Leaders stretched thin. You
                  need practical solutions that increase alignment and impact.
                </p>
                <p className="mt-4 font-bold">We bring:</p>
              </div>
            </FadeIn>

            {/* 5 Pill Bars */}
            <StaggerChildren staggerDelay={0.1} className="space-y-4 mb-8">
              {whyWorkWithUs.map((text, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="w-full max-w-[1220px] min-h-[56px] md:min-h-[72px] py-3 md:py-4 bg-[rgba(235,235,235,0.5)] rounded-[116px] flex items-center justify-center px-4 md:px-6"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(235,235,235,0.8)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-bold text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] text-center tracking-[-0.02em] text-dark">
                      {text}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Gold divider */}
            <motion.div
              className="w-full max-w-[1220px] h-0 border-[2px] border-gold mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Bottom text */}
            <FadeIn>
              <p className="font-light italic text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                You get simple steps. Straight talk. Measurable outcomes.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ OUR APPROACH ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Section Header */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                  Our Approach
                </h2>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath("/images/icons/circle-arrow-right.svg")}
                    alt=""
                    width={32}
                    height={32}
                  />
                </motion.div>
              </div>
            </FadeIn>

            {/* 6 Image Cards - 2 rows of 3 */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {approachSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="relative w-full max-w-[386px] h-[160px] md:h-[214px] rounded-[24px] md:rounded-[32px] overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={getImagePath(step.image)}
                        alt={step.label}
                        fill
                        className="object-cover"
                        style={{
                          opacity: step.blend === "saturation" ? 0.9 : 0.9,
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-[32px]"
                        style={{
                          backgroundColor: step.color,
                          mixBlendMode: step.blend as "color" | "saturation",
                        }}
                      />
                    </motion.div>
                    <p className="mt-5 font-normal text-[18px] leading-[26px] text-center tracking-[-0.02em] text-dark">
                      {step.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ============ WHO WE SERVE ============ */}
        {/* Navy header bar */}
        <FadeIn>
          <div className="w-full bg-navy py-12">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white">
                  Who We Serve
                </h2>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath(
                      "/images/icons/circle-arrow-right-white.svg",
                    )}
                    alt=""
                    width={32}
                    height={32}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Blue section */}
        <div className="w-full bg-blue py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Top row - 4 icons */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16"
            >
              {whoWeServeTop.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] flex items-center justify-center mb-4 md:mb-6">
                      <Image
                        src={getImagePath(item.icon)}
                        alt=""
                        width={112}
                        height={112}
                        className="brightness-0 invert w-[80px] h-[80px] md:w-[112px] md:h-[112px]"
                      />
                    </div>
                    <p className="font-bold text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] text-center text-white whitespace-pre-line">
                      {item.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Bottom row - 3 icons centered */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 max-w-[1000px] mx-auto"
            >
              {whoWeServeBottom.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] flex items-center justify-center mb-4 md:mb-6">
                      <Image
                        src={getImagePath(item.icon)}
                        alt=""
                        width={112}
                        height={112}
                        className="brightness-0 invert w-[80px] h-[80px] md:w-[112px] md:h-[112px]"
                      />
                    </div>
                    <p className="font-bold text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] text-center text-white whitespace-pre-line">
                      {item.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        {/* ============ IMPACT SNAPSHOT ============ */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left content */}
              <div className="flex-1">
                {/* Section Header */}
                <FadeIn>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark">
                      Impact Snapshot
                    </h2>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Image
                        src={getImagePath(
                          "/images/icons/circle-arrow-right.svg",
                        )}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </motion.div>
                  </div>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.1}>
                  <p className="max-w-[694px] font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-12">
                    Having worked on the forefront of creating social change
                    through community outreach and engagement – we know social
                    change is hard. We don&apos;t believe in emphasizing the
                    latest buzzwords, providing quick answers or taking short
                    cuts, because they don&apos;t foster social change. Instead,
                    we provide individualized solutions based on the needs of
                    the client and their constituency.
                  </p>
                </FadeIn>

                {/* Stats Grid - 2x2 */}
                <StaggerChildren
                  staggerDelay={0.15}
                  className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-0 max-w-[630px]"
                >
                  {impactStats.map((stat, index) => (
                    <StaggerItem key={index}>
                      <div className="border-t-[1.5px] border-[rgba(92,92,92,0.2)] pt-4 md:pt-6 pb-8 md:pb-12">
                        <p className="font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[52px] tracking-[-0.02em] text-dark">
                          {stat.number !== null ? (
                            <CountUp value={stat.number} suffix={stat.suffix} />
                          ) : (
                            stat.text
                          )}
                        </p>
                        <p className="mt-2 font-normal text-[18px] leading-[24px] text-dark whitespace-pre-line">
                          {stat.label}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>

              {/* Image */}
              <FadeIn direction="right" delay={0.3}>
                <div className="relative w-full lg:w-[460px] h-[400px] lg:h-[573px] rounded-[32px] overflow-hidden flex-shrink-0">
                  <Image
                    src={getImagePath("/images/impact-image.jpg")}
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Blue and Brown decorative arrow lines */}
        <div className="relative w-full h-[100px] md:h-[150px] overflow-hidden">
          {/* Blue arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-0"
            style={{ width: "90%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={getImagePath(
                "/site icons_122425/arrows/png 4x/arrow_dodger blue.png",
              )}
              alt=""
              width={4872}
              height={218}
              className="w-full h-auto"
            />
          </motion.div>
          {/* Brown arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-[50px] md:top-[70px]"
            style={{ width: "75%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src={getImagePath(
                "/site icons_122425/arrows/png 4x/arrow_chestnut.png",
              )}
              alt=""
              width={4872}
              height={218}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* ============ FEATURED INITIATIVE ============ */}
        <section className="w-full py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Blue pill bar */}
            <FadeIn>
              <motion.div
                className="w-full max-w-[1220px] min-h-[56px] md:h-[72px] py-3 md:py-0 bg-blue rounded-[116px] flex items-center justify-center mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-bold text-[20px] md:text-[28px] leading-[24px] md:leading-[26px] text-center tracking-[-0.02em] text-white px-4">
                  Featured Initiative
                </p>
              </motion.div>
            </FadeIn>

            {/* Carousel placeholder */}
            <FadeIn delay={0.1}>
              <div className="w-full max-w-[1220px] h-[250px] md:h-[359px] bg-gray-300 rounded-[24px] md:rounded-[32px] flex items-center justify-center mb-4">
                <p className="font-bold text-[18px] md:text-[36px] leading-[24px] md:leading-[48px] text-center text-[#FF00D9] px-4">
                  [imagery showcasing apprenticeship program in action in a
                  rotating carousel]
                </p>
              </div>
            </FadeIn>

            {/* Carousel dots */}
            <div className="flex justify-center gap-4 mb-8">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className={`w-[18px] h-[18px] rounded-full border border-gray-300 flex items-center justify-center cursor-pointer ${dot === 0 ? "bg-white" : "bg-white"}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {dot === 0 && (
                    <div className="w-[14px] h-[14px] rounded-full bg-gray-400" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Program title and description */}
            <FadeIn delay={0.2}>
              <h3 className="font-bold text-[22px] md:text-[28px] leading-[28px] md:leading-[32px] text-dark mb-4">
                GoodTrouble Social Impact Apprenticeship Program.
              </h3>
              <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-dark">
                Three emerging leaders. Real client work. Practical training in
                strategy, philanthropy, and community development.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <StaggerChildren
          staggerDelay={0.1}
          className="w-full grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-16"
        >
          {/* Brown CTA */}
          <StaggerItem>
            <Link href="/contact" className="block">
              <motion.div
                className="bg-brown h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[323px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-white mb-4 md:mb-5">
                  Schedule a 60-minute strategy session.
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath(
                      "/images/icons/circle-arrow-right-white.svg",
                    )}
                    alt=""
                    width={43}
                    height={43}
                    className="w-[36px] h-[36px] md:w-[43px] md:h-[43px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </StaggerItem>

          {/* Gold CTA */}
          <StaggerItem>
            <Link href="#" className="block">
              <motion.div
                className="bg-gold h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[327px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-black mb-4 md:mb-5">
                  Download our Board Governance Checklist.
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath(
                      "/images/icons/circle-arrow-right-black.svg",
                    )}
                    alt=""
                    width={39}
                    height={39}
                    className="w-[32px] h-[32px] md:w-[39px] md:h-[39px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </StaggerItem>

          {/* Blue CTA */}
          <StaggerItem>
            <Link href="/newsletter" className="block">
              <motion.div
                className="bg-blue h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[311px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-white mb-4 md:mb-5">
                  Join our mailing list for tools and insights.
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={getImagePath(
                      "/images/icons/circle-arrow-right-white.svg",
                    )}
                    alt=""
                    width={39}
                    height={39}
                    className="w-[32px] h-[32px] md:w-[39px] md:h-[39px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </div>

      <Footer />
    </div>
  );
}
