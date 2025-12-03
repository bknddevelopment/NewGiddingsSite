import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/newsletter", label: "Newsletter" },
  ],
  services: [
    { href: "/services#strategic-planning", label: "Strategic Planning" },
    { href: "/services#board-development", label: "Board Development" },
    { href: "/services#leadership", label: "Leadership Development" },
    { href: "/services#fund-development", label: "Fund Development" },
    { href: "/services#social-impact", label: "Social Impact Strategy" },
  ],
};

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-28 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/logo-white.png"
                alt="Giddings Consulting Group"
                width={184}
                height={58}
                className="h-[50px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Strengthening organizations working for equity and community impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Elizabeth, New Jersey
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@giddingsconsulting.com"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  info@giddingsconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Giddings Consulting Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
