'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { id: 'tous', label: 'Tous les produits', count: productsData.length },
  ...categoriesData.slice(0, 10).map(cat => ({
    id: cat.slug,
    label: cat.name,
    count: cat.count
  })),
  { id: 'rituels', label: 'Rituels', count: 5 }
];

const products = productsData;

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const filteredProducts = selectedCategory === 'tous' 
    ? products 
    : products.filter(p => p.category === selectedCategory || p.category_name.toLowerCase().includes(selectedCategory));

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 aurora-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-gold font-title mb-6">
              Boutique Zen
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez ma sélection d'oracles, pierres, bougies et accessoires spirituels pour accompagner votre chemin
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-text-2 leading-relaxed mb-12">
              <p>
                Bienvenue dans la <strong>Boutique Zen d'Angeline NJ</strong>, votre destination privilégiée pour trouver des outils vibratoires de haute qualité. Chaque objet présent dans cet espace a été sélectionné avec une intention précise : soutenir votre pratique spirituelle, protéger votre foyer et élever votre fréquence énergétique. En tant que thérapeute, je sais l'importance de s'entourer d'objets chargés d'une belle énergie, c'est pourquoi je travaille avec des fournisseurs éthiques et des créateurs passionnés.
              </p>
              <p>
                L'ésotérisme moderne ne consiste pas à accumuler des objets, mais à choisir des alliés qui résonnent avec votre âme. Que vous cherchiez un <strong>oracle</strong> pour vos tirages matinaux, une <strong>pierre de lithothérapie</strong> pour apaiser votre anxiété, ou de l'<strong>encens naturel</strong> pour purifier votre intérieur, vous trouverez ici des produits authentiques. Ma boutique est le reflet de ma propre pratique : exigeante, lumineuse et ancrée dans le respect de la nature et des traditions sacrées.
              </p>
              <p className="p-4 bg-surface/50 rounded-lg border border-gold-2/20">
                <strong>Votre confiance est ma priorité.</strong> Chaque commande est préparée par mes soins avec une attention particulière. Les produits sont purifiés énergétiquement avant envoi et emballés avec des matériaux respectueux de l'environnement dès que possible. Je m'engage sur la qualité et l'authenticité de chaque cristal et de chaque accessoire proposé.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.id === 'tous' ? '/boutique' : `/boutique/${cat.id}`}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                    selectedCategory === cat.id
                      ? 'bg-gold-2 text-white shadow-md'
                      : 'bg-surface text-text hover:bg-border active:bg-gold-3'
                  }`}
                >
                  <span className="hidden sm:inline">{cat.label} ({cat.count})</span>
                  <span className="sm:hidden">{cat.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {product.thumbnail ? (
                    <img 
                      src={product.thumbnail} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gold-2/10 pt-16"
          >
            <div className="space-y-4">
              <h3 className="text-gold font-title text-xl">Oracles Divinatoires</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                Découvrez une sélection d'oracles aux illustrations inspirantes et aux messages profonds. Des outils parfaits pour développer votre intuition et recevoir votre guidance quotidienne.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-gold font-title text-xl">Pierres & Cristaux</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                La lithothérapie au service de votre bien-être. De l'améthyste apaisante à la tourmaline protectrice, trouvez la pierre qui saura harmoniser vos énergies personnelles.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-gold font-title text-xl">Bougies Spirituelles</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                Nos bougies artisanales sont conçues pour accompagner vos rituels, méditations ou simplement pour instaurer une atmosphère sacrée et chaleureuse dans votre sanctuaire.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-gold font-title text-xl">Encens & Purification</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                Sauge blanche, palo santo et mélanges d'encens naturels pour nettoyer les énergies stagnantes et inviter la sérénité dans votre espace de vie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-gold font-title text-xl">Pendules Divinatoires</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                Des pendules en bois ou en cristal, équilibrés et précis, pour pratiquer la radiesthésie et affiner vos perceptions extrasensorielles.
              </p>
            </div>
            <div className="glass-card p-6 border-gold-2/20 bg-gold-2/5">
              <h3 className="text-gold font-title text-xl mb-3">Éthique & Qualité</h3>
              <p className="text-text-2 text-sm leading-relaxed">
                Votre confiance est ma priorité. Chaque commande est préparée par mes soins avec une attention particulière. Les produits sont purifiés énergétiquement avant envoi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding mystic-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-gold font-title mb-6">
              Livraison & Paiement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Livraison rapide
                </h3>
                <p className="text-text-2">
                  Expédition sous 48h en France métropolitaine
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💳</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Paiement sécurisé
                </h3>
                <p className="text-text-2">
                  Transactions sécurisées par Stripe
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-16 h-16 rounded-full bg-gold-2 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💝</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold font-title mb-3">
                  Emballage soigné
                </h3>
                <p className="text-text-2">
                  Chaque produit est emballé avec soin et amour
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/contact" className="btn-primary soft-glow">
                <span>Une question ? Contactez-moi</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
