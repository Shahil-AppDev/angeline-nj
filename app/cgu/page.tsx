'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CGUPage() {
  return (
    <>
      <Navbar />
      
      <section className="section-padding pt-32 dark-mystic-bg">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="font-serif text-gold font-title mb-6">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-text-2 mb-4">
            Dernière mise à jour : 2 janvier 2026
          </p>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl prose prose-mystic">
          <h2 className="font-serif text-2xl text-gold font-title mb-4">Article 1 - Objet</h2>
          <p className="text-text-2 mb-6">
            Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les 
            modalités et conditions d'utilisation du site angeline-nj.xyz ainsi que les services 
            proposés par Angeline NJ.
          </p>
          <p className="text-text-2 mb-6">
            L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. 
            Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser le site.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 2 - Mentions légales</h2>
          <p className="text-text-2 mb-6">
            <strong>Éditeur du site :</strong><br />
            Angeline NJ<br />
            Entrepreneur individuel<br />
            SIREN : 894 371 681<br />
            SIRET : 894 371 681 00012<br />
            Numéro de TVA intracommunautaire : FR92894371681<br />
            Adresse : 25 Allée de l'Orvet Fragile, 45430 Chécy, France<br />
            Email : contact@angeline-nj.xyz
          </p>
          <p className="text-text-2 mb-6">
            <strong>Directeur de publication :</strong> Shahil AppDev
          </p>
          <p className="text-text-2 mb-6">
            <strong>Hébergeur :</strong><br />
            Hetzner Online GmbH<br />
            Industriestr. 25, 91710 Gunzenhausen, Allemagne
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 3 - Accès au site</h2>
          <p className="text-text-2 mb-6">
            Le site angeline-nj.xyz est accessible gratuitement à tout utilisateur disposant d'un 
            accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service 
            (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
          </p>
          <p className="text-text-2 mb-6">
            Angeline NJ met en œuvre tous les moyens raisonnables à sa disposition pour assurer un 
            accès de qualité au site, mais n'est tenue à aucune obligation d'y parvenir. Angeline NJ 
            ne peut être tenue responsable de tout dysfonctionnement du réseau ou des serveurs ou de 
            tout autre événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait 
            l'accès au site.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 4 - Services proposés</h2>
          <p className="text-text-2 mb-6">
            Le site angeline-nj.xyz propose les services suivants :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li>Présentation des services de cartomancie, voyance et soins énergétiques Reiki</li>
            <li>Prise de rendez-vous en ligne pour des consultations à distance</li>
            <li>Vente de produits spirituels (oracles, bougies, pierres, accessoires)</li>
            <li>Accès à des contenus informatifs (blog, articles, guides)</li>
            <li>Formations en ligne dans le domaine du développement spirituel</li>
          </ul>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 5 - Responsabilité de l'utilisateur</h2>
          <p className="text-text-2 mb-6">
            L'utilisateur s'engage à :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li>Utiliser le site conformément à sa destination et aux présentes CGU</li>
            <li>Ne pas perturber le bon fonctionnement du site</li>
            <li>Ne pas utiliser le site à des fins illégales ou contraires à l'ordre public</li>
            <li>Respecter les droits de propriété intellectuelle d'Angeline NJ</li>
            <li>Fournir des informations exactes lors de la création d'un compte ou d'une commande</li>
          </ul>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 6 - Propriété intellectuelle</h2>
          <p className="text-text-2 mb-6">
            L'ensemble des éléments du site angeline-nj.xyz (structure, textes, images, logos, vidéos, 
            sons, bases de données, logiciels, etc.) sont la propriété exclusive d'Angeline NJ ou font 
            l'objet d'une autorisation d'utilisation.
          </p>
          <p className="text-text-2 mb-6">
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
            des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
            autorisation écrite préalable d'Angeline NJ.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 7 - Protection des données personnelles</h2>
          <p className="text-text-2 mb-6">
            Les données personnelles collectées sur le site sont traitées conformément au Règlement 
            Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
          <p className="text-text-2 mb-6">
            Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
            veuillez consulter notre{' '}
            <a href="/politique-de-confidentialite" className="text-gold hover:text-gold-2 underline">
              politique de confidentialité
            </a>.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 8 - Cookies</h2>
          <p className="text-text-2 mb-6">
            Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
            L'utilisateur peut configurer son navigateur pour refuser les cookies, mais cela peut 
            affecter certaines fonctionnalités du site.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 9 - Liens hypertextes</h2>
          <p className="text-text-2 mb-6">
            Le site peut contenir des liens vers d'autres sites Internet. Angeline NJ n'exerce aucun 
            contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur 
            politique de confidentialité.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 10 - Limitation de responsabilité</h2>
          <p className="text-text-2 mb-6">
            Angeline NJ ne pourra être tenue responsable des dommages directs ou indirects causés au 
            matériel de l'utilisateur lors de l'accès au site, et résultant soit de l'utilisation d'un 
            matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou 
            d'une incompatibilité.
          </p>
          <p className="text-text-2 mb-6">
            Les services de cartomancie, voyance et soins énergétiques proposés sont des prestations 
            de développement personnel et spirituel. Ils ne se substituent en aucun cas à un avis 
            médical, psychologique ou juridique professionnel.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 11 - Modification des CGU</h2>
          <p className="text-text-2 mb-6">
            Angeline NJ se réserve le droit de modifier les présentes CGU à tout moment. Les 
            modifications seront applicables dès leur mise en ligne. Il est conseillé aux utilisateurs 
            de consulter régulièrement les CGU.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 12 - Droit applicable et juridiction</h2>
          <p className="text-text-2 mb-6">
            Les présentes CGU sont régies par le droit français. En cas de litige et à défaut d'accord 
            amiable, le litige sera porté devant les tribunaux français compétents.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 13 - Contact</h2>
          <p className="text-text-2 mb-6">
            Pour toute question concernant les présentes CGU, vous pouvez nous contacter à l'adresse 
            suivante : contact@angeline-nj.xyz
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
