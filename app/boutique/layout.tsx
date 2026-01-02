import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boutique Ésotérique Zen : Oracles, Pierres & Encens | Angeline NJ',
  description: 'Explorez la Boutique Zen d\'Angeline NJ. Une sélection éthique d\'oracles divinatoires, pierres de protection, bougies artisanales et encens pour votre pratique spirituelle.',
};

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
