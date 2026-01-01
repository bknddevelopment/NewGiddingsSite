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

// Placeholder blog posts - replace with actual data source later
const blogPosts = [
  {
    id: 1,
    title: "Building Stronger Boards: Governance Best Practices for 2025",
    excerpt:
      "Effective governance is the foundation of organizational success. Learn how to strengthen your board's capacity for strategic leadership.",
    date: "January 2025",
    category: "Governance",
  },
  {
    id: 2,
    title: "Equity-Centered Strategic Planning: A Practical Guide",
    excerpt:
      "How to integrate equity principles throughout your strategic planning process, from stakeholder engagement to implementation.",
    date: "December 2024",
    category: "Strategy",
  },
  {
    id: 3,
    title: "Fund Development in a Changing Landscape",
    excerpt:
      "Navigating new trends in philanthropy and building sustainable funding models for mission-driven organizations.",
    date: "November 2024",
    category: "Fundraising",
  },
];

export default function BlogPage() {
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
              Insights & Resources
            </h1>
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] text-gray-200 max-w-[600px]">
              Perspectives on strategy, equity, and organizational development
              from our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[60px] bg-white rounded-t-[65px] pt-16 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          {/* Blog Posts Grid */}
          <StaggerChildren
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Placeholder image area */}
                  <div className="h-[200px] bg-gradient-to-br from-navy to-blue flex items-center justify-center">
                    <span className="text-white/50 text-sm">Coming Soon</span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-bold text-[20px] leading-[28px] text-dark mb-3">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-[16px] leading-[24px] mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-blue font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
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

          {/* Coming Soon Message */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <motion.div
                className="inline-block bg-navy/5 rounded-[24px] px-8 py-6"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-[18px] text-dark font-medium mb-2">
                  More insights coming soon.
                </p>
                <p className="text-gray-600">
                  Sign up for our{" "}
                  <Link
                    href="/newsletter"
                    className="text-blue hover:underline"
                  >
                    newsletter
                  </Link>{" "}
                  to stay updated.
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
