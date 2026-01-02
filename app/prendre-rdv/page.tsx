'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BookingFlow from '@/components/booking/BookingFlow';
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">
              Prendre rendez-vous
            </h1>
            <p className="text-xl text-text-2 max-w-2xl mx-auto">
              Réservez votre consultation en quelques clics
            </p>
          </motion.div>

          <BookingFlow />
        </div>
      </Section>

      <Footer />
    </>
  );
}
