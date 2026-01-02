import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos d\'Angeline NJ | Thérapeute Reiki & Cartomancienne',
  description: 'Découvrez le parcours et l\'éthique d\'Angeline NJ. Une approche bienveillante de la cartomancie et du Reiki pour vous guider vers le mieux-être.',
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
