'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { calculateMoonPhase, getLunarCalendar, getNextFullMoon, getNextNewMoon, LunarDay } from '@/lib/lunar/calendar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CalendrierLunairePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState<LunarDay[]>([]);
  const [currentPhase, setCurrentPhase] = useState(calculateMoonPhase());
  const [nextFullMoon, setNextFullMoon] = useState<Date>(new Date());
  const [nextNewMoon, setNextNewMoon] = useState<Date>(new Date());

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCalendar(getLunarCalendar(year, month));
    setCurrentPhase(calculateMoonPhase());
    setNextFullMoon(getNextFullMoon());
    setNextNewMoon(getNextNewMoon());
  }, [currentDate]);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 font-title">
              Calendrier Lunaire
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Suivez les phases de la Lune et planifiez vos rituels selon les cycles lunaires
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-7xl mb-4">{currentPhase.emoji}</div>
              <h3 className="text-2xl font-bold text-gold mb-2 font-title">{currentPhase.name}</h3>
              <p className="text-text-2 mb-4">{currentPhase.description}</p>
              <div className="text-sm text-text-2">
                <p>Illumination: {currentPhase.illumination}%</p>
                <p>Âge lunaire: {currentPhase.age} jours</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-gold mb-4 font-title text-center">Prochaines Phases</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌕</span>
                    <div>
                      <p className="font-semibold text-text">Pleine Lune</p>
                      <p className="text-sm text-text-2">{nextFullMoon.toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌑</span>
                    <div>
                      <p className="font-semibold text-text">Nouvelle Lune</p>
                      <p className="text-sm text-text-2">{nextNewMoon.toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-gold mb-4 font-title text-center">Énergie Actuelle</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-text-2 mb-1">Énergie:</p>
                  <p className="text-text">{currentPhase.energy}</p>
                </div>
                <div>
                  <p className="text-sm text-text-2 mb-1">Rituels recommandés:</p>
                  <p className="text-text">{currentPhase.ritual}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <button onClick={previousMonth} className="btn-gold">
                <span>← Mois précédent</span>
              </button>
              <h2 className="text-2xl font-bold text-gold font-title">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button onClick={nextMonth} className="btn-gold">
                <span>Mois suivant →</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map(day => (
                <div key={day} className="text-center font-semibold text-gold p-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="p-2"></div>
              ))}
              
              {calendar.map((day, index) => {
                const isToday = day.date.toDateString() === new Date().toDateString();
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center transition-all hover:scale-105 ${
                      isToday ? 'bg-primary/20 border-2 border-primary' : 'bg-surface/30'
                    } ${day.isSpecial ? 'border-2 border-gold' : ''}`}
                  >
                    <div className="text-sm font-semibold text-text mb-1">
                      {day.date.getDate()}
                    </div>
                    <div className="text-2xl mb-1">{day.phase.emoji}</div>
                    {day.isSpecial && (
                      <div className="text-xs text-gold font-semibold">
                        {day.phase.name}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-primary/5"
          >
            <h3 className="text-2xl font-bold text-gold mb-4 font-title text-center">
              Rituels Lunaires Personnalisés
            </h3>
            <p className="text-text-2 text-center mb-6">
              Découvrez comment travailler avec les énergies lunaires de manière personnalisée. 
              Je vous guide pour créer vos rituels adaptés à votre thème astral et vos intentions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Guidance Lunaire (35€)</span>
              </Link>
              <Link href="/boutique/bougies" className="btn-gold">
                <span>Bougies Rituelles</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
