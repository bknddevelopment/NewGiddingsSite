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

// Values data - matching Figma layout (2 rows of 3)
const valuesTop = [
  { icon: "/images/icons/about_send-to-back.png", label: "Collaboration" },
  { icon: "/images/icons/about_shield.png", label: "Integrity" },
  { icon: "/images/icons/about_rank.png", label: "Accountability" },
];

const valuesBottom = [
  { icon: "/images/icons/about_sort.png", label: "Equity" },
  { icon: "/images/icons/about_launch.png", label: "Innovation" },
  { icon: "/images/icons/about_direction.png", label: "Practical action" },
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
      <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/about-hero-bg.jpg")}
            alt=""
            fill
            className="object-cover object-[70%_center] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy mix-blend-color" />
          <div
            className="absolute inset-0 bg-navy/10 md:bg-navy/20"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Gradient overlay from left - narrower on mobile */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] md:w-[70%]"
          style={{
            background:
              "linear-gradient(90deg, #1D1F4E 0%, rgba(29, 31, 78, 0.85) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Animated Decorative Circles */}
        <FloatingCircle
          size={211}
          color="#3490F3"
          className="-left-14 bottom-[20px] hidden md:block"
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
          className="right-[200px] bottom-[20px] hidden lg:block"
          delay={0.8}
          floatRange={8}
          duration={4.5}
        />

        {/* Hero Content - positioned in center-left area */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-start pt-20 md:pt-0 md:items-center">
          <motion.div
            className="max-w-[280px] md:max-w-[726px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[28px] md:text-[36px] leading-[38px] md:leading-[48px] tracking-[0.05em] text-white">
              Giddings Consulting Group
              <br />
              is a social impact strategy firm
              <br />
              based in{" "}
              <AnimatedUnderline delay={0.8}>
                <span>Elizabeth, New Jersey.</span>
              </AnimatedUnderline>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Who We Are Section */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <FadeIn>
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                Who We Are
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark max-w-[1220px]">
                <p className="mb-4">
                  We work with mission-driven organizations committed to equity,
                  inclusion, and sustainable community outcomes.
                </p>
                <p>
                  Our work spans strategic planning, governance, fundraising,
                  leadership development, coalition building, and philanthropic
                  advising.
                  <br />
                  The goal is simple. Help leaders deliver stronger results for
                  the communities they serve.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Our Founder Section */}
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <FadeIn>
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                Our Founder
              </h2>
            </FadeIn>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Founder Image */}
              <FadeIn direction="left" delay={0.1}>
                <div className="relative w-full lg:w-[648px] h-[300px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden flex-shrink-0">
                  <Image
                    src={getImagePath("/images/founder-image.jpg")}
                    alt="Drew Giddings"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </FadeIn>

              {/* Founder Bio */}
              <FadeIn direction="right" delay={0.2}>
                <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark lg:w-[540px]">
                  <p className="mb-4">
                    Drew Giddings is a strategist, philanthropic advisor, and
                    executive coach with more than two decades of experience
                    across the nonprofit, philanthropic, and public sectors.
                  </p>
                  <p className="mb-4">
                    He has supported more than 100 organizations. He advised
                    leaders through major transitions. He strengthened boards.
                    <br />
                    He built fundraising models. He expanded partnerships
                    <br />
                    across sectors, working on climate resilience, economic
                    inclusion, and community development.
                  </p>
                  <p>
                    His work sits at the intersection of strategy, equity,
                    <br />
                    and systems change.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Decorative lines with arrows pointing RIGHT - Full width */}
        <div className="relative w-full h-[100px] md:h-[150px] overflow-hidden">
          {/* Blue arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-0"
            style={{ width: "92%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={getImagePath("/images/icons/arrow_dodger_blue.png")}
              alt=""
              width={1218}
              height={55}
              className="w-full h-auto"
            />
          </motion.div>
          {/* Community blue arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-[50px] md:top-[70px]"
            style={{ width: "71%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src={getImagePath("/images/icons/arrow_community_blue.png")}
              alt=""
              width={1218}
              height={55}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* ============ WHAT GUIDES US SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] py-14">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <FadeIn>
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                What Guides Us
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8 max-w-[1230px]">
                We believe strong organizations lead to stronger communities.
                <br />
                We build strategy that reflects lived experience and local
                wisdom.
                <br />
                We respect your context. We support your values. We help you
                lead with clarity.
              </p>
            </FadeIn>

            {/* Gold divider */}
            <motion.div
              className="w-full max-w-[1220px] h-0 border-[2px] border-gold mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <FadeIn delay={0.2}>
              <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-16">
                Our Values:
              </p>
            </FadeIn>

            {/* Values Grid - Top Row */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-[271px] justify-items-center mb-8 md:mb-16"
            >
              {valuesTop.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center text-center w-full max-w-[223px]"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-full bg-blue flex items-center justify-center mb-4 md:mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={getImagePath(value.icon)}
                        alt=""
                        width={62}
                        height={62}
                        className="brightness-0 invert w-[44px] h-[44px] md:w-[62px] md:h-[62px]"
                      />
                    </motion.div>
                    <p className="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[-0.02em] text-dark">
                      {value.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Values Grid - Bottom Row */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-[271px] justify-items-center"
            >
              {valuesBottom.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center text-center w-full max-w-[223px]"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-full bg-blue flex items-center justify-center mb-4 md:mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={getImagePath(value.icon)}
                        alt=""
                        width={62}
                        height={62}
                        className="brightness-0 invert w-[44px] h-[44px] md:w-[62px] md:h-[62px]"
                      />
                    </motion.div>
                    <p className="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[-0.02em] text-dark">
                      {value.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ============ HOW WE WORK SECTION ============ */}
        <section className="w-full bg-navy relative py-16 overflow-hidden">
          {/* Animated decorative circles */}
          <FloatingCircle
            size={127}
            color="#FCBA04"
            className="-right-16 top-[194px]"
            delay={0.2}
            floatRange={8}
            duration={4}
          />
          <FloatingCircle
            size={61}
            color="#3490F3"
            className="right-[135px] top-[50px]"
            delay={0.4}
            floatRange={6}
            duration={3.5}
          />
          <motion.div
            className="absolute w-[211px] h-[105px] -left-[160px] top-[258px] rounded-full bg-brown"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <FloatingCircle
            size={300}
            color="#3490F3"
            className="right-[20px] -bottom-[100px] opacity-50"
            delay={0.3}
            floatRange={8}
            duration={4}
          />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                  How We Work
                </h2>
              </FadeIn>

              {/* Gold divider */}
              <motion.div
                className="w-full max-w-[474px] h-0 border-[2px] border-gold mx-auto mb-8 md:mb-12"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              {/* Bullet list */}
              <StaggerChildren
                staggerDelay={0.15}
                className="text-[18px] md:text-[28px] text-white leading-[32px] md:leading-[60px] text-center"
              >
                <StaggerItem>
                  <p>• You get direct engagement from senior leadership.</p>
                </StaggerItem>
                <StaggerItem>
                  <p>• You get tools that support execution.</p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    • You get plans built around real conditions, not abstract
                    theory.
                  </p>
                </StaggerItem>
              </StaggerChildren>
            </div>

            <div className="text-center mt-20">
              <FadeIn>
                <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-white mb-8">
                  Our Process
                </h2>
              </FadeIn>

              {/* Gold divider */}
              <motion.div
                className="w-full max-w-[474px] h-0 border-[2px] border-gold mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            {/* Process Steps */}
            <StaggerChildren
              staggerDelay={0.1}
              className="space-y-3 md:space-y-4"
            >
              {processSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white rounded-[116px] py-4 md:py-6 px-6 md:px-8 lg:px-20"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-bold text-[14px] md:text-[18px] text-dark text-center leading-[20px] md:leading-[26px] tracking-[-0.02em]">
                      {step}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Closing statement */}
            <FadeIn delay={0.3}>
              <p className="text-[18px] md:text-[28px] text-white leading-[32px] md:leading-[60px] text-center mt-10 md:mt-14 italic">
                This approach strengthens culture, decision-making, and
                long-term sustainability.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Gold divider bar between navy section and Our Reach */}
        <motion.div
          className="w-full h-[16px] bg-gold"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        />

        {/* ============ OUR REACH SECTION ============ */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <FadeIn>
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                Our Reach
              </h2>
            </FadeIn>

            {/* Black divider */}
            <motion.div
              className="w-full max-w-[1220px] h-0 border-[2px] border-dark mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />

            <StaggerChildren
              staggerDelay={0.1}
              className="font-bold text-[18px] leading-[32px] text-dark list-disc list-inside space-y-0"
            >
              <StaggerItem>
                <p>• Our primary office is in Elizabeth, New Jersey.</p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  • Our work extends across the African diaspora and global
                  partners.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  • Recent milestones include an expanded office, a refreshed
                  brand, and membership in the Clinton Global Initiative.
                </p>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* ============ COMMITMENT TO EMERGING LEADERS ============ */}
        <section className="pb-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            {/* Blue pill bar */}
            <FadeIn>
              <motion.div
                className="w-full max-w-[1220px] bg-[#3490f3] rounded-full py-6 px-8 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-bold text-[24px] md:text-[28px] text-white text-center leading-[26px] tracking-[-0.02em]">
                  Commitment to Emerging Leaders
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark max-w-[1230px] mb-16">
                We launched the{" "}
                <span className="font-bold">
                  GoodTrouble Social Impact Apprenticeship Program
                </span>{" "}
                to support rising strategists and practitioners.
                <br />
                Apprentices support client work and gain experience in
                real-world problem-solving.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <StaggerChildren
          staggerDelay={0.1}
          className="w-full grid grid-cols-1 md:grid-cols-3"
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
                  Meet with
                  <br />
                  our team.
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
                  Join our partner network.
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
                  Sign up for updates and insights.
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
