'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

export default function PrendreRdvPage() {
  return (
    <>
      <Navbar />
      
      <Section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-4 font-title">
              Me contacter
            </h1>
            <p className="text-xl text-text-2 max-w-2xl mx-auto">
              Tous mes services sont disponibles à distance
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gold mb-6 font-title text-center">
                Contactez-moi sur mes réseaux sociaux
              </h2>
              
              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/Angeline.NJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 p-4 bg-surface rounded-lg hover:bg-surface/80 transition-all border border-border hover:border-gold-2"
                >
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-text">Instagram</div>
                    <div className="text-sm text-muted">@Angeline.NJ</div>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@angeline.nj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 p-4 bg-surface rounded-lg hover:bg-surface/80 transition-all border border-border hover:border-gold-2"
                >
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-text">TikTok</div>
                    <div className="text-sm text-muted">@angeline.nj</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@angeline-nj.xyz"
                  className="flex items-center justify-center space-x-4 p-4 bg-surface rounded-lg hover:bg-surface/80 transition-all border border-border hover:border-gold-2"
                >
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-text">Email</div>
                    <div className="text-sm text-muted">contact@angeline-nj.xyz</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-gold-2/20">
                <p className="text-text-2 text-center">
                  <strong className="text-gold">Service 100% à distance</strong><br/>
                  Contactez-moi sur Instagram ou TikTok pour toute demande de consultation, tirage ou soin Reiki.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
