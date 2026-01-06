import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import productsData from '@/data/products.json';
import { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const product = productsData.find(p => p.slug === params.slug || p.slug === decodedSlug);
  if (!product) return {};

  return {
    title: `${product.title} | Boutique Angeline NJ`,
    description: product.category_name,
  };
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const product = productsData.find(p => p.slug === params.slug || p.slug === decodedSlug);

  if (!product) {
    notFound();
  }

  const isFormation = product.category === 'formations-reiki' || 
                      product.category === 'pendule' || 
                      product.category === 'formation-tirage-oracle' ||
                      product.title.toLowerCase().includes('formation');
  
  const isDigital = product.is_digital || product.category === 'rituels';
  const isRituel = product.category === 'rituels';
  const isRituelPDF = isRituel && product.category_name === 'Rituel PDF';
  const isRituelVideo = isRituel && product.category_name === 'Rituel Vidéo';
  const isReiki = product.slug === 'reiki-a-distance';
  const isMesPrestations = product.category === 'mes-prestations';
  
  // Récupérer les autres produits de la même catégorie
  const relatedProducts = isRituel 
    ? productsData.filter(p => p.category === 'rituels' && p.slug !== product.slug).slice(0, 4)
    : [];
  
  // Déterminer le lien de retour selon la catégorie
  const backLink = isRituel ? '/boutique/rituels' : '/boutique';
  const backText = isRituel ? 'Retour aux rituels' : 'Retour à la boutique';

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 min-h-screen">
        <div className="container-custom">
          <Link 
            href={backLink}
            className="inline-flex items-center text-gold hover:text-gold-2 mb-8 transition-colors"
          >
            ← {backText}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-surface rounded-lg overflow-hidden relative">
              {product.image ? (
                <NextImage 
                  src={product.image} 
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gold-3/20 to-gold-2/20 flex items-center justify-center">
                  <span className="text-9xl">✨</span>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gold-2/20 text-gold-2 text-sm rounded-full">
                  {product.category_name}
                </span>
              </div>

              <h1 className="font-serif text-4xl font-bold text-gold font-title mb-6">
                {product.title}
              </h1>

              <div className="mb-8">
                {product.on_sale && product.regular_price && (
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl text-muted line-through">
                      {product.regular_price.toFixed(2)}€
                    </span>
                    <span className="px-3 py-1 bg-gold-2 text-white text-sm font-bold rounded-full">
                      PROMO
                    </span>
                  </div>
                )}
                <span className="text-5xl font-bold text-gold">
                  {product.price.toFixed(2)}€
                </span>
              </div>

              {product.description && (
                <div 
                  className="mb-8 text-text-2 whitespace-pre-line leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {product.in_stock ? (
                    <>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-text-2">
                        {product.stock_quantity || 'En stock'}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="text-text-2">Rupture de stock</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={product.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  <span>Acheter</span>
                </a>
                <Link 
                  href="/blog"
                  className="btn-gold flex-1 text-center"
                >
                  <span>Consulter le blog</span>
                </Link>
              </div>

              <div className="mt-8 p-6 bg-surface rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-4">
                  Informations
                </h3>
                <ul className="space-y-2 text-text-2">
                  {isMesPrestations ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Vidéo livrée sous 48h maximum
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Prestation 100% à distance
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                    </>
                  ) : isFormation ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Accès immédiat après paiement
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Formation 100% en ligne et autonome
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Supports vidéo et PDF téléchargeables
                      </li>
                    </>
                  ) : isRituelPDF ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Format PDF
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                    </>
                  ) : isRituelVideo ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Format vidéo livrée sous 48h
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                    </>
                  ) : isReiki ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Séance à distance de 45 minutes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Réservation sur mes réseaux après paiement
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                    </>
                  ) : isDigital ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Produit numérique
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Livraison rapide sous 48h
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Paiement sécurisé
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        Emballage soigné avec amour
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Section Autres Rituels */}
          {isRituel && relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-3xl font-bold text-gold font-title mb-8 text-center">
                Autres rituels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.slug}
                    href={`/produit/${relatedProduct.slug}`}
                    className="group glass-card hover:border-gold-2/50 transition-all duration-300"
                  >
                    <div className="aspect-square bg-surface rounded-lg overflow-hidden relative mb-4">
                      {relatedProduct.image ? (
                        <NextImage
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gold-3/20 to-gold-2/20 flex items-center justify-center">
                          <span className="text-6xl">✨</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-gold-2/20 text-gold-2 text-xs rounded-full mb-2">
                        {relatedProduct.category_name}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-gold mb-2 group-hover:text-gold-2 transition-colors">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-2xl font-bold text-gold">
                        {relatedProduct.price.toFixed(2)}€
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
