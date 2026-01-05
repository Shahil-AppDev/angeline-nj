'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import productsData from '@/data/products.json';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RituelsPage() {
  const rituelsPDF = productsData.filter(p => p.category === 'rituels' && p.category_name === 'Rituel PDF');
  const rituelsVideo = productsData.filter(p => p.category === 'rituels' && p.category_name === 'Rituel Vidéo');

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
            <h1 className="font-serif text-gold font-title mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Rituels Guidés
            </h1>
            <p className="text-xl text-text-2 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos rituels guidés en PDF ou en vidéo pour pratiquer chez vous
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne PDF */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-center mb-2 font-title group">
                  <span className="bg-gradient-to-r from-[#8B5A12] to-[#D6A84A] bg-clip-text text-transparent relative inline-block">
                    RITUEL PDF
                    <span className="absolute inset-0 bg-gradient-to-r from-[rgba(255,224,140,0.15)] to-[rgba(255,224,140,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                  </span>
                </h2>
                <p className="text-center text-text-2 mb-6">Rituels guidés en format PDF</p>
              </motion.div>

              <div className="space-y-6">
                {rituelsPDF.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 group hover:border-gold-2 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-32 flex-shrink-0 bg-surface rounded-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group">
                          <span className="bg-gradient-to-r from-[#8B5A12] to-[#D6A84A] bg-clip-text text-transparent">
                            {product.title}
                          </span>
                        </h3>
                        <p className="text-text-2 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gold">
                            {product.price.toFixed(2)}€
                          </span>
                          <Link 
                            href={`/produit/${product.slug}`}
                            className="btn-primary group text-sm py-2 px-6"
                          >
                            <span>Voir</span>
                            <span className="btn-shimmer"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Colonne Vidéo */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-center mb-2 font-title group">
                  <span className="bg-gradient-to-r from-[#8B5A12] to-[#D6A84A] bg-clip-text text-transparent relative inline-block">
                    RITUEL VIDÉO
                    <span className="absolute inset-0 bg-gradient-to-r from-[rgba(255,224,140,0.15)] to-[rgba(255,224,140,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                  </span>
                </h2>
                <p className="text-center text-text-2 mb-6">Rituels guidés en format vidéo</p>
              </motion.div>

              <div className="space-y-6">
                {rituelsVideo.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 group hover:border-gold-2 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-32 flex-shrink-0 bg-surface rounded-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group">
                          <span className="bg-gradient-to-r from-[#8B5A12] to-[#D6A84A] bg-clip-text text-transparent">
                            {product.title}
                          </span>
                        </h3>
                        <p className="text-text-2 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gold">
                            {product.price.toFixed(2)}€
                          </span>
                          <Link 
                            href={`/produit/${product.slug}`}
                            className="btn-primary group text-sm py-2 px-6"
                          >
                            <span>Voir</span>
                            <span className="btn-shimmer"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
