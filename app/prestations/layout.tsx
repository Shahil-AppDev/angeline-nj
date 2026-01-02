import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultations de Cartomancie & Voyance Bienveillante | Angeline NJ',
  description: 'Bénéficiez d\'une guidance authentique avec Angeline NJ. Tirages de cartes personnalisés, voyance éthique et accompagnement spirituel pour éclairer votre chemin.',
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
