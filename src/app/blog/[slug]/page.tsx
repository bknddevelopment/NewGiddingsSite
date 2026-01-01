import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

// Generate static params for all blog posts
export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
