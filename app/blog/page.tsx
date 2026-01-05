'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { blogPosts } from '@/data/blog';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <Section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6 font-title">
              Blog & Guidance
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos articles experts sur la cartomancie, le Reiki et la spiritualité pour éclairer votre chemin quotidien.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <Card hover className="h-full overflow-hidden flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-gold-3/20 to-gold-2/20 flex items-center justify-center text-6xl border-b border-border relative overflow-hidden">
                      {post.cover.startsWith('/') ? (
                        <NextImage
                          src={post.cover}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        post.cover
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-surface border border-border text-text-2 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-semibold text-gold mb-3 group-hover:text-gold-1 transition-colors font-title">
                        {post.title}
                      </h2>
                      <p className="text-text-2 mb-4 line-clamp-3 flex-1">
                        {post.metaDescription}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <time className="text-sm text-muted block mb-4">
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <Link href={`/blog/${post.slug}`} className="btn-gold w-full block text-center">
                          <span>Lire l'article</span>
                        </Link>
                      </div>
                      <div className="hidden">
                        <span className="text-gold font-medium group-hover:text-gold-2 transition-colors flex items-center">
                          Lire l'article
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
