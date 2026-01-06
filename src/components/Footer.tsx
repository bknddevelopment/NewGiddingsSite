"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";
import { getImagePath } from "@/lib/utils";
import { motion } from "framer-motion";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <motion.div
        className="max-w-[1440px] mx-auto px-6 lg:px-28 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div className="space-y-6" variants={columnVariants}>
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src={getImagePath("/images/logo-white.png")}
                  alt="Giddings Consulting Group"
                  width={184}
                  height={58}
                  className="h-[50px] w-auto brightness-0 invert"
                />
              </motion.div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Strengthening organizations working for equity and community
              impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "#3490F3",
                    boxShadow: "0 0 20px rgba(52, 144, 243, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={columnVariants}>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors relative group inline-block"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-[-2px] left-0 h-[2px] bg-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={columnVariants}>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors relative group inline-block"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-[-2px] left-0 h-[2px] bg-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={columnVariants}>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-gray-300">Elizabeth, New Jersey</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                </motion.div>
                <a
                  href="mailto:info@giddingsconsulting.com"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  info@giddingsconsulting.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Giddings Consulting Group. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gold transition-colors relative group"
            >
              Privacy Policy
              <motion.span
                className="absolute bottom-[-2px] left-0 h-[1px] bg-gold"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gold transition-colors relative group"
            >
              Terms of Service
              <motion.span
                className="absolute bottom-[-2px] left-0 h-[1px] bg-gold"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>
        </motion.div>

        {/* Developer Credit */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-500 text-xs">
            Site by{" "}
            <a
              href="https://bknddevelopment.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              BKND Development
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
