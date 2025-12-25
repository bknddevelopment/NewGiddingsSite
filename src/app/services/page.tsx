"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  FloatingCircle,
  AnimatedUnderline,
} from "@/components/animations";
import { motion } from "framer-motion";

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
      <section className="relative w-full h-[480px] md:h-[500px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero-bg.jpg")}
            alt=""
            fill
            className="object-cover object-[70%_center] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy mix-blend-color" />
          <div className="absolute inset-0 bg-navy/10 md:bg-navy/20" style={{ mixBlendMode: 'multiply' }} />
        </div>

        {/* Gradient overlay from left - narrower on mobile */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] md:w-[70%]"
          style={{ background: 'linear-gradient(90deg, #1D1F4E 0%, rgba(29, 31, 78, 0.85) 50%, rgba(255, 255, 255, 0) 100%)' }}
        />

        {/* Animated Decorative Circles */}
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

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-start pt-28 md:pt-0 md:items-center">
          <motion.div
            className="max-w-[260px] md:max-w-[726px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              How we <AnimatedUnderline delay={0.8}><span>support your mission</span></AnimatedUnderline>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Intro text */}
        <FadeIn>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <p className="max-w-[1220px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-4">
              You get targeted support across strategy, leadership, governance, and fundraising.<br />
              Each engagement adapts to your needs and builds your capacity for lasting impact.
            </p>

            {/* Gold divider */}
            <motion.div
              className="w-[300px] h-0 mx-auto border-[2px] border-gold mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 300 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeIn>

        {/* ============ SERVICE TILES SECTION ============ */}
        <section className="py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <StaggerChildren staggerDelay={0.1} className="space-y-4">
              {serviceCards.map((card, index) => (
                <StaggerItem key={index}>
                  <ServiceTile {...card} index={index} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ============ OUR IMPACT SECTION - Navy Background ============ */}
        <section className="w-full bg-navy relative py-16 overflow-hidden mt-16">
          {/* Animated decorative circles */}
          <FloatingCircle
            size={127}
            color="#FCBA04"
            className="-right-16 top-[100px]"
            delay={0.2}
            floatRange={8}
            duration={4}
          />
          <FloatingCircle
            size={61}
            color="#FCBA04"
            className="right-[100px] top-[20px]"
            delay={0.4}
            floatRange={6}
            duration={3.5}
          />
          <motion.div
            className="absolute w-[211px] h-[105px] -left-[160px] top-[200px] rounded-full bg-blue"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute w-[437px] h-[437px] -right-[160px] -bottom-[200px] rounded-full bg-blue opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                  How We Work
                </h2>
              </FadeIn>

              {/* Gold divider */}
              <motion.div
                className="w-full max-w-[474px] h-0 border-[2px] border-gold mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            {/* How We Work statements - 6 white pill bars */}
            <StaggerChildren staggerDelay={0.1} className="space-y-3 md:space-y-4">
              {howWeWorkStatements.map((statement, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white rounded-[116px] py-4 md:py-6 px-6 md:px-8 lg:px-20"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-bold text-[14px] md:text-[18px] text-dark text-center leading-[20px] md:leading-[26px] tracking-[-0.02em]">
                      {statement}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* White bar separator */}
        <div className="w-full h-[16px] bg-white" />

        {/* ============ 3 CTA CARDS ============ */}
        <StaggerChildren staggerDelay={0.1} className="w-full grid grid-cols-1 md:grid-cols-3">
          {/* Brown CTA */}
          <StaggerItem>
            <Link href="/contact" className="block">
              <motion.div
                className="bg-brown h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[323px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-white mb-4 md:mb-5">
                  Schedule a<br />strategy session.
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={43} height={43} className="w-[36px] h-[36px] md:w-[43px] md:h-[43px]" />
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
                  Request<br />a proposal.
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image src={getImagePath("/images/icons/circle-arrow-right-black.svg")} alt="" width={43} height={43} className="w-[36px] h-[36px] md:w-[43px] md:h-[43px]" />
                </motion.div>
              </motion.div>
            </Link>
          </StaggerItem>

          {/* Blue CTA */}
          <StaggerItem>
            <Link href="#" className="block">
              <motion.div
                className="bg-blue h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[311px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-white mb-4 md:mb-5">
                  Download our<br />services overview
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image src={getImagePath("/images/icons/circle-arrow-right-white.svg")} alt="" width={43} height={43} className="w-[36px] h-[36px] md:w-[43px] md:h-[43px]" />
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

// Border color mapping
const borderColors: Record<string, string> = {
  'bg-navy': 'border-navy',
  'bg-blue': 'border-blue',
  'bg-brown': 'border-brown',
  'bg-gold': 'border-gold',
};

// Service Tile Component - sleek horizontal expandable tiles
function ServiceTile({
  headerColor,
  title,
  description,
  deliverables,
  outcomes,
  index,
}: {
  headerColor: string;
  textColor: string;
  title: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const borderColor = borderColors[headerColor] || 'border-navy';

  return (
    <motion.div
      className={`bg-[#EBEBEB] ${borderColor} border-[4px] rounded-[24px] overflow-hidden cursor-pointer`}
      whileHover={{ scale: 1.01, x: 8 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Main tile content */}
      <div className="flex items-center justify-between p-6 lg:p-8">
        <div className="flex items-center gap-6 flex-1">
          {/* Number badge */}
          <div className={`w-12 h-12 rounded-full ${headerColor} flex items-center justify-center flex-shrink-0`}>
            <span className="font-bold text-[20px] text-white">{index + 1}</span>
          </div>

          {/* Title and description */}
          <div className="flex-1">
            <h3 className="font-bold text-[20px] lg:text-[24px] leading-tight text-dark">
              {title.replace('\n', ' ')}
            </h3>
            <p className="text-[14px] lg:text-[16px] mt-1 text-dark/70 hidden md:block">
              {description}
            </p>
          </div>
        </div>

        {/* Expand indicator */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-dark">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
          {/* Description for mobile */}
          <p className="text-[14px] mb-4 text-dark/70 md:hidden">
            {description}
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t ${borderColor}`}>
            {/* Deliverables */}
            <div>
              <p className="font-bold text-[16px] text-dark mb-3">What you get:</p>
              <ul className="space-y-2">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-dark/80 flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${headerColor} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <p className="font-bold text-[16px] text-dark mb-3">Outcomes:</p>
              <ul className="space-y-2">
                {outcomes.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-dark/80 flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${headerColor} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
