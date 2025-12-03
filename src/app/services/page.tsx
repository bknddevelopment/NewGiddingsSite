import Link from "next/link";
import { ArrowRight, Target, Users, Briefcase, DollarSign, Handshake } from "lucide-react";

const services = [
  {
    id: "strategic-planning",
    icon: Target,
    title: "Strategic and Organizational Planning",
    description: "Develop clear, actionable strategies that align your team, focus resources, and drive measurable impact. We facilitate planning processes that produce real results.",
    deliverables: [
      "Strategic plan development",
      "Organizational assessments",
      "Theory of change development",
      "Implementation roadmaps",
    ],
  },
  {
    id: "board-development",
    icon: Users,
    title: "Board Development and Governance",
    description: "Build an engaged, effective board that provides strategic leadership and oversight. We help boards clarify roles, improve decision-making, and strengthen governance practices.",
    deliverables: [
      "Board assessments and retreats",
      "Governance policy development",
      "Board recruitment strategies",
      "Board training and development",
    ],
  },
  {
    id: "leadership",
    icon: Briefcase,
    title: "Leadership and Executive Development",
    description: "Strengthen leadership capacity across your organization. We provide coaching, training, and development programs that build confident, effective leaders.",
    deliverables: [
      "Executive coaching",
      "Leadership team development",
      "Succession planning",
      "Management training",
    ],
  },
  {
    id: "fund-development",
    icon: DollarSign,
    title: "Fund Development and Philanthropic Strategy",
    description: "Build sustainable funding systems and deepen donor relationships. We help organizations move beyond transactional fundraising to strategic philanthropy.",
    deliverables: [
      "Fundraising strategy development",
      "Donor cultivation plans",
      "Case for support development",
      "Campaign planning and execution",
    ],
  },
  {
    id: "social-impact",
    icon: Handshake,
    title: "Social Impact Strategy and Partnership Building",
    description: "Design strategies that create meaningful community impact. We help organizations build coalitions, strengthen partnerships, and amplify their work.",
    deliverables: [
      "Coalition building",
      "Partnership development",
      "Community engagement strategies",
      "Impact measurement frameworks",
    ],
  },
];

export default function ServicesPage() {
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

      {/* How We Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <h2 className="text-[28px] font-bold text-dark mb-8">How We Support Your Mission</h2>

          <p className="text-lg text-dark mb-12 max-w-4xl">
            You get targeted support across strategy, leadership, governance, and fundraising. Each engagement adapts to your needs and builds your capacity for lasting impact.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 ${index % 2 === 0 ? "" : ""}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-blue flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                    </div>
                    <p className="text-lg text-dark mb-6">{service.description}</p>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-8">
                    <h4 className="font-bold text-dark mb-4">What you get:</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="h-px bg-gray-200 mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28 text-center">
          <h2 className="text-[28px] font-bold text-dark mb-6">Ready to strengthen your organization?</h2>
          <p className="text-lg text-dark mb-8 max-w-2xl mx-auto">
            Schedule a 60-minute strategy session to discuss your goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue text-white font-bold px-8 py-4 rounded-full hover:bg-blue/90 transition-colors"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
