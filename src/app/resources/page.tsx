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
} from "@/components/animations";
import { motion } from "framer-motion";

// Case Studies data
const caseStudies = [
  {
    id: 1,
    title: "Prospect Park Alliance",
    excerpt:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehen in voluptate velit esse cillum...",
    slug: "prospect-park-alliance",
    image: "/images/case-studies/prospect-park.jpg",
  },
  {
    id: 2,
    title: "World Day of Prayer USA",
    excerpt:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehen in voluptate velit esse cillum...",
    slug: "world-day-of-prayer",
    image: "/images/case-studies/world-day-prayer.jpg",
  },
  {
    id: 3,
    title: "Federation Protestant Welfare Agencies",
    excerpt:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehen in...",
    slug: "federation-protestant",
    image: "/images/case-studies/federation.jpg",
  },
];

// Podcasts data
const podcasts = [
  {
    id: 1,
    title: "Podcast Name | Episode 3",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "episode-3",
  },
  {
    id: 2,
    title: "Podcast Name | Episode 2",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "episode-2",
  },
  {
    id: 3,
    title: "Podcast Name | Episode 1",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "episode-1",
  },
];

// Other work data
const otherWork = [
  {
    id: 1,
    title: "Emerald Cities Collaborative",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "emerald-cities",
  },
  {
    id: 2,
    title: "Urban League of Union County",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore",
    slug: "urban-league",
  },
  {
    id: 3,
    title: "Outdoor Equity Alliance",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "outdoor-equity",
  },
  {
    id: 4,
    title: "New Jersey School Age Care Coalition",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore",
    slug: "nj-school-age",
  },
  {
    id: 5,
    title: "King's Daughters Day School",
    description:
      "Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "kings-daughters",
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[400px] md:h-[480px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy" />

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
          className="right-[200px] bottom-[40px] hidden lg:block"
          delay={0.8}
          floatRange={8}
          duration={4.5}
        />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <motion.div
            className="max-w-[800px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] tracking-[0.02em] text-white mb-6">
              Our library of work &amp; educational tools
            </h1>
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] text-gray-200 max-w-[700px]">
              You get targeted support across strategy, leadership, governance,
              and fundraising. Each engagement aligns people, systems, and
              resources. Each service includes assessment, planning, support,
              and tools you can use immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[60px] bg-white rounded-t-[65px] pt-16 pb-0">
        {/* ============ CASE STUDIES SECTION ============ */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-28 pb-20">
          <FadeIn>
            <div className="mb-8">
              <h2 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-dark mb-4">
                Case Studies
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray-600 max-w-[600px]">
                View our growing library of playbooks covering topics from board
                fundraising to recruitment
              </p>
            </div>

            {/* Gold divider */}
            <motion.div
              className="w-[200px] h-0 border-[2px] border-gold mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </FadeIn>

          {/* Case Studies Grid */}
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study) => (
              <StaggerItem key={study.id}>
                <motion.article
                  className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image area */}
                  <div className="h-[220px] relative overflow-hidden bg-gradient-to-br from-navy via-blue to-navy">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-bold text-[20px] leading-[28px] text-dark mb-3">
                      {study.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-[16px] leading-[24px] mb-6 flex-grow">
                      {study.excerpt}
                    </p>

                    {/* Read More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-blue font-semibold cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read more</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.166 10H15.833M15.833 10L10 4.167M15.833 10L10 15.833"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ============ PODCASTS SECTION - Navy Background ============ */}
        <section className="w-full bg-navy relative py-16 overflow-hidden">
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

          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 relative z-10">
            <FadeIn>
              <div className="mb-8">
                <h2 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-white mb-4">
                  Podcasts
                </h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray-300">
                  Interested in learning while on-the-go?
                </p>
              </div>

              {/* Gold divider */}
              <motion.div
                className="w-[200px] h-0 border-[2px] border-gold mb-12"
                initial={{ width: 0 }}
                whileInView={{ width: 200 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </FadeIn>

            {/* Podcasts Grid */}
            <StaggerChildren
              staggerDelay={0.15}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {podcasts.map((podcast) => (
                <StaggerItem key={podcast.id}>
                  <motion.div
                    className="bg-white rounded-[24px] p-6 h-full flex flex-col"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Title */}
                    <h3 className="font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-dark mb-3">
                      {podcast.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] mb-6 flex-grow">
                      {podcast.description}
                    </p>

                    {/* Listen Button */}
                    <motion.button
                      className="bg-gold text-dark font-bold text-[14px] md:text-[16px] px-6 py-3 rounded-full self-start"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Listen
                    </motion.button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ============ OTHER WORK SECTION ============ */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-28 py-20">
          <FadeIn>
            <div className="mb-8">
              <h2 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-dark mb-4">
                Other
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray-600 max-w-[600px]">
                A collection of some of our most prominent work and their
                stories
              </p>
            </div>

            {/* Gold divider */}
            <motion.div
              className="w-[200px] h-0 border-[2px] border-gold mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </FadeIn>

          {/* Other Work Grid - First row: 3 items */}
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {otherWork.slice(0, 3).map((work) => (
              <StaggerItem key={work.id}>
                <motion.div
                  className="bg-[#EBEBEB] rounded-[24px] p-6 h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Title */}
                  <h3 className="font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-dark mb-3">
                    {work.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] mb-6 flex-grow">
                    {work.description}
                  </p>

                  {/* View Button */}
                  <motion.button
                    className="bg-navy text-white font-bold text-[14px] md:text-[16px] px-6 py-3 rounded-full self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Other Work Grid - Second row: 2 items centered */}
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto"
          >
            {otherWork.slice(3, 5).map((work) => (
              <StaggerItem key={work.id}>
                <motion.div
                  className="bg-[#EBEBEB] rounded-[24px] p-6 h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Title */}
                  <h3 className="font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-dark mb-3">
                    {work.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] mb-6 flex-grow">
                    {work.description}
                  </p>

                  {/* View Button */}
                  <motion.button
                    className="bg-navy text-white font-bold text-[14px] md:text-[16px] px-6 py-3 rounded-full self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* White bar separator */}
        <div className="w-full h-[16px] bg-white" />

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
                  Schedule a<br />
                  strategy session.
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
            <Link href="/contact" className="block">
              <motion.div
                className="bg-gold h-[200px] md:h-[248px] flex flex-col items-center justify-center px-6 md:px-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="max-w-[327px] font-bold text-[20px] md:text-[26px] leading-[28px] md:leading-[38px] text-center tracking-[-0.005em] text-black mb-4 md:mb-5">
                  Request
                  <br />a proposal.
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
                  Download our
                  <br />
                  services overview
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
