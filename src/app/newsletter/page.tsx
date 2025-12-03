"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Mail, BookOpen, Calendar, Users } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "New strategies you can apply now",
    description: "Practical insights from our current client work",
  },
  {
    icon: Users,
    title: "Real examples from current client work",
    description: "Case studies and lessons learned",
  },
  {
    icon: Calendar,
    title: "Invitations to convenings and learning sessions",
    description: "Exclusive access to events and workshops",
  },
];

const topics = [
  "New client wins and case studies",
  "Upcoming convening and learning sessions",
  "Leadership and fundraising tools",
  "GoodTrouble apprenticeship updates",
  "Insights from our work across climate, equity, & community resilience",
];

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h1 className="text-4xl md:text-[36px] font-bold mb-4">
            Let&apos;s stay connected!
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            You want practical insights that strengthen your leadership and your organization. Our newsletter gives you strategies, tools, and updates that move your work forward.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/3 w-[127px] h-[127px] bg-gold rounded-full translate-x-1/2" />
        <div className="absolute right-20 top-1/4 w-[51px] h-[51px] bg-blue rounded-full" />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-lg font-bold text-dark mb-8">You get:</h2>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 mb-8">
                <h3 className="text-[28px] font-bold text-dark mb-6">Stay informed about</h3>
                <ul className="space-y-4">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                      <span className="text-dark">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-bold text-dark">
                Subscribe to stay connected. Stay informed. Stay prepared for your next move.
              </p>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">You don&apos;t want to miss an issue.</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-4">You&apos;re subscribed!</h3>
                    <p className="text-gray-600">
                      Thank you for joining our community. You&apos;ll receive our next newsletter soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-bold text-dark mb-2">
                        Name
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
                        Email address
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

                    <button
                      type="submit"
                      className="w-full bg-blue text-white font-bold py-4 rounded-full hover:bg-blue/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Join <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}

                <p className="text-sm text-gray-500 mt-6 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              <div className="mt-8 p-8 border-2 border-dashed border-gray-300 rounded-2xl text-center">
                <p className="text-lg font-bold text-dark mb-2">Share your information below.</p>
                <p className="text-gray-600">
                  We&apos;ll keep you up to date on what matters most to your mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
