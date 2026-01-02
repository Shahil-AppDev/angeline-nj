'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CGVPage() {
  return (
    <>
      <Navbar />
      
      <section className="section-padding pt-32 dark-mystic-bg">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="font-serif text-gold font-title mb-6">
            Conditions Générales de Vente
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
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
            entre Angeline NJ, entrepreneur individuel, et toute personne physique ou morale souhaitant 
            effectuer un achat via le site angeline-nj.xyz.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 2 - Identification du vendeur</h2>
          <p className="text-text-2 mb-6">
            <strong>Angeline NJ</strong><br />
            Entrepreneur individuel<br />
            SIREN : 894 371 681<br />
            SIRET : 894 371 681 00012<br />
            Numéro de TVA intracommunautaire : FR92894371681<br />
            Adresse : 25 Allée de l'Orvet Fragile, 45430 Chécy, France<br />
            Email : contact@angeline-nj.xyz<br />
            Site web : https://angeline-nj.xyz
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 3 - Services proposés</h2>
          <p className="text-text-2 mb-6">
            Angeline NJ propose les services suivants :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li>Consultations de cartomancie et voyance à distance</li>
            <li>Soins énergétiques Reiki à distance</li>
            <li>Tirages de cartes personnalisés</li>
            <li>Formations en ligne (Reiki, pendule, développement spirituel)</li>
            <li>Vente de produits spirituels (oracles, bougies, pierres, accessoires)</li>
          </ul>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 4 - Prix</h2>
          <p className="text-text-2 mb-6">
            Les prix de nos services et produits sont indiqués en euros (€) toutes taxes comprises (TTC). 
            Angeline NJ se réserve le droit de modifier ses prix à tout moment, mais les services et produits 
            seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 5 - Commande</h2>
          <p className="text-text-2 mb-6">
            Le client passe commande via le site angeline-nj.xyz en suivant le processus de réservation 
            ou d'achat en ligne. Toute commande vaut acceptation des présentes CGV. La validation de la 
            commande implique l'acceptation de l'intégralité des présentes conditions générales de vente.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 6 - Paiement</h2>
          <p className="text-text-2 mb-6">
            Le paiement s'effectue en ligne de manière sécurisée via les moyens de paiement proposés 
            (carte bancaire, PayPal, etc.). Le paiement est exigible immédiatement à la commande. 
            La prestation ne sera effectuée qu'après encaissement du paiement.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 7 - Droit de rétractation</h2>
          <p className="text-text-2 mb-6">
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne 
            peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai 
            de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur 
            et renoncement exprès à son droit de rétractation.
          </p>
          <p className="text-text-2 mb-6">
            Pour les consultations et soins à distance : le client accepte expressément que la prestation 
            commence immédiatement après la prise de rendez-vous et renonce à son droit de rétractation.
          </p>
          <p className="text-text-2 mb-6">
            Pour les produits physiques : le client dispose d'un délai de 14 jours à compter de la 
            réception du produit pour exercer son droit de rétractation. Les produits doivent être 
            retournés dans leur emballage d'origine, non utilisés et en parfait état.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 8 - Livraison</h2>
          <p className="text-text-2 mb-6">
            <strong>Services à distance :</strong> Les consultations et soins sont réalisés dans un délai 
            de 48 à 72 heures après la prise de rendez-vous. Le compte-rendu est envoyé par email.
          </p>
          <p className="text-text-2 mb-6">
            <strong>Produits physiques :</strong> Les délais de livraison sont indiqués lors de la commande. 
            Les frais de livraison sont à la charge du client et sont précisés avant la validation de la commande.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 9 - Garanties et responsabilité</h2>
          <p className="text-text-2 mb-6">
            Les prestations proposées par Angeline NJ sont des services de guidance spirituelle et de 
            bien-être. Elles ne se substituent en aucun cas à un avis médical, psychologique ou juridique. 
            Le client reconnaît que les consultations de voyance et les soins énergétiques relèvent du 
            domaine du développement personnel et spirituel.
          </p>
          <p className="text-text-2 mb-6">
            Angeline NJ s'engage à fournir ses services avec professionnalisme et bienveillance, mais ne 
            peut garantir de résultats spécifiques. La responsabilité d'Angeline NJ ne saurait être engagée 
            pour tout dommage indirect résultant de l'utilisation des services proposés.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 10 - Propriété intellectuelle</h2>
          <p className="text-text-2 mb-6">
            Tous les contenus présents sur le site angeline-nj.xyz (textes, images, vidéos, logos, etc.) 
            sont la propriété exclusive d'Angeline NJ et sont protégés par le droit d'auteur. Toute 
            reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 11 - Protection des données personnelles</h2>
          <p className="text-text-2 mb-6">
            Les données personnelles collectées sont traitées conformément à notre{' '}
            <a href="/politique-de-confidentialite" className="text-gold hover:text-gold-2 underline">
              politique de confidentialité
            </a>{' '}
            et au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 12 - Réclamations</h2>
          <p className="text-text-2 mb-6">
            Pour toute réclamation, le client peut contacter Angeline NJ par email à l'adresse 
            contact@angeline-nj.xyz. Nous nous engageons à répondre dans les meilleurs délais.
          </p>
          <p className="text-text-2 mb-6">
            En cas de litige, le client peut recourir à une médiation conventionnelle ou à tout autre 
            mode alternatif de règlement des différends. Plateforme de résolution des litiges en ligne : 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-2 underline ml-1">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 13 - Droit applicable et juridiction</h2>
          <p className="text-text-2 mb-6">
            Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d'accord 
            amiable, le litige sera porté devant les tribunaux compétents conformément aux règles de 
            droit commun.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Article 14 - Modification des CGV</h2>
          <p className="text-text-2 mb-6">
            Angeline NJ se réserve le droit de modifier les présentes CGV à tout moment. Les CGV 
            applicables sont celles en vigueur à la date de la commande.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
