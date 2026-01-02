import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultations Visio Cartomancie & Voyance | Angeline NJ',
  description: 'Réservez votre consultation de voyance et cartomancie en visio avec Angeline NJ. Échange en direct, bienveillance et guidance personnalisée (30min, 45min, 1h).',
};

export default function VisioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
