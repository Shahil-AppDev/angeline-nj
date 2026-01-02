import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getPrestationBySlug } from '@/lib/prestations';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PrestationClientContent from './PrestationClientContent';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prestation = getPrestationBySlug(params.slug);
  if (!prestation) return {};

  return {
    title: `${prestation.title} | Consultation Angeline NJ`,
    description: prestation.subtitle || prestation.shortDescription,
  };
}

export default function PrestationDetailPage({ params }: { params: { slug: string } }) {
  const prestation = getPrestationBySlug(params.slug);

  if (!prestation) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PrestationClientContent prestation={prestation} />
      <Footer />
    </>
  );
}
