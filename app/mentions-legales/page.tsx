import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Angeline NJ - Cartomancie et guidance spirituelle',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gold-50">
        <div className="container-custom text-center">
          <h1 className="font-serif text-gold font-title mb-6">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl prose prose-mystic">
          <h2 className="font-serif text-2xl text-gold font-title mb-4">Éditeur du site</h2>
          <p className="text-text-2 mb-6">
            Le site angeline-nj.xyz est édité par :<br />
            <strong>Angeline NJ</strong><br />
            Entrepreneur individuel<br />
            SIREN : 894 371 681<br />
            SIRET : 894 371 681 00012<br />
            Numéro de TVA intracommunautaire : FR92894371681<br />
            Adresse : 25 Allée de l'Orvet Fragile, 45430 Chécy, France<br />
            Email : contact@angeline-nj.xyz
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Directeur de publication</h2>
          <p className="text-text-2 mb-6">
            Shahil AppDev
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Hébergement</h2>
          <p className="text-text-2 mb-6">
            Ce site est hébergé par :<br />
            <strong>Hetzner Online GmbH</strong><br />
            Industriestr. 25<br />
            91710 Gunzenhausen, Allemagne<br />
            Téléphone : +49 (0)9831 505-0<br />
            Site web : <a href="https://www.hetzner.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-2 underline">www.hetzner.com</a>
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Propriété intellectuelle</h2>
          <p className="text-text-2 mb-6">
            L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive d'Angeline NJ, 
            sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou 
            publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'Angeline NJ.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Données personnelles</h2>
          <p className="text-text-2 mb-6">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles 
            vous concernant. Pour exercer ce droit, vous pouvez nous contacter à l'adresse : contact@angeline-nj.xyz
          </p>
          <p className="text-text-2 mb-6">
            Pour plus d'informations sur la gestion de vos données personnelles, consultez notre{' '}
            <a href="/politique-de-confidentialite" className="text-gold 600 hover:text-gold 500 underline">
              politique de confidentialité
            </a>.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Cookies</h2>
          <p className="text-text-2 mb-6">
            Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment 
            désactiver les cookies dans les paramètres de votre navigateur.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Responsabilité</h2>
          <p className="text-text-2 mb-6">
            Les informations fournies sur ce site le sont à titre indicatif. Angeline NJ ne saurait être tenue 
            responsable des décisions prises sur la base des informations fournies lors des consultations. 
            La cartomancie et la guidance spirituelle ne se substituent en aucun cas à un avis médical, 
            juridique ou financier professionnel.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Liens hypertextes</h2>
          <p className="text-text-2 mb-6">
            Le site peut contenir des liens vers d'autres sites. Angeline NJ ne saurait être tenue responsable 
            du contenu de ces sites externes.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Droit applicable</h2>
          <p className="text-text-2 mb-6">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
