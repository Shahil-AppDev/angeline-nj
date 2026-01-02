import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reiki à Distance : Soins Énergétiques & Harmonisation | Angeline NJ',
  description: 'Découvrez les bienfaits du Reiki à distance avec Angeline NJ. Soins énergétiques pour libérer le stress, harmoniser les chakras et retrouver une vitalité profonde.',
};

export default function ReikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
