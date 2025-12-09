"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";

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

        {/* Decorative Circles */}
        <div className="absolute w-[127px] h-[127px] -right-16 top-[140px] rounded-full bg-gold" />
        <div className="absolute w-[51px] h-[51px] right-[60px] top-[50px] rounded-full bg-blue" />
        <div className="absolute w-[51px] h-[51px] right-[200px] bottom-[60px] rounded-full bg-brown" />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-28 h-full flex items-center">
          <div className="max-w-[726px]">
            <h1 className="font-bold text-[32px] md:text-[36px] leading-[44px] md:leading-[48px] tracking-[0.05em] text-white">
              Let&apos;s stay <span className="relative inline-block">connected!<span className="absolute left-0 -bottom-1 w-full h-[7px] bg-gold"></span></span>
            </h1>
          </div>
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
                <p className="font-normal text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-8 max-w-[500px]">
                  You want practical insights that strengthen your leadership and your organization. <strong>Our newsletter gives you short, real-value updates.</strong> You get tools, client wins, upcoming convenings, and lessons from the field. Each issue helps you stay ahead of shifts across equity, climate, fundraising, and community impact.
                </p>

                {/* You get header */}
                <p className="font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-6">
                  You get:
                </p>

                {/* Checkbox list with blue badge checkmark icons */}
                <div className="space-y-4 mb-8">
                  {newsletterBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {/* Blue badge/seal checkmark icon */}
                      <div className="w-[48px] h-[48px] flex-shrink-0">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Smooth wavy badge shape */}
                          <path d="M20 1C21.8 1 23 4 24.8 5.2C26.6 6.4 30 5.2 31.2 7C32.4 8.8 30.6 11.8 31.2 14C31.8 16.2 35 17.2 35 19.5C35 21.8 31.8 22.8 31.2 25C30.6 27.2 32.4 30.2 31.2 32C30 33.8 26.6 32.6 24.8 33.8C23 35 21.8 38 20 38C18.2 38 17 35 15.2 33.8C13.4 32.6 10 33.8 8.8 32C7.6 30.2 9.4 27.2 8.8 25C8.2 22.8 5 21.8 5 19.5C5 17.2 8.2 16.2 8.8 14C9.4 11.8 7.6 8.8 8.8 7C10 5.2 13.4 6.4 15.2 5.2C17 4 18.2 1 20 1Z" fill="#3490F3"/>
                          {/* Checkmark */}
                          <path d="M27 15L17 25L13 21" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="font-normal text-[18px] leading-[26px] text-dark">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="w-full lg:w-[608px] flex-shrink-0">
                {/* Navy header pill */}
                <div className="bg-navy rounded-[237px] h-[117px] flex flex-col items-center justify-center px-6">
                  <p className="font-bold text-[24px] leading-[32px] text-center text-white">
                    Subscribe to stay connected.
                  </p>
                  <p className="font-normal text-[16px] leading-[24px] text-center text-gray-300">
                    Stay informed. Stay prepared for your next move.
                  </p>
                </div>

                {/* Gray form area */}
                <div className="bg-gray-100 rounded-[32px] p-8 mt-4">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-dark mb-4">You&apos;re subscribed!</h3>
                      <p className="text-gray-600">
                        Thank you for joining our community. You&apos;ll receive our next newsletter soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form header */}
                      <h3 className="font-bold text-[24px] leading-[32px] text-center text-dark mb-4">
                        You don&apos;t want to miss an issue.
                      </h3>

                      <div>
                        <label htmlFor="name" className="block font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-[48px] px-6 rounded-[128px] bg-gray-100 border-2 border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                          placeholder=""
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-bold text-[18px] leading-[26px] tracking-[-0.02em] text-dark mb-2">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-[48px] px-6 rounded-[128px] bg-gray-100 border-2 border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                          placeholder=""
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-[48px] bg-gold text-dark font-bold text-[18px] rounded-[128px] hover:opacity-90 transition-colors flex items-center justify-center gap-3"
                      >
                        Join
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                          <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blue and Brown decorative arrow lines */}
        <div className="relative w-full h-[120px] overflow-hidden mt-16">
          {/* Blue arrow line */}
          <div className="absolute left-0 top-[20px] w-[75%] flex items-center">
            <div className="flex-1 h-[16px] bg-blue" />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '32px solid #3490F3',
              }}
            />
          </div>
          {/* Brown arrow line */}
          <div className="absolute left-0 top-[65px] w-[68%] flex items-center">
            <div className="flex-1 h-[16px] bg-brown" />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '32px solid #964C2D',
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
