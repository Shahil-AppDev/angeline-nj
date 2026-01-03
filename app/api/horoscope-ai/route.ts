import { ZodiacSign } from '@/lib/astrology/types';
import { generatePersonalizedHoroscope, PersonalizedHoroscopeRequest } from '@/lib/deepseek/horoscope-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { sign, name, birthDate, question, type } = body;

    if (!sign || !type) {
      return NextResponse.json(
        { error: 'Paramètres manquants: sign et type requis' },
        { status: 400 }
      );
    }

    const validSigns: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
    
    if (!validSigns.includes(sign)) {
      return NextResponse.json(
        { error: 'Signe astrologique invalide' },
        { status: 400 }
      );
    }

    const validTypes = ['daily', 'weekly', 'monthly', 'love', 'career', 'personalized'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Type d\'horoscope invalide' },
        { status: 400 }
      );
    }

    const horoscopeRequest: PersonalizedHoroscopeRequest = {
      sign,
      name,
      birthDate,
      question,
      type
    };

    const result = await generatePersonalizedHoroscope(horoscopeRequest);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Erreur API horoscope-ai:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la génération de l\'horoscope' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'API Horoscope AI - Utilisez POST avec: { sign, type, name?, birthDate?, question? }',
      types: ['daily', 'weekly', 'monthly', 'love', 'career', 'personalized']
    },
    { status: 200 }
  );
}
