"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeIn, FloatingCircle } from "@/components/animations";
import { motion } from "framer-motion";
import { BlogPost, getAllBlogPosts } from "@/lib/blog-data";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  // Get related posts (other posts in same category, excluding current)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Share URLs
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="w-full bg-white">
      <Header />

      {/* ============ HERO SECTION with Featured Image ============ */}
      <section className="relative w-full overflow-hidden">
        {/* Featured Image Background */}
        {post.featuredImage ? (
          <div className="relative w-full h-[480px] md:h-[500px]">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
          </div>
        ) : (
          <div className="relative w-full h-[480px] md:h-[500px] bg-navy">
            {/* Animated Decorative Circles for fallback */}
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
          </div>
        )}

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-28 pb-28 md:pb-24 w-full">
            <motion.div
              className="max-w-[900px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Back to Blog Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Insights</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-gold text-dark px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-bold text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] tracking-[0.01em] text-white mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-200 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-medium text-white">
                      {post.author}
                    </span>
                    <p className="text-gray-400 text-sm">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Photo Credit */}
        {post.featuredImageCredit && (
          <div className="absolute bottom-4 right-6 text-gray-400 text-xs">
            {post.featuredImageCredit}
          </div>
        )}
      </section>

      {/* ============ CONTENT AREA with rounded top ============ */}
      <div className="relative -mt-[60px] bg-white rounded-t-[65px] pt-12 md:pt-16 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-28">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content Column */}
              <article className="flex-1 max-w-[800px]">
                {/* Key Takeaways Box */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                  <motion.div
                    className="bg-gradient-to-br from-navy/5 to-blue/5 border border-navy/10 rounded-[24px] p-6 md:p-8 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-gold" />
                      </div>
                      <h2 className="font-bold text-xl text-dark">
                        Key Takeaways
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {post.keyTakeaways.map((takeaway, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{takeaway}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Article Content */}
                <div
                  className="prose prose-lg prose-headings:text-dark prose-headings:font-bold prose-h2:text-[26px] prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-[20px] prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-dark prose-ul:text-gray-700 prose-li:mb-2 prose-a:text-blue prose-a:no-underline hover:prose-a:underline max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: formatContent(post.content),
                  }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Share Section */}
                <motion.div
                  className="mt-8 p-6 bg-gray-50 rounded-[20px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-dark">
                        Share this article
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`}
                        className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Author Box */}
                <motion.div
                  className="mt-12 bg-navy/5 rounded-[24px] p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-3xl font-bold">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-blue text-sm font-medium uppercase tracking-wider mb-1">
                        About the Author
                      </p>
                      <h3 className="font-bold text-2xl text-dark mb-1">
                        {post.author}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.authorRole}</p>
                      <p className="text-gray-700 leading-relaxed">
                        Drew Giddings brings over 15 years of experience working
                        with mission-driven organizations to strengthen their
                        capacity for equity and community impact. His work
                        focuses on helping nonprofits build sustainable
                        strategies that center community voice and create
                        lasting change.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  className="mt-12 bg-navy rounded-[24px] p-8 md:p-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
                    Ready to Transform Your Organization?
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                    Let&apos;s discuss how equity-centered strategic planning
                    can strengthen your mission and community impact.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/90 transition-colors"
                  >
                    Schedule a Consultation
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
                  </Link>
                </motion.div>
              </article>

              {/* Sidebar - Related Articles (Desktop) */}
              {relatedPosts.length > 0 && (
                <aside className="lg:w-[320px] flex-shrink-0">
                  <div className="lg:sticky lg:top-24">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h3 className="font-bold text-xl text-dark mb-6 pb-4 border-b border-gray-200">
                        Related Articles
                      </h3>
                      <div className="space-y-6">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            href={`/blog/${relatedPost.slug}`}
                            className="block group"
                          >
                            <article className="bg-gray-50 rounded-[16px] p-5 hover:bg-gray-100 transition-colors">
                              <span className="text-gold text-sm font-medium">
                                {relatedPost.category}
                              </span>
                              <h4 className="font-semibold text-dark mt-2 mb-2 group-hover:text-blue transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {relatedPost.readTime}
                              </p>
                            </article>
                          </Link>
                        ))}
                      </div>

                      {/* Newsletter Signup */}
                      <div className="mt-8 bg-gradient-to-br from-navy to-blue rounded-[20px] p-6 text-white">
                        <h4 className="font-bold text-lg mb-2">
                          Get Our Insights
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">
                          Subscribe for the latest on nonprofit strategy and
                          equity.
                        </p>
                        <Link
                          href="/newsletter"
                          className="inline-flex items-center gap-2 bg-gold text-dark px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors"
                        >
                          Subscribe
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </aside>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Simple markdown to HTML converter for the blog content
function formatContent(content: string): string {
  return (
    content
      // Convert headers
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      // Convert bold text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Convert links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      // Convert bullet points
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      // Wrap consecutive li elements in ul
      .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
      // Convert paragraphs (double newlines)
      .replace(/\n\n/g, "</p><p>")
      // Wrap in paragraph tags
      .replace(/^/, "<p>")
      .replace(/$/, "</p>")
      // Clean up empty paragraphs
      .replace(/<p><\/p>/g, "")
      .replace(/<p>\s*<h/g, "<h")
      .replace(/<\/h([23])>\s*<\/p>/g, "</h$1>")
      .replace(/<p>\s*<ul>/g, "<ul>")
      .replace(/<\/ul>\s*<\/p>/g, "</ul>")
  );
}
