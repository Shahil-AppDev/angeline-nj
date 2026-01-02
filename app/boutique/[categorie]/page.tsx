import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { categorie: string } }): Promise<Metadata> {
  const category = categoriesData.find(c => c.slug === params.categorie);
  if (!category) return {};

  return {
    title: `${category.name} | Boutique Zen Angeline NJ`,
    description: `Découvrez notre sélection de ${category.name.toLowerCase()} pour votre pratique spirituelle et votre bien-être énergétique.`,
  };
}

export async function generateStaticParams() {
  return categoriesData.map((cat) => ({
    categorie: cat.slug,
  }));
}

export default function CategoryPage({ params }: { params: { categorie: string } }) {
  const category = categoriesData.find(c => c.slug === params.categorie);

  if (!category) {
    notFound();
  }

  const products = productsData.filter(p => p.category === category.slug);

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <Link 
            href="/boutique" 
            className="inline-flex items-center text-gold hover:text-gold-2 mb-8 transition-colors"
          >
            ← Retour à la boutique
          </Link>

          <h1 className="font-serif text-gold font-title mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            {products.length} produit{products.length > 1 ? 's' : ''} disponible{products.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-text-2 mb-8">
                Aucun produit dans cette catégorie pour le moment
              </p>
              <Link href="/boutique" className="btn-primary">
                <span>Voir tous les produits</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="glass-card p-6 group">
                  <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {product.thumbnail ? (
                      <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gold-3/20 to-gold-2/20 flex items-center justify-center">
                        <span className="text-6xl">✨</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-gold font-title mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-text-2 text-sm mb-4 line-clamp-2">
                    {product.description || product.category_name}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.on_sale && product.regular_price && (
                        <span className="text-sm text-muted line-through">
                          {product.regular_price.toFixed(2)}€
                        </span>
                      )}
                      <span className="text-2xl font-bold text-gold">
                        {product.price.toFixed(2)}€
                      </span>
                    </div>
                    <Link 
                      href={`/produit/${product.slug}`}
                      className="btn-primary text-sm py-2 px-4"
                    >
                      <span>Voir</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
