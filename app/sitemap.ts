import { blogPosts } from '@/data/blog';
import productsData from '@/data/products.json';
import { prestations } from '@/lib/prestations';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://angeline-nj.xyz';

  // Pages statiques
  const routes = [
    '',
    '/tirages',
    '/reiki',
    '/boutique',
    '/blog',
    '/a-propos',
    '/contact',
    '/visio',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/cgv',
    '/cgu',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Articles de blog dynamiques
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Produits de la boutique dynamiques
  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/produit/${product.slug}`,
    lastModified: new Date(), // Idéalement, avoir une date de modif dans le JSON
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Catégories de la boutique
  const categories = Array.from(new Set(productsData.map(p => p.category)));
  const categoryRoutes = categories.map(cat => ({
    url: `${baseUrl}/boutique/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Prestations dynamiques
  const prestationRoutes = prestations.map((prestation) => ({
    url: `${baseUrl}/prestations/${prestation.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...blogRoutes, ...productRoutes, ...categoryRoutes, ...prestationRoutes];
}
