import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Guidance Spirituelle | Angeline NJ',
  description: 'Découvrez nos articles experts sur la cartomancie, le Reiki et la spiritualité pour éclairer votre chemin quotidien.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
