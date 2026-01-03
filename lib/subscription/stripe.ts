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
    id: 'abonnement-astro',
    name: 'Abonnement Astro',
    price: 2.90,
    interval: 'month',
    features: [
      'Astro personnalisé chaque jour',
      'Pas de contenu supplémentaire inclus'
    ],
    stripePriceId: process.env.STRIPE_ABONNEMENT_ASTRO_PRICE_ID
  },
  {
    id: 'abonnement-guidance',
    name: 'Abonnement Guidance',
    price: 19.90,
    interval: 'month',
    features: [
      '1 prestation par mois',
      'Tirage de cartes ou soin énergétique Reiki',
      'Astro personnalisé chaque jour',
      'Hors prestation urgente'
    ],
    stripePriceId: process.env.STRIPE_ABONNEMENT_GUIDANCE_PRICE_ID
  },
  {
    id: 'abonnement-box',
    name: 'Abonnement Box Ésotérique',
    price: 29.90,
    interval: 'month',
    features: [
      'Envoi en point relais (Mondial Relay)',
      'Articles boutique valeur > 29 €',
      'Produits ésotériques + surprises sélectionnées'
    ],
    stripePriceId: process.env.STRIPE_ABONNEMENT_BOX_PRICE_ID
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
