import { sendConfirmationEmail, sendNotificationEmail } from '@/lib/email';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      prestation,
      date,
      time,
      clientInfo,
    } = body;

    // Validation
    if (!prestation || !date || !time || !clientInfo) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      );
    }

    if (!clientInfo.nom || !clientInfo.prenom || !clientInfo.email || !clientInfo.telephone) {
      return NextResponse.json(
        { error: 'Informations client incomplètes' },
        { status: 400 }
      );
    }

    // Sauvegarder dans la base de données avec Prisma
    const savedBooking = await prisma.booking.create({
      data: {
        prestationTitle: prestation.title,
        prestationPrice: prestation.price,
        prestationDuration: prestation.duration,
        prestationSlug: prestation.slug,
        date,
        time,
        clientNom: clientInfo.nom,
        clientPrenom: clientInfo.prenom,
        clientEmail: clientInfo.email,
        clientTelephone: clientInfo.telephone,
        clientMessage: clientInfo.message || '',
        status: 'pending',
      },
    });

    // Préparer les données pour les emails
    const bookingEmailData = {
      id: savedBooking.id,
      prestation: {
        title: prestation.title,
        price: prestation.price,
        duration: prestation.duration,
      },
      date,
      time,
      clientInfo: {
        nom: clientInfo.nom,
        prenom: clientInfo.prenom,
        email: clientInfo.email,
        telephone: clientInfo.telephone,
        message: clientInfo.message || '',
      },
    };

    // Envoyer les emails (ne pas bloquer la réponse si ça échoue)
    try {
      await Promise.all([
        sendConfirmationEmail(bookingEmailData),
        sendNotificationEmail(bookingEmailData),
      ]);
    } catch (emailError) {
      console.error('Erreur envoi emails:', emailError);
      // On continue même si les emails échouent
    }

    console.log('Nouvelle réservation créée:', savedBooking.id);

    return NextResponse.json({
      success: true,
      booking: savedBooking,
      message: 'Réservation enregistrée avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de la création de la réservation:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // TODO: Récupérer toutes les réservations (avec authentification admin)
  return NextResponse.json({
    message: 'Liste des réservations (à implémenter)',
  });
}
