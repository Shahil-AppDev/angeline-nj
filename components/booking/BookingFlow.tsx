'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { prestations } from '@/lib/prestations';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Calendar from './Calendar';

interface BookingData {
  prestation?: typeof prestations[0];
  date?: string;
  time?: string;
  clientInfo?: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    message?: string;
  };
}

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectPrestation = (prestation: typeof prestations[0]) => {
    setBookingData({ ...bookingData, prestation });
    nextStep();
  };

  const selectDateTime = (date: string, time: string) => {
    setBookingData({ ...bookingData, date, time });
    nextStep();
  };

  const submitClientInfo = (clientInfo: BookingData['clientInfo']) => {
    setBookingData({ ...bookingData, clientInfo });
    nextStep();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step <= currentStep
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-muted'
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    step < currentStep ? 'bg-primary' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <span className={currentStep === 1 ? 'text-primary font-semibold' : 'text-muted'}>
            Prestation
          </span>
          <span className={currentStep === 2 ? 'text-primary font-semibold' : 'text-muted'}>
            Date & Heure
          </span>
          <span className={currentStep === 3 ? 'text-primary font-semibold' : 'text-muted'}>
            Vos informations
          </span>
          <span className={currentStep === 4 ? 'text-primary font-semibold' : 'text-muted'}>
            Paiement
          </span>
        </div>
      </div>

      {/* Steps Content */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <Step1PrestationSelection
            key="step1"
            onSelect={selectPrestation}
            selectedPrestation={bookingData.prestation}
          />
        )}
        {currentStep === 2 && (
          <Step2DateTimeSelection
            key="step2"
            onSelect={selectDateTime}
            onBack={prevStep}
            prestation={bookingData.prestation!}
          />
        )}
        {currentStep === 3 && (
          <Step3ClientInfo
            key="step3"
            onSubmit={submitClientInfo}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && (
          <Step4Payment
            key="step4"
            bookingData={bookingData}
            onBack={prevStep}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Step 1: Prestation Selection
function Step1PrestationSelection({
  onSelect,
  selectedPrestation,
}: {
  onSelect: (prestation: typeof prestations[0]) => void;
  selectedPrestation?: typeof prestations[0];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gold mb-4 text-center font-title">
        Choisissez votre prestation
      </h2>
      <p className="text-text-2 text-center mb-8">
        Sélectionnez le tirage qui correspond à votre situation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prestations.map((prestation) => (
          <div
            key={prestation.slug}
            onClick={() => onSelect(prestation)}
            className="cursor-pointer"
          >
            <Card
              hover
              className={`transition-all h-full ${
                selectedPrestation?.slug === prestation.slug
                  ? 'ring-2 ring-gold-2'
                  : ''
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{prestation.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-text mb-2">
                  {prestation.title}
                </h3>
                <p className="text-text-2 text-sm mb-4">
                  {prestation.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    {prestation.price}€
                  </span>
                  <span className="text-sm text-muted">{prestation.duration}</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Step 2: Date & Time Selection (placeholder - à implémenter avec un vrai calendrier)
function Step2DateTimeSelection({
  onSelect,
  onBack,
  prestation,
}: {
  onSelect: (date: string, time: string) => void;
  onBack: () => void;
  prestation: typeof prestations[0];
}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-3xl font-bold text-text mb-4 text-center">
        Choisissez votre créneau
      </h2>
      <p className="text-text-2 text-center mb-8">
        Prestation sélectionnée : <strong className="text-primary">{prestation.title}</strong> ({prestation.price}€)
      </p>

      <div className="mb-6">
        <Calendar
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
          minDate={new Date()}
        />
      </div>

      {selectedDate && (
        <Card className="mb-6">
          <label className="block text-text font-semibold mb-4">Heure souhaitée</label>
          <div className="grid grid-cols-4 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-text hover:border-primary'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </Card>
      )}

      <div className="flex gap-4">
        <Button variant="secondary" onClick={onBack} className="flex-1">
          Retour
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
          className="flex-1"
        >
          Continuer
        </Button>
      </div>
    </motion.div>
  );
}

// Step 3: Client Info
function Step3ClientInfo({
  onSubmit,
  onBack,
}: {
  onSubmit: (clientInfo: BookingData['clientInfo']) => void;
  onBack: () => void;
}) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-3xl font-bold text-text mb-4 text-center">
        Vos informations
      </h2>
      <p className="text-text-2 text-center mb-8">
        Merci de renseigner vos coordonnées pour finaliser la réservation
      </p>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-text font-semibold mb-2">Prénom *</label>
              <input
                type="text"
                required
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-gold-2"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label className="block text-text font-semibold mb-2">Nom *</label>
              <input
                type="text"
                required
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-gold-2"
                placeholder="Votre nom"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-text font-semibold mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="votre@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-text font-semibold mb-2">Téléphone *</label>
            <input
              type="tel"
              required
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div>
            <label className="block text-text font-semibold mb-2">Message (optionnel)</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Précisez votre demande ou vos questions..."
            />
          </div>
        </Card>

        <div className="flex gap-4">
          <Button type="button" variant="secondary" onClick={onBack} className="flex-1">
            Retour
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Continuer vers le paiement
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

// Step 4: Payment (placeholder - à implémenter avec Stripe)
function Step4Payment({
  bookingData,
  onBack,
}: {
  bookingData: BookingData;
  onBack: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });


      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-6">✅</div>
        <h2 className="font-serif text-3xl font-bold text-text mb-4">
          Réservation confirmée !
        </h2>
        <p className="text-text-2 text-lg mb-6">
          Merci {bookingData.clientInfo?.prenom}, votre demande de rendez-vous a bien été enregistrée.
        </p>
        <Card className="max-w-md mx-auto mb-6">
          <p className="text-text-2">
            Vous allez recevoir un email de confirmation à l'adresse <strong className="text-text">{bookingData.clientInfo?.email}</strong>
          </p>
          <p className="text-text-2 mt-4">
            Je vous contacterai sous 24h pour confirmer le rendez-vous et vous communiquer les modalités de paiement.
          </p>
        </Card>
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          Retour à l'accueil
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-3xl font-bold text-text mb-4 text-center">
        Confirmation de réservation
      </h2>
      <p className="text-text-2 text-center mb-8">
        Vérifiez vos informations avant de confirmer
      </p>

      <Card className="mb-6">
        <h3 className="font-serif text-xl font-semibold text-text mb-4">
          Récapitulatif de votre réservation
        </h3>
        <div className="space-y-3 text-text-2">
          <div className="flex justify-between">
            <span>Prestation :</span>
            <span className="font-semibold text-text">{bookingData.prestation?.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Date :</span>
            <span className="font-semibold text-text">
              {bookingData.date && new Date(bookingData.date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Heure :</span>
            <span className="font-semibold text-text">{bookingData.time}</span>
          </div>
          <div className="flex justify-between">
            <span>Durée :</span>
            <span className="font-semibold text-text">{bookingData.prestation?.duration}</span>
          </div>
          <div className="border-t border-border pt-3 mt-3 flex justify-between text-lg">
            <span className="font-semibold">Total :</span>
            <span className="font-bold text-primary text-2xl">{bookingData.prestation?.price}€</span>
          </div>
        </div>
      </Card>

      {submitStatus === 'error' && (
        <Card className="mb-6 bg-red-50 border-red-200">
          <p className="text-red-800">
            ❌ Une erreur est survenue lors de l'enregistrement de votre réservation. Veuillez réessayer.
          </p>
        </Card>
      )}

      <Card className="mb-6 bg-primary/5">
        <div className="text-center py-6">
          <div className="text-4xl mb-3">ℹ️</div>
          <p className="text-text-2 mb-2">
            <strong>Paiement après confirmation</strong>
          </p>
          <p className="text-sm text-muted">
            Je vous contacterai sous 24h pour confirmer le rendez-vous et vous communiquer les modalités de paiement sécurisé.
          </p>
        </div>
      </Card>

      <div className="flex gap-4">
        <Button variant="secondary" onClick={onBack} className="flex-1" disabled={isSubmitting}>
          Retour
        </Button>
        <Button 
          variant="primary" 
          className="flex-1"
          onClick={handleConfirmBooking}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enregistrement...' : 'Confirmer la réservation'}
        </Button>
      </div>
    </motion.div>
  );
}
