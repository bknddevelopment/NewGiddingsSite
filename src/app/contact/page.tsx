"use client";

import { useState } from "react";
import { ArrowRight, Mail, Calendar, Users } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    needs: "",
    goals: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h1 className="text-4xl md:text-[36px] font-bold mb-4">
            Let&apos;s stay connected!
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            You want tools, insights, and practical strategies that strengthen your work. We share updates that matter to mission-driven leaders.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/3 w-[127px] h-[127px] bg-gold rounded-full translate-x-1/2" />
        <div className="absolute right-20 top-1/4 w-[51px] h-[51px] bg-blue rounded-full" />
      </section>

      {/* Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-[28px] font-bold text-dark mb-8">Work with us</h2>

              <p className="text-lg font-bold text-dark mb-6">
                If you want support with strategy, leadership, fundraising, or partnership development, complete the form below.
              </p>

              <p className="text-lg font-bold text-dark mb-8">
                We look forward to hearing from you.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Your timeline</h3>
                    <p className="text-gray-600">Tell us when you need support</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">What you need</h3>
                    <p className="text-gray-600">Share your specific challenges</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">Your goals</h3>
                    <p className="text-gray-600">Describe what success looks like</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="font-bold text-dark mb-4">How we can support your next step</h3>
                <ul className="space-y-3 text-dark">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                    <span>Strategic planning and organizational development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                    <span>Board development and governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                    <span>Leadership coaching and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                    <span>Fund development and philanthropic strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                    <span>Partnership building and coalition development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-100 rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block font-bold text-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block font-bold text-dark mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="needs" className="block font-bold text-dark mb-2">
                    What you need
                  </label>
                  <select
                    id="needs"
                    name="needs"
                    value={formData.needs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="strategic-planning">Strategic Planning</option>
                    <option value="board-development">Board Development</option>
                    <option value="leadership">Leadership Development</option>
                    <option value="fundraising">Fund Development</option>
                    <option value="partnerships">Partnership Building</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block font-bold text-dark mb-2">
                    Your goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none resize-none"
                    placeholder="What does success look like for you?"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block font-bold text-dark mb-2">
                    Your timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none bg-white"
                  >
                    <option value="">Select a timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="quarter">This quarter</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-bold text-dark mb-2">
                    Additional information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-1 focus:ring-blue outline-none resize-none"
                    placeholder="Tell us more about your organization and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue text-white font-bold py-4 rounded-full hover:bg-blue/90 transition-colors flex items-center justify-center gap-2"
                >
                  Submit Inquiry <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
