/**
 * LIENS CENTRALISÉS - Angeline NJ
 * Tous les URLs et liens externes du site
 */

export const EXTERNAL_LINKS = {
  // Réseaux sociaux
  tiktok: 'https://www.tiktok.com/@angelinenj',
  instagram: 'https://www.instagram.com/reiki.by.angie',
  
  // Réservation (à configurer selon le système choisi)
  booking: '/prendre-rdv', // ou URL externe type Calendly
  
  // Contact
  email: 'contact@angeline-nj.fr',
  phone: '+33 6 XX XX XX XX', // À mettre à jour
} as const;

export const INTERNAL_ROUTES = {
  home: '/',
  about: '/a-propos',
  services: '/prestations',
  tirages: '/tirages',
  reiki: '/reiki',
  guidance: '/guidance',
  blog: '/blog',
  contact: '/contact',
  booking: '/prendre-rdv',
  boutique: '/boutique',
  
  // Pages légales
  legal: '/mentions-legales',
  privacy: '/politique-de-confidentialite',
} as const;

/**
 * Helper pour générer un lien de tirage
 */
export function getTirageUrl(slug: string): string {
  return `/tirages/${slug}`;
}

/**
 * Helper pour générer un lien d'article de blog
 */
export function getBlogPostUrl(slug: string): string {
  return `/blog/${slug}`;
}
