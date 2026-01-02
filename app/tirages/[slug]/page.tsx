import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TirageClient from './TirageClient';

const tiragesData: Record<string, {
  title: string;
  icon: string;
  description: string;
  details: string[];
  duration: string;
  price: string;
}> = {
  amour: {
    title: 'Tirage Amour',
    icon: '💕',
    description: 'Éclairez votre vie sentimentale et comprenez les énergies qui entourent vos relations.',
    details: [
      'Comprenez la dynamique de votre relation actuelle',
      'Découvrez les blocages émotionnels à surmonter',
      'Anticipez l\'évolution de votre situation amoureuse',
      'Recevez des conseils pour harmoniser votre vie sentimentale',
    ],
    duration: '45 minutes',
    price: '60€',
  },
  travail: {
    title: 'Tirage Travail',
    icon: '✨',
    description: 'Trouvez des réponses sur votre carrière et vos projets professionnels.',
    details: [
      'Clarifiez votre orientation professionnelle',
      'Identifiez les opportunités à saisir',
      'Comprenez les défis à relever dans votre carrière',
      'Recevez des conseils pour avancer sereinement',
    ],
    duration: '45 minutes',
    price: '60€',
  },
  avenir: {
    title: 'Tirage Avenir',
    icon: '🔮',
    description: 'Anticipez les opportunités et les défis qui se présentent sur votre chemin.',
    details: [
      'Découvrez les tendances des prochains mois',
      'Identifiez les opportunités à venir',
      'Préparez-vous aux changements importants',
      'Recevez des conseils pour naviguer votre futur',
    ],
    duration: '60 minutes',
    price: '75€',
  },
  general: {
    title: 'Tirage Général',
    icon: '🌟',
    description: 'Une vue d\'ensemble de votre situation actuelle sur tous les aspects de votre vie.',
    details: [
      'Vision globale de votre situation actuelle',
      'Éclairage sur différents domaines de votre vie',
      'Identification des priorités du moment',
      'Conseils pour avancer harmonieusement',
    ],
    duration: '60 minutes',
    price: '75€',
  },
  spirituel: {
    title: 'Tirage Spirituel',
    icon: '🌙',
    description: 'Explorez votre chemin spirituel et connectez-vous à votre intuition profonde.',
    details: [
      'Découvrez votre mission de vie',
      'Comprenez vos dons et talents spirituels',
      'Identifiez les leçons karmiques à intégrer',
      'Recevez des conseils pour votre évolution spirituelle',
    ],
    duration: '60 minutes',
    price: '75€',
  },
  decision: {
    title: 'Tirage Décision',
    icon: '⚖️',
    description: 'Face à un choix important, ce tirage vous aide à voir clairement vos options.',
    details: [
      'Analyse approfondie de chaque option',
      'Identification des conséquences potentielles',
      'Éclairage sur vos motivations profondes',
      'Conseils pour prendre la meilleure décision',
    ],
    duration: '45 minutes',
    price: '60€',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tirage = tiragesData[params.slug];

  if (!tirage) {
    return {
      title: 'Tirage non trouvé',
    };
  }

  return {
    title: `${tirage.title} - Guidance & Cartomancie | Angeline NJ`,
    description: tirage.description,
  };
}

export default function TirageDetailPage({ params }: { params: { slug: string } }) {
  const tirage = tiragesData[params.slug];

  if (!tirage) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <TirageClient tirage={tirage} />
      <Footer />
    </>
  );
}
