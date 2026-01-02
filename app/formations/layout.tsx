import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formations Spirituelles : Reiki & Pendule Divinatoire | Angeline NJ',
  description: 'Apprenez à maîtriser vos capacités énergétiques. Formations certifiantes en Reiki (niveaux 1 à 3) et atelier pratique sur le pendule divinatoire avec Angeline NJ.',
};

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
