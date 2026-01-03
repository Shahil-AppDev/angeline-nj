import { AscendantResult, BirthData, CompatibilityResult, MoonSignResult, ZodiacSign } from './types';
import { getZodiacSignFromDate, zodiacSigns } from './zodiacData';

// Calcul simplifié de l'ascendant (approximation)
export function calculateAscendant(birthData: BirthData): AscendantResult {
  const date = new Date(birthData.date + 'T' + birthData.time);
  const hour = date.getHours();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Calcul simplifié basé sur l'heure de naissance
  // Dans une vraie app, utiliser une librairie comme swisseph
  const ascendantIndex = Math.floor((hour * 2 + month) % 12);
  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
  const ascendantSign = signs[ascendantIndex];
  
  const signInfo = zodiacSigns[ascendantSign];
  
  return {
    sign: ascendantSign,
    degree: Math.floor(Math.random() * 30), // Approximation
    interpretation: `Votre ascendant ${signInfo.name} influence votre apparence et la première impression que vous donnez. ${signInfo.description}`,
    recommendations: [
      `Travaillez avec l'énergie ${signInfo.element} de votre ascendant`,
      `Exprimez les qualités de ${signInfo.planet}, votre planète gouvernante`,
      `Cultivez vos forces: ${signInfo.strengths.slice(0, 2).join(', ')}`,
      `Soyez conscient de: ${signInfo.weaknesses.slice(0, 2).join(', ')}`
    ]
  };
}

// Calcul du signe lunaire
export function calculateMoonSign(birthData: BirthData): MoonSignResult {
  const date = new Date(birthData.date + 'T' + birthData.time);
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Calcul simplifié - la lune change de signe tous les ~2.5 jours
  const moonCycle = Math.floor((dayOfYear / 2.5) % 12);
  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
  const moonSign = signs[moonCycle];
  
  // Phase lunaire approximative
  const lunarMonth = 29.53;
  const phase = Math.floor((dayOfYear % lunarMonth) / (lunarMonth / 8));
  const phases = ['Nouvelle Lune', 'Premier Croissant', 'Premier Quartier', 'Gibbeuse Croissante', 'Pleine Lune', 'Gibbeuse Décroissante', 'Dernier Quartier', 'Dernier Croissant'];
  
  const signInfo = zodiacSigns[moonSign];
  
  return {
    sign: moonSign,
    phase: phases[phase],
    interpretation: `Votre Lune en ${signInfo.name} révèle votre monde émotionnel intérieur. ${signInfo.description} Sur le plan émotionnel, vous ressentez les choses avec l'intensité de l'élément ${signInfo.element}.`,
    recommendations: [
      `Honorez vos besoins émotionnels ${signInfo.element}`,
      `Utilisez des pierres associées à ${signInfo.name}: améthyste, quartz rose`,
      `Pratiquez des rituels lors de la ${phases[phase]}`,
      `Cultivez votre intuition lunaire avec la méditation`
    ]
  };
}

// Calcul de compatibilité amoureuse
export function calculateCompatibility(sign1: ZodiacSign, sign2: ZodiacSign): CompatibilityResult {
  const info1 = zodiacSigns[sign1];
  const info2 = zodiacSigns[sign2];
  
  // Compatibilité des éléments
  const elementScore = calculateElementCompatibility(info1.element, info2.element);
  
  // Compatibilité des modalités
  const modalityScore = calculateModalityCompatibility(info1.modality, info2.modality);
  
  // Score basé sur les listes de compatibilité
  let baseScore = 50;
  if (info1.compatibility.best.includes(sign2)) baseScore = 90;
  else if (info1.compatibility.good.includes(sign2)) baseScore = 70;
  else if (info1.compatibility.challenging.includes(sign2)) baseScore = 40;
  
  const finalScore = Math.round((baseScore + elementScore + modalityScore) / 3);
  
  return {
    sign1,
    sign2,
    score: finalScore,
    elementCompatibility: elementScore,
    modalityCompatibility: modalityScore,
    overall: getOverallCompatibility(finalScore),
    love: getLoveCompatibility(info1, info2, finalScore),
    communication: getCommunicationCompatibility(info1, info2),
    challenges: getCompatibilityChallenges(info1, info2),
    advice: getCompatibilityAdvice(info1, info2, finalScore)
  };
}

function calculateElementCompatibility(element1: string, element2: string): number {
  const compatibility: Record<string, Record<string, number>> = {
    feu: { feu: 85, terre: 45, air: 75, eau: 50 },
    terre: { feu: 45, terre: 80, air: 50, eau: 85 },
    air: { feu: 75, terre: 50, air: 90, eau: 55 },
    eau: { feu: 50, terre: 85, air: 55, eau: 90 }
  };
  return compatibility[element1][element2];
}

function calculateModalityCompatibility(modality1: string, modality2: string): number {
  if (modality1 === modality2) return 70;
  const compatibility: Record<string, Record<string, number>> = {
    cardinal: { fixe: 60, mutable: 75 },
    fixe: { cardinal: 60, mutable: 65 },
    mutable: { cardinal: 75, fixe: 65 }
  };
  return compatibility[modality1][modality2] || 60;
}

function getOverallCompatibility(score: number): string {
  if (score >= 80) return "Excellente compatibilité ! Vous formez un couple harmonieux avec une connexion naturelle profonde.";
  if (score >= 65) return "Très bonne compatibilité. Vous partagez de nombreuses valeurs et pouvez construire une relation épanouissante.";
  if (score >= 50) return "Compatibilité moyenne. Avec des efforts et de la communication, votre relation peut s'épanouir.";
  return "Compatibilité challengeante. Vos différences peuvent être enrichissantes mais nécessitent travail et compréhension mutuelle.";
}

function getLoveCompatibility(info1: any, info2: any, score: number): string {
  if (score >= 75) {
    return `${info1.name} et ${info2.name} partagent une alchimie naturelle. Votre connexion ${info1.element}-${info2.element} crée une attraction magnétique. L'amour s'épanouit facilement entre vous.`;
  }
  return `${info1.name} et ${info2.name} peuvent construire un amour profond en honorant leurs différences. Votre relation demande patience mais offre une croissance mutuelle enrichissante.`;
}

function getCommunicationCompatibility(info1: any, info2: any): string {
  const airSigns = ['gemeaux', 'balance', 'verseau'];
  const bothAir = airSigns.includes(info1.id) && airSigns.includes(info2.id);
  
  if (bothAir) {
    return "Communication fluide et intellectuelle. Vous vous comprenez naturellement et partagez facilement vos idées.";
  }
  return "La communication nécessite des ajustements. Prenez le temps d'écouter et de comprendre le langage émotionnel de l'autre.";
}

function getCompatibilityChallenges(info1: any, info2: any): string {
  return `Attention aux tensions potentielles: ${info1.weaknesses[0]} de ${info1.name} peut se heurter à ${info2.weaknesses[0]} de ${info2.name}. La clé est la conscience et l'acceptation mutuelle.`;
}

function getCompatibilityAdvice(info1: any, info2: any, score: number): string {
  if (score >= 75) {
    return `Cultivez votre connexion naturelle en pratiquant des rituels ensemble. Utilisez des bougies et des pierres pour renforcer votre lien énergétique.`;
  }
  return `Travaillez sur la compréhension mutuelle. Un tirage de couple personnalisé peut vous aider à naviguer vos différences et à renforcer votre union.`;
}

// Obtenir le signe solaire à partir de la date de naissance
export function getSunSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  return getZodiacSignFromDate(date.getMonth() + 1, date.getDate());
}
