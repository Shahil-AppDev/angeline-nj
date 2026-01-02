import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { blogPosts } from '@/data/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Angeline NJ`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['Angeline NJ'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}
