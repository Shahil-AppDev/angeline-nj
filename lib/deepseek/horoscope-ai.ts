import { ZodiacSign } from '../astrology/types';
import { zodiacSigns } from '../astrology/zodiacData';

export interface PersonalizedHoroscopeRequest {
  sign: ZodiacSign;
  name?: string;
  birthDate?: string;
  question?: string;
  type: 'daily' | 'weekly' | 'monthly' | 'love' | 'career' | 'personalized';
}

export interface PersonalizedHoroscopeResponse {
  horoscope: string;
  advice: string;
  luckyNumber?: number;
  luckyColor?: string;
  mood?: string;
  energy?: number;
}

export async function generatePersonalizedHoroscope(
  request: PersonalizedHoroscopeRequest
): Promise<PersonalizedHoroscopeResponse> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!apiKey) {
    throw new Error('DEEPSEEK_API_KEY non configurée');
  }

  const signInfo = zodiacSigns[request.sign];
  const today = new Date().toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  let prompt = '';

  switch (request.type) {
    case 'daily':
      prompt = `Tu es Angeline NJ, une voyante et médium spirituelle experte en astrologie. 
Génère un horoscope quotidien personnalisé et bienveillant pour une personne ${request.name ? `nommée ${request.name}` : ''} du signe ${signInfo.name} (${signInfo.emoji}).

Date: ${today}
Élément: ${signInfo.element}
Planète gouvernante: ${signInfo.planet}
Traits: ${signInfo.traits.join(', ')}

L'horoscope doit être:
- Personnalisé et chaleureux
- Positif et encourageant
- Spirituel avec une touche mystique
- Concret avec des conseils pratiques
- Entre 150-200 mots

Format JSON:
{
  "horoscope": "Prévision détaillée du jour",
  "advice": "Conseil spirituel pratique",
  "luckyNumber": nombre entre 1-99,
  "luckyColor": "couleur",
  "mood": "humeur du jour",
  "energy": nombre entre 1-10
}`;
      break;

    case 'love':
      prompt = `Tu es Angeline NJ, voyante spécialisée en amour et relations.
Génère une guidance amoureuse pour ${request.name || 'une personne'} du signe ${signInfo.name}.

${request.question ? `Question: ${request.question}` : ''}

Traits amoureux: ${signInfo.loveDescription}

L'horoscope amoureux doit:
- Être empathique et bienveillant
- Donner des conseils relationnels concrets
- Inclure des perspectives spirituelles
- Être encourageant
- 150-200 mots

Format JSON avec: horoscope, advice, mood`;
      break;

    case 'career':
      prompt = `Tu es Angeline NJ, conseillère spirituelle en carrière et vie professionnelle.
Génère une guidance professionnelle pour ${request.name || 'une personne'} du signe ${signInfo.name}.

Profil professionnel: ${signInfo.careerDescription}

L'horoscope carrière doit:
- Être motivant et inspirant
- Donner des conseils professionnels concrets
- Inclure des opportunités à saisir
- Être pragmatique et spirituel
- 150-200 mots

Format JSON avec: horoscope, advice, energy`;
      break;

    case 'personalized':
      prompt = `Tu es Angeline NJ, médium et guide spirituelle.
Crée une guidance personnalisée pour ${request.name || 'une personne'} du signe ${signInfo.name}.

${request.question ? `Question/Situation: ${request.question}` : ''}
${request.birthDate ? `Date de naissance: ${request.birthDate}` : ''}

Personnalité: ${signInfo.description}

La guidance doit:
- Être profondément personnalisée
- Répondre à la situation spécifique
- Inclure des conseils spirituels et pratiques
- Être bienveillante et éclairante
- 200-250 mots

Format JSON avec: horoscope, advice, mood, energy`;
      break;

    default:
      prompt = `Génère un horoscope ${request.type} pour le signe ${signInfo.name}. Format JSON avec: horoscope, advice`;
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'Tu es Angeline NJ, une voyante et médium spirituelle professionnelle, bienveillante et authentique. Tu combines astrologie, spiritualité et guidance pratique. Réponds UNIQUEMENT en JSON valide, sans markdown ni texte supplémentaire.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 1000,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur API DeepSeek: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    const result = JSON.parse(content);
    
    return {
      horoscope: result.horoscope || '',
      advice: result.advice || '',
      luckyNumber: result.luckyNumber,
      luckyColor: result.luckyColor,
      mood: result.mood,
      energy: result.energy
    };

  } catch (error) {
    console.error('Erreur génération horoscope AI:', error);
    throw new Error('Impossible de générer l\'horoscope personnalisé');
  }
}

export async function generateMultipleHoroscopes(
  signs: ZodiacSign[],
  type: 'daily' | 'weekly' | 'monthly' = 'daily'
): Promise<Record<ZodiacSign, PersonalizedHoroscopeResponse>> {
  const results: Record<string, PersonalizedHoroscopeResponse> = {};
  
  for (const sign of signs) {
    try {
      const horoscope = await generatePersonalizedHoroscope({ sign, type });
      results[sign] = horoscope;
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Erreur pour ${sign}:`, error);
    }
  }
  
  return results as Record<ZodiacSign, PersonalizedHoroscopeResponse>;
}
