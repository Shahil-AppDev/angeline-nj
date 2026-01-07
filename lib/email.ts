import { BookingEmailData, resend } from './resend';

export async function sendConfirmationEmail(booking: BookingEmailData) {
  const emailHtml = generateConfirmationEmailHTML(booking);
  
  try {
    await resend.emails.send({
      from: 'Angeline NJ <noreply@angeline-nj.fr>',
      to: booking.clientInfo.email,
      subject: `Confirmation de votre rendez-vous - ${booking.prestation.title}`,
      html: emailHtml,
    });
    
    console.log('Email de confirmation envoyé à:', booking.clientInfo.email);
    return { success: true };
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return { success: false, error };
  }
}

export async function sendNotificationEmail(booking: BookingEmailData) {
  const emailHtml = generateNotificationEmailHTML(booking);
  
  try {
    await resend.emails.send({
      from: 'Réservations <reservations@angeline-nj.xyz>',
      to: process.env.ADMIN_EMAIL || 'contact@angeline-nj.xyz',
      subject: `Nouvelle réservation - ${booking.prestation.title}`,
      html: emailHtml,
    });
    
    console.log('Email de notification envoyé à Angeline');
    return { success: true };
  } catch (error) {
    console.error('Erreur envoi notification:', error);
    return { success: false, error };
  }
}

function generateConfirmationEmailHTML(booking: BookingEmailData): string {
  const formattedDate = new Date(booking.date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #D6A84A 0%, #8B5A12 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #D6A84A; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .button { display: inline-block; background: #D6A84A; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌙 Confirmation de rendez-vous</h1>
        </div>
        <div class="content">
          <p>Bonjour ${booking.clientInfo.prenom},</p>
          
          <p>Merci d'avoir réservé une consultation avec moi. Votre rendez-vous est confirmé !</p>
          
          <div class="info-box">
            <h2 style="margin-top: 0; color: #D6A84A;">📋 Détails de votre réservation</h2>
            <p><strong>Prestation :</strong> ${booking.prestation.title}</p>
            <p><strong>Date :</strong> ${formattedDate}</p>
            <p><strong>Heure :</strong> ${booking.time}</p>
            <p><strong>Durée :</strong> ${booking.prestation.duration}</p>
            <p><strong>Tarif :</strong> ${booking.prestation.price}€</p>
          </div>
          
          <div class="info-box">
            <h3 style="margin-top: 0;">📞 Vos coordonnées</h3>
            <p><strong>Nom :</strong> ${booking.clientInfo.prenom} ${booking.clientInfo.nom}</p>
            <p><strong>Email :</strong> ${booking.clientInfo.email}</p>
            <p><strong>Téléphone :</strong> ${booking.clientInfo.telephone}</p>
            ${booking.clientInfo.message ? `<p><strong>Votre message :</strong> ${booking.clientInfo.message}</p>` : ''}
          </div>
          
          <p><strong>Prochaines étapes :</strong></p>
          <ol>
            <li>Je vous contacterai sous 24h pour confirmer le rendez-vous</li>
            <li>Vous recevrez un lien de visioconférence ou les modalités de la consultation</li>
            <li>Le paiement sera à effectuer avant la séance</li>
          </ol>
          
          <p>Si vous avez des questions ou besoin de modifier votre rendez-vous, n'hésitez pas à me contacter.</p>
          
          <p>À très bientôt,<br>
          <strong>Angeline</strong><br>
          Cartomancienne & Praticienne Reiki</p>
        </div>
        
        <div class="footer">
          <p>Angeline NJ - Guidance Spirituelle & Soins Énergétiques</p>
          <p>📧 contact@angeline-nj.xyz | 📱 +33 1 23 45 67 89</p>
          <p><a href="https://angeline-nj.xyz">www.angeline-nj.xyz</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateNotificationEmailHTML(booking: BookingEmailData): string {
  const formattedDate = new Date(booking.date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #D6A84A; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .info-box { background: white; padding: 15px; margin: 15px 0; border-radius: 6px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🔔 Nouvelle réservation</h2>
        </div>
        <div class="content">
          <p><strong>Une nouvelle réservation a été effectuée sur votre site.</strong></p>
          
          <div class="info-box">
            <h3>Client</h3>
            <p><strong>Nom :</strong> ${booking.clientInfo.prenom} ${booking.clientInfo.nom}</p>
            <p><strong>Email :</strong> ${booking.clientInfo.email}</p>
            <p><strong>Téléphone :</strong> ${booking.clientInfo.telephone}</p>
          </div>
          
          <div class="info-box">
            <h3>Réservation</h3>
            <p><strong>Prestation :</strong> ${booking.prestation.title}</p>
            <p><strong>Date :</strong> ${formattedDate}</p>
            <p><strong>Heure :</strong> ${booking.time}</p>
            <p><strong>Durée :</strong> ${booking.prestation.duration}</p>
            <p><strong>Tarif :</strong> ${booking.prestation.price}€</p>
          </div>
          
          ${booking.clientInfo.message ? `
          <div class="info-box">
            <h3>Message du client</h3>
            <p>${booking.clientInfo.message}</p>
          </div>
          ` : ''}
          
          <p><strong>ID de réservation :</strong> ${booking.id}</p>
          <p><em>N'oubliez pas de contacter le client pour confirmer le rendez-vous.</em></p>
        </div>
      </div>
    </body>
    </html>
  `;
}
