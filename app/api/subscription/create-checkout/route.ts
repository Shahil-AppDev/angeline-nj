import { createCheckoutSession } from '@/lib/subscription/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { planId } = await request.json();

    if (!planId) {
      return NextResponse.json(
        { error: 'Plan ID requis' },
        { status: 400 }
      );
    }

    const userEmail = 'contact@angeline-nj.fr';

    const checkoutUrl = await createCheckoutSession(planId, userEmail);

    return NextResponse.json({ url: checkoutUrl });

  } catch (error) {
    console.error('Erreur création checkout:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session' },
      { status: 500 }
    );
  }
}
