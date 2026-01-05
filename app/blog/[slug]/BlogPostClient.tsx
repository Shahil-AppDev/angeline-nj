'use client';

import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { BlogPost } from '@/data/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPostClient({ post, relatedPosts }: { post: BlogPost, relatedPosts: BlogPost[] }) {
  return (
    <article className="min-h-screen">
      <Section className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="text-gold hover:text-gold-2 transition-colors mb-6 inline-block font-medium">
              ← Retour au blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-1 bg-gold-2/10 border border-gold-2/20 text-gold-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-6 font-title">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-text-2">
              <time>
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>Par Angeline NJ</span>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="blog-content text-text-2 leading-relaxed"
          >
            {post.sections.map((section, index) => {
              switch (section.type) {
                case 'h2':
                  return (
                    <h2 key={index} className="font-serif text-3xl font-semibold text-gold mt-12 mb-6 font-title">
                      {section.value}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={index} className="font-serif text-2xl font-semibold text-gold-1 mt-8 mb-4 font-title">
                      {section.value}
                    </h3>
                  );
                case 'p':
                  return (
                    <div 
                      key={index} 
                      className="mb-6 text-lg leading-relaxed text-text-2/90"
                      dangerouslySetInnerHTML={{ __html: section.value }} 
                    />
                  );
                case 'ul':
                  return (
                    <ul key={index} className="space-y-3 mb-8 list-none pl-4">
                      {section.value.map((item, i) => (
                        <li key={i} className="relative pl-6">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gold rounded-full" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  );
                case 'faq':
                  return (
                    <section key={index} className="my-12 p-8 bg-surface/30 rounded-xl border border-gold-2/10 backdrop-blur-sm">
                      <h2 className="font-serif text-2xl font-semibold text-gold mb-8 font-title flex items-center">
                        <span className="mr-3 text-3xl">❔</span> 
                        Questions Fréquentes
                      </h2>
                      <div className="space-y-6">
                        {section.value.map((faq, i) => (
                          <div key={i} itemScope itemType="https://schema.org/Question">
                            <h3 itemProp="name" className="font-semibold text-gold-1 mb-2 text-lg">{faq.question}</h3>
                            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                              <p itemProp="text" className="text-text-2">{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                case 'links':
                  return (
                    <div key={index} className="mt-12 p-8 bg-gradient-to-br from-gold-2/10 to-transparent border-l-4 border-gold-2 rounded-r-xl">
                      <h3 className="font-serif text-xl font-semibold text-gold mb-6 font-title flex items-center">
                        <span className="mr-2">🔗</span> Pour aller plus loin
                      </h3>
                      <ul className="space-y-4">
                        {section.value.map((linkHtml, i) => (
                          <li key={i} className="flex items-start text-text-2 group">
                            <span className="mr-3 text-gold mt-1 group-hover:translate-x-1 transition-transform">→</span>
                            <span className="link-content" dangerouslySetInnerHTML={{ __html: linkHtml }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                case 'cta':
                  return (
                    <div key={index} className="my-8 p-6 bg-primary/10 rounded-lg text-center border border-primary/20">
                      <div dangerouslySetInnerHTML={{ __html: section.value }} />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section className="py-16 border-t border-gold-2/10 mt-16">
          <div className="container-custom max-w-5xl">
            <h2 className="font-serif text-3xl font-bold text-gold mb-12 text-center font-title">
              Articles recommandés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block group">
                    <Card hover glow className="h-full overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-gold-3/20 to-gold-2/20 flex items-center justify-center text-6xl border-b border-border">
                        {relatedPost.cover}
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-gold mb-2 group-hover:text-gold-1 transition-colors font-title">
                          {relatedPost.title}
                        </h3>
                        <p className="text-text-2 text-sm line-clamp-2">
                          {relatedPost.metaDescription}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </article>
  );
}
