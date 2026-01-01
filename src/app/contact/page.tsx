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

// Stay informed items - 5 items matching Figma
const stayInformedItems = [
  {
    icon: "/images/icons/contact_rank.png",
    label: "New client\nwins and\ncase studies",
  },
  {
    icon: "/images/icons/contact_brain.png",
    label: "Upcoming\nconvening and\nlearning sessions",
  },
  {
    icon: "/images/icons/contact_file.png",
    label: "Leadership\nand fundraising\ntools",
  },
  {
    icon: "/images/icons/contact_bell.png",
    label: "GoodTrouble\napprenticeship\nupdates",
  },
  {
    icon: "/images/icons/contact_bulb.png",
    label:
      "Insights from our work\nacross climate, equity,\n& community resilience",
  },
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
      <section className="relative w-full h-[480px] md:h-[500px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/contact-hero-bg.jpg")}
            alt=""
            fill
            className="object-cover object-[65%_center] md:object-center"
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
          className="absolute inset-y-0 left-0 w-[50%] md:w-[70%]"
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
          className="right-[200px] bottom-[60px] hidden lg:block"
          delay={0.8}
          floatRange={8}
          duration={4.5}
        />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-start pt-28 md:pt-0 md:items-center">
          <motion.div
            className="max-w-[220px] md:max-w-[726px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Let&apos;s stay{" "}
              <AnimatedUnderline delay={0.8}>
                <span>connected!</span>
              </AnimatedUnderline>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Intro text */}
        <FadeIn>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <p className="max-w-[782px] mx-auto text-center font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-16">
              You want tools, insights, and practical strategies that strengthen
              your work.
              <br />
              We share updates that help you lead with clarity and confidence.
            </p>
          </div>
        </FadeIn>

        {/* ============ STAY INFORMED ABOUT SECTION ============ */}
        <section className="w-full bg-[rgba(235,235,235,0.5)] py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <FadeIn>
              <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                Stay informed about
              </h2>
            </FadeIn>

            {/* 5 icon items */}
            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4"
            >
              {stayInformedItems.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-full bg-blue flex items-center justify-center mb-4 md:mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={getImagePath(item.icon)}
                        alt=""
                        width={62}
                        height={62}
                        className="brightness-0 invert w-[44px] h-[44px] md:w-[62px] md:h-[62px]"
                      />
                    </motion.div>
                    <p className="font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[-0.02em] text-dark whitespace-pre-line">
                      {item.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Navy bar with message */}
        <FadeIn>
          <div className="w-full bg-navy py-6">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
              <p className="font-bold text-[18px] leading-[32px] text-center text-white">
                Share your information below. We&apos;ll keep you up to date on
                what matters most to your mission.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ============ WORK WITH US SECTION ============ */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Content */}
              <div className="flex-1">
                <FadeIn>
                  <h2 className="font-bold text-[28px] leading-[32px] tracking-[-0.02em] text-dark mb-8">
                    Work with us
                  </h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8">
                    <p className="mb-4">
                      If you want support with strategy, leadership,
                      fundraising, or partnership development, complete the
                      form. We respond within two business days.
                    </p>
                    <p className="font-bold">Tell us:</p>
                  </div>
                </FadeIn>

                {/* Numbered items */}
                <StaggerChildren
                  staggerDelay={0.1}
                  className="space-y-3 md:space-y-4 mb-8"
                >
                  {tellUsItems.map((item, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-center gap-3 md:gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Blue circle with number */}
                        <motion.div
                          className="w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full bg-blue flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="font-bold text-[22px] md:text-[28px] text-white tracking-[-0.02em]">
                            {index + 1}
                          </span>
                        </motion.div>
                        {/* Gray pill */}
                        <motion.div
                          className="bg-[rgba(235,235,235,0.5)] rounded-[116px] min-h-[56px] md:min-h-[72px] py-3 md:py-4 flex-1 flex items-center px-5 md:px-8"
                          whileHover={{
                            backgroundColor: "rgba(235,235,235,0.8)",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="font-bold text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] tracking-[-0.02em] text-dark">
                            {item}
                          </p>
                        </motion.div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                <FadeIn delay={0.3}>
                  <p className="font-light italic text-[18px] leading-[26px] tracking-[-0.02em] text-dark">
                    We look forward to hearing from you.
                  </p>
                </FadeIn>
              </div>

              {/* Right Column - Image */}
              <FadeIn direction="right" delay={0.2}>
                <div className="relative w-full lg:w-[535px] h-[300px] md:h-[400px] lg:h-[578px] rounded-[24px] md:rounded-[32px] overflow-hidden flex-shrink-0">
                  <Image
                    src={getImagePath("/images/contact-form-image.jpg")}
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============ 3 CTA CARDS ============ */}
        <StaggerChildren
          staggerDelay={0.1}
          className="w-full grid grid-cols-1 md:grid-cols-3"
        >
          {/* Brown CTA */}
          <StaggerItem>
            <Link href="#" className="block">
              <motion.div
                className="bg-brown h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[323px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-white mb-4 md:mb-5">
                  Submit your information.
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
            <Link href="/newsletter" className="block">
              <motion.div
                className="bg-gold h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[327px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-black mb-4 md:mb-5">
                  Join our
                  <br />
                  mailing list.
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
                    width={43}
                    height={43}
                    className="w-[36px] h-[36px] md:w-[43px] md:h-[43px]"
                  />
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
                  Stay connected to a community focused on impact and results.
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
        </StaggerChildren>
      </div>

      <Footer />
    </div>
  );
}
