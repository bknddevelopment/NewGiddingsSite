import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, Mail, CheckCircle, MapPin } from "lucide-react";

const values = [
  "Collaboration",
  "Integrity",
  "Accountability",
  "Equity",
  "Innovation",
  "Practical action",
];

const processSteps = [
  "Understand your goals and challenges",
  "Study your context",
  "Build strategy with your team",
  "Support implementation and change management",
  "Measure progress and refine",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h1 className="text-4xl md:text-[36px] font-bold mb-8">
            Giddings Consulting Group is a social impact strategy firm based in Elizabeth, New Jersey.
          </h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/3 w-[127px] h-[127px] bg-gold rounded-full translate-x-1/2" />
        <div className="absolute right-20 top-1/4 w-[51px] h-[51px] bg-blue rounded-full" />
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">Who We Are</h2>

          <p className="text-lg text-dark mb-8 max-w-4xl">
            We work with mission-driven organizations committed to equity, inclusion, and sustainable community impact. Our approach combines strategic clarity with practical execution.
          </p>

          <p className="text-lg text-dark max-w-4xl">
            We believe strong organizations lead to stronger communities. We build strategy that reflects lived experience, centers equity, and creates lasting change.
          </p>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">Our Founder</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark mb-6">
                Drew Giddings is a strategist, philanthropic advisor, and executive coach with more than two decades of experience in the social sector.
              </p>
              <p className="text-lg text-dark">
                His work spans strategic planning, leadership development, board governance, and fund development for organizations working in equity, climate resilience, and community transformation.
              </p>
            </div>
            <div className="bg-gray-300 rounded-2xl h-[400px] flex items-center justify-center">
              <p className="text-gray-500 italic">[Founder Photo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Guides Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">What Guides Us</h2>

          <div className="mb-12">
            <h3 className="text-lg font-bold text-dark mb-6">Our Values:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                  <span className="text-dark">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">How We Work</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[28px] text-dark mb-6">
                You get direct engagement from senior leadership.
                You get tools that support execution.
                You get plans that work.
              </p>
              <p className="text-[28px] text-dark">
                This approach strengthens culture, decision-making, and long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-12">Our Process</h2>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-100 rounded-full py-4 px-6">
                <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="font-bold text-dark">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold mb-8">Our Reach</h2>

          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <p className="text-lg">
              Our primary office is in Elizabeth, New Jersey.
              Our work extends across the African diaspora and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment to Emerging Leaders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">Commitment to Emerging Leaders</h2>

          <p className="text-lg text-dark max-w-4xl">
            We launched the GoodTrouble Social Impact Apprenticeship Program to support rising strategists and practitioners. Three emerging professionals gain hands-on experience with real client work, building the next generation of social impact leaders.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="grid md:grid-cols-3 gap-8">
            {/* CTA 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-blue flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Meet with our team.
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue font-bold hover:gap-4 transition-all"
              >
                Schedule Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Join our partner network.
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue font-bold hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-brown flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[26px] font-bold text-dark mb-4">
                Sign up for updates and insights.
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
    </div>
  );
}
