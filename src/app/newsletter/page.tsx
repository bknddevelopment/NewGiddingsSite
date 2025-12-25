"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import { motion, AnimatePresence } from "framer-motion";

// Newsletter benefits with checkmarks
const newsletterBenefits = [
  "New strategies you can apply now",
  "Real examples from current client work",
  "Invitations to convenings and workshops",
  "Leadership and governance tips",
  "Funding trends and sector updates",
];

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background with navy color blend */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero-bg.jpg")}
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
          className="right-[60px] top-[50px]"
          delay={0.6}
          floatRange={6}
          duration={3.5}
        />
        <FloatingCircle
          size={51}
          color="#964C2D"
          className="right-[200px] bottom-[60px]"
          delay={0.8}
          floatRange={8}
          duration={4.5}
        />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <motion.div
            className="max-w-[726px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Let&apos;s stay <AnimatedUnderline delay={0.8}><span>connected!</span></AnimatedUnderline>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============ WHITE CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[77px] bg-white rounded-t-[65px] pt-12 pb-0">
        {/* Main Content Section */}
        <section className="py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Info */}
              <div className="flex-1">
                {/* Description */}
                <FadeIn>
                  <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8 max-w-[500px]">
                    You want practical insights that strengthen your leadership and your organization. <strong>Our newsletter gives you short, real-value updates.</strong> You get tools, client wins, upcoming convenings, and lessons from the field. Each issue helps you stay ahead of shifts across equity, climate, fundraising, and community impact.
                  </p>
                </FadeIn>

                {/* You get header */}
                <FadeIn delay={0.1}>
                  <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-6">
                    You get:
                  </p>
                </FadeIn>

                {/* Checkbox list with blue badge checkmark icons */}
                <StaggerChildren staggerDelay={0.1} className="space-y-4 mb-8">
                  {newsletterBenefits.map((benefit, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Blue badge/seal checkmark icon - using image */}
                        <motion.div
                          className="w-[48px] h-[48px] flex-shrink-0"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                        >
                          <Image
                            src={getImagePath("/images/icons/newsletter_checkmark.png")}
                            alt=""
                            width={48}
                            height={48}
                            className="w-full h-full"
                          />
                        </motion.div>
                        <p className="font-normal text-[18px] leading-[26px] text-dark">
                          {benefit}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>

              {/* Right Column - Form */}
              <FadeIn direction="left" delay={0.2}>
                <div className="w-full lg:w-[608px] flex-shrink-0">
                  {/* Navy header pill */}
                  <motion.div
                    className="bg-navy rounded-[237px] h-[117px] flex flex-col items-center justify-center px-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-bold text-[24px] leading-[32px] text-center text-white">
                      Subscribe to stay connected.
                    </p>
                    <p className="font-normal text-[16px] leading-[24px] text-center text-gray-300">
                      Stay informed. Stay prepared for your next move.
                    </p>
                  </motion.div>

                  {/* Gray form area */}
                  <motion.div
                    className="bg-gray-100 rounded-[32px] p-8 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          className="text-center py-12"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                          >
                            <motion.svg
                              className="w-10 h-10 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </motion.svg>
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold text-dark mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            You&apos;re subscribed!
                          </motion.h3>
                          <motion.p
                            className="text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            Thank you for joining our community. You&apos;ll receive our next newsletter soon.
                          </motion.p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          onSubmit={handleSubmit}
                          className="space-y-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {/* Form header */}
                          <h3 className="font-bold text-[24px] leading-[32px] text-center text-dark mb-4">
                            You don&apos;t want to miss an issue.
                          </h3>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <label htmlFor="name" className="block font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-2">
                              Name
                            </label>
                            <motion.input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full h-[48px] px-6 rounded-[128px] bg-gray-100 border-2 border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-all"
                              placeholder=""
                              whileFocus={{ scale: 1.02 }}
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <label htmlFor="email" className="block font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-2">
                              Email address
                            </label>
                            <motion.input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full h-[48px] px-6 rounded-[128px] bg-gray-100 border-2 border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none transition-all"
                              placeholder=""
                              whileFocus={{ scale: 1.02 }}
                            />
                          </motion.div>

                          <motion.button
                            type="submit"
                            className="w-full h-[48px] bg-gold text-dark font-bold text-[18px] rounded-[128px] flex items-center justify-center gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(252, 186, 4, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Join
                            <motion.svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                              <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          </motion.button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Blue and Brown decorative arrow lines */}
        <div className="relative w-full h-[180px] mt-16 mb-24">
          {/* Blue arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-0"
            style={{ width: "75%" }}
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
          {/* Brown arrow line - using image */}
          <motion.div
            className="absolute -left-4 top-[80px]"
            style={{ width: "68%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src={getImagePath("/images/icons/arrow_chestnut.png")}
              alt=""
              width={1218}
              height={55}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
