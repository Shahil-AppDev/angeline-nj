export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId?: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'horoscope-mensuel',
    name: 'Horoscope Mensuel',
    price: 9.99,
    interval: 'month',
    features: [
      'Horoscope quotidien personnalisé par IA',
      'Horoscope hebdomadaire détaillé',
      'Horoscope mensuel complet',
      'Accès calendrier lunaire avancé',
      'Notifications phases lunaires',
      '10% réduction sur les tirages'
    ],
    stripePriceId: process.env.STRIPE_HOROSCOPE_MENSUEL_PRICE_ID
  },
  {
    id: 'guidance-premium',
    name: 'Guidance Premium',
    price: 29.99,
    interval: 'month',
    features: [
      'Tout du plan Horoscope Mensuel',
      '1 tirage personnalisé par mois',
      'Accès prioritaire aux consultations',
      'Guidance lunaire personnalisée',
      'Rituels sur mesure',
      '20% réduction sur tous les services',
      'Accès communauté privée'
    ],
    stripePriceId: process.env.STRIPE_GUIDANCE_PREMIUM_PRICE_ID
  },
  {
    id: 'cercle-spirituel',
    name: 'Cercle Spirituel Annuel',
    price: 299,
    interval: 'year',
    features: [
      'Tout du plan Guidance Premium',
      '12 tirages personnalisés (1/mois)',
      '2 consultations privées par an',
      'Thème astral complet annuel',
      'Accès formations exclusives',
      '30% réduction sur tous les services',
      'Événements en ligne mensuels',
      'Support prioritaire'
    ],
    stripePriceId: process.env.STRIPE_CERCLE_SPIRITUEL_PRICE_ID
  }
];

export interface SubscriptionStatus {
  isActive: boolean;
  plan: SubscriptionPlan | null;
  startDate: Date | null;
  endDate: Date | null;
  cancelAtPeriodEnd: boolean;
}

export async function createCheckoutSession(planId: string, userEmail: string): Promise<string> {
  const plan = subscriptionPlans.find(p => p.id === planId);
  
  if (!plan || !plan.stripePriceId) {
    throw new Error('Plan invalide ou non configuré');
  }

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: plan.stripePriceId,
        quantity: 1,
      },
    ],
    customer_email: userEmail,
    success_url: `${process.env.NEXTAUTH_URL}/abonnement/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/abonnement`,
    metadata: {
      planId: plan.id,
    },
  });

  return session.url;
}

export async function getSubscriptionStatus(customerId: string): Promise<SubscriptionStatus> {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      return {
        isActive: false,
        plan: null,
        startDate: null,
        endDate: null,
        cancelAtPeriodEnd: false,
      };
    }

    const subscription = subscriptions.data[0];
    const planId = subscription.metadata.planId;
    const plan = subscriptionPlans.find(p => p.id === planId);

    return {
      isActive: true,
      plan: plan || null,
      startDate: new Date(subscription.current_period_start * 1000),
      endDate: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    };
  } catch (error) {
    console.error('Erreur récupération abonnement:', error);
    return {
      isActive: false,
      plan: null,
      startDate: null,
      endDate: null,
      cancelAtPeriodEnd: false,
    };
  }
}

export async function cancelSubscription(subscriptionId: string): Promise<boolean> {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  try {
    await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
    return true;
  } catch (error) {
    console.error('Erreur annulation abonnement:', error);
    return false;
  }
}
