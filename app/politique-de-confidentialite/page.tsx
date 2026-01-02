import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Angeline NJ - Protection de vos données personnelles',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gold-50">
        <div className="container-custom text-center">
          <h1 className="font-serif text-gold font-title mb-6">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="section-padding dark-mystic-bg">
        <div className="container-custom max-w-4xl prose prose-mystic">
          <p className="text-text-2 mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4">Introduction</h2>
          <p className="text-text-2 mb-6">
            Angeline NJ accorde une grande importance à la protection de vos données personnelles. 
            Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
            utilisons et protégeons vos informations personnelles.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Données collectées</h2>
          <p className="text-text-2 mb-4">
            Nous collectons les données suivantes lorsque vous utilisez notre site ou nos services :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Informations que vous partagez lors de votre demande de consultation</li>
            <li>Données de navigation (cookies, adresse IP, type de navigateur)</li>
          </ul>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Utilisation des données</h2>
          <p className="text-text-2 mb-4">
            Vos données personnelles sont utilisées pour :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li>Répondre à vos demandes de consultation</li>
            <li>Vous contacter concernant votre rendez-vous</li>
            <li>Améliorer nos services</li>
            <li>Vous envoyer des informations si vous y avez consenti</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Base légale du traitement</h2>
          <p className="text-text-2 mb-6">
            Le traitement de vos données personnelles repose sur votre consentement et/ou l'exécution 
            d'un contrat (prestation de services de consultation).
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Conservation des données</h2>
          <p className="text-text-2 mb-6">
            Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation 
            des finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales. 
            Les données de contact sont conservées pendant 3 ans à compter de notre dernier contact.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Partage des données</h2>
          <p className="text-text-2 mb-6">
            Vos données personnelles ne sont jamais vendues, louées ou échangées à des tiers. 
            Elles peuvent être partagées uniquement avec des prestataires techniques nécessaires 
            au fonctionnement du site (hébergement, paiement en ligne), qui sont tenus par des 
            obligations de confidentialité.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Vos droits</h2>
          <p className="text-text-2 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-text-2 mb-6 space-y-2">
            <li><strong>Droit d'accès :</strong> vous pouvez demander une copie de vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de vos données</li>
            <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
            <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> vous pouvez demander le transfert de vos données</li>
            <li><strong>Droit de limitation :</strong> vous pouvez demander la limitation du traitement</li>
          </ul>
          <p className="text-text-2 mb-6">
            Pour exercer ces droits, contactez-nous à : contact@angeline-nj.fr
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Sécurité des données</h2>
          <p className="text-text-2 mb-6">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
            protéger vos données personnelles contre tout accès non autorisé, perte, destruction 
            ou divulgation accidentelle.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Cookies</h2>
          <p className="text-text-2 mb-6">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. 
            Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. 
            Cependant, certaines fonctionnalités du site pourraient ne plus être disponibles.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Modifications</h2>
          <p className="text-text-2 mb-6">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
          </p>

          <h2 className="font-serif text-2xl text-gold font-title mb-4 mt-8">Contact</h2>
          <p className="text-text-2 mb-6">
            Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
            vous pouvez nous contacter à :<br />
            Email : contact@angeline-nj.fr<br />
            Téléphone : +33 1 23 45 67 89
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
