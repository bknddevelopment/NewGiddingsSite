import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Download, Mail, CheckCircle } from "lucide-react";

// Service Icons Component
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    strategic: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 34L24 44L44 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24L24 34L44 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    board: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="18" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    leadership: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 42C10 34.268 16.268 28 24 28C31.732 28 38 34.268 38 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    fund: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 20C18 17.5 20.5 16 24 16C27.5 16 30 17.5 30 20C30 22.5 27.5 24 24 24C20.5 24 18 25.5 18 28C18 30.5 20.5 32 24 32C27.5 32 30 30.5 30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    impact: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[type] || icons.strategic;
}

const services = [
  { type: "strategic", title: "Strategic and Organizational Planning" },
  { type: "board", title: "Board Development and Governance" },
  { type: "leadership", title: "Leadership and Executive Development" },
  { type: "fund", title: "Fund Development and Philanthropic Strategy" },
  { type: "impact", title: "Social Impact Strategy and Partnership Building" },
];

const approachSteps = [
  { title: "Listen", description: "Understanding your goals and challenges" },
  { title: "Assess", description: "Study your context and current state" },
  { title: "Build Strategy", description: "Develop actionable plans with your team" },
  { title: "Strengthen Leadership", description: "Build capacity across your organization" },
  { title: "Support Implementation", description: "Guide execution and change management" },
  { title: "Measure Progress", description: "Track outcomes and refine approach" },
];

const whoWeServe = [
  "Community-based Nonprofits",
  "Foundations and Philanthropic Entities",
  "Schools and Educational Institutions",
  "Government Agencies",
  "Faith-based Organizations",
  "Social Movements and Coalitions",
];

const impactStats = [
  { number: "100+", label: "Organizations Served" },
  { number: "Millions", label: "Leveraged to strengthen programs and communities" },
  { number: "Dozens", label: "of boards received training" },
  { number: "Strategic", label: "Strategic fundraising frameworks built for local, national, and global organizations" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[660px] flex items-center">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/20" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-[211px] h-[211px] bg-blue rounded-full -translate-x-1/4 translate-y-1/4 z-10" />
        <div className="absolute right-0 top-1/3 w-[127px] h-[127px] bg-gold rounded-full translate-x-1/2 z-10" />
        <div className="absolute right-20 top-1/4 w-[51px] h-[51px] bg-blue rounded-full z-10" />
        <div className="absolute right-48 bottom-20 w-[51px] h-[51px] bg-brown rounded-full z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-28 py-20">
          <div className="max-w-3xl">
            <div className="w-32 h-[7px] bg-gold mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-[36px] font-bold text-white leading-tight mb-8">
              Giddings Consulting Group strengthens organizations working for equity and community impact.
            </h1>
            <div className="w-96 h-[7px] bg-gold mb-8" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative -mt-20 z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="bg-white rounded-t-[65px] pt-16 pb-12 px-8 lg:px-16 text-center">
            <p className="text-lg text-dark max-w-3xl mx-auto">
              You want clarity. Strong leadership. Sustainable funding. We help you build the systems, partnerships, and strategy to move your mission forward.
            </p>
            <div className="w-[300px] h-[2px] bg-gold mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-4">What We Do</h2>
          <p className="text-lg text-dark mb-12 max-w-4xl">
            You get support across strategy, leadership, governance, and fundraising. You leave with aligned teams. Better decisions. Clear priorities. A stronger organization.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-[112px] h-[112px] rounded-full bg-blue flex items-center justify-center mb-4">
                  <ServiceIcon type={service.type} />
                </div>
                <p className="text-lg text-dark">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">Why Organizations Work With Us</h2>

          <p className="text-lg text-dark mb-8 max-w-5xl">
            The social sector faces complex pressure. More demand. Limited resources. Boards needing direction. Fundraising stuck in short cycles. Leaders stretched thin. You need practical solutions that increase alignment and impact.
          </p>

          <p className="text-lg font-bold text-dark mb-6">We bring:</p>

          {/* Stats Bars */}
          <div className="space-y-4">
            <div className="bg-gray-200/50 rounded-full py-5 px-8">
              <p className="font-bold text-dark text-center">
                More than 20 years of experience across 100 organizations
              </p>
            </div>
            <div className="bg-gray-200/50 rounded-full py-5 px-8">
              <p className="font-bold text-dark text-center">
                Millions in philanthropic revenue supported
              </p>
            </div>
            <div className="bg-gray-200/50 rounded-full py-5 px-8">
              <p className="font-bold text-dark text-center">
                Work across the United States and the African diaspora
              </p>
            </div>
            <div className="bg-gray-200/50 rounded-full py-5 px-8">
              <p className="font-bold text-dark text-center">
                Deep expertise in equity, climate resilience, economic inclusion, and community transformation
              </p>
            </div>
            <div className="bg-gray-200/50 rounded-full py-5 px-8">
              <p className="font-bold text-dark text-center">
                A consistent track record helping leaders build stronger systems and better results
              </p>
            </div>
          </div>

          <div className="w-full h-[2px] bg-gold mt-12 mb-8" />

          <p className="text-lg font-bold text-dark">
            You get simple steps. Straight talk. Measurable outcomes.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-12">Our Approach</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {approachSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">Who We Serve</h2>

          <p className="text-lg text-dark mb-12 max-w-5xl">
            Networks working in climate, equity, economic justice, and community resilience
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {whoWeServe.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue flex-shrink-0" />
                <span className="font-bold text-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Snapshot Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold mb-12">Impact Snapshot</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-gold mb-4">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiative - GoodTrouble Program */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-6">Featured Initiative</h2>
          <h3 className="text-2xl font-bold text-dark mb-8">GoodTrouble Social Impact Apprenticeship Program.</h3>

          <p className="text-lg text-dark mb-8 max-w-4xl">
            Three emerging leaders. Real client work. Practical training in strategy, philanthropy, and community engagement. Building the next generation of social impact professionals.
          </p>

          <div className="bg-gray-200 rounded-2xl p-12 text-center">
            <p className="text-2xl text-gray-500 italic">
              [imagery showcasing apprenticeship program in action in a rotating carousel]
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="grid md:grid-cols-3 gap-8">
            {/* CTA 1 - Schedule Session */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Schedule a 60-minute strategy session.
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue font-bold hover:gap-4 transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA 2 - Download Checklist */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Download our Board Governance Checklist.
              </h3>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-blue font-bold hover:gap-4 transition-all"
              >
                Download Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA 3 - Mailing List */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brown flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Join our mailing list for tools and insights.
              </h3>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 text-blue font-bold hover:gap-4 transition-all"
              >
                Subscribe <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="bg-gray-100 rounded-2xl p-12">
            <blockquote className="text-lg text-dark italic max-w-4xl mx-auto text-center">
              &ldquo;Having worked on the forefront of creating social change through community outreach and engagement – we have helped build capacity and leadership within organizations and coalitions working for equity and justice.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
