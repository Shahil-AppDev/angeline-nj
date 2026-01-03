export interface MoonPhase {
  phase: 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';
  illumination: number;
  age: number;
  emoji: string;
  name: string;
  description: string;
  energy: string;
  ritual: string;
}

export interface LunarDay {
  date: Date;
  phase: MoonPhase;
  zodiacSign: string;
  isSpecial: boolean;
  specialEvent?: string;
}

const LUNAR_CYCLE = 29.53059;

export function calculateMoonPhase(date: Date = new Date()): MoonPhase {
  const knownNewMoon = new Date('2000-01-06T18:14:00Z');
  const diffTime = date.getTime() - knownNewMoon.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  
  const age = diffDays % LUNAR_CYCLE;
  const illumination = (1 - Math.cos((age / LUNAR_CYCLE) * 2 * Math.PI)) / 2;
  
  let phase: MoonPhase['phase'];
  let emoji: string;
  let name: string;
  let description: string;
  let energy: string;
  let ritual: string;
  
  if (age < 1.84566) {
    phase = 'new';
    emoji = '🌑';
    name = 'Nouvelle Lune';
    description = 'Phase de renouveau et de nouveaux départs';
    energy = 'Introspection, intentions, nouveaux départs';
    ritual = 'Méditation, définir vos intentions, rituels de manifestation';
  } else if (age < 7.38264) {
    phase = 'waxing-crescent';
    emoji = '🌒';
    name = 'Premier Croissant';
    description = 'Phase de croissance et d\'action';
    energy = 'Action, courage, mise en mouvement';
    ritual = 'Passer à l\'action sur vos intentions, bougie blanche';
  } else if (age < 9.22831) {
    phase = 'first-quarter';
    emoji = '🌓';
    name = 'Premier Quartier';
    description = 'Phase de décision et de défis';
    energy = 'Détermination, persévérance, ajustements';
    ritual = 'Surmonter les obstacles, rituels de force';
  } else if (age < 14.76529) {
    phase = 'waxing-gibbous';
    emoji = '🌔';
    name = 'Lune Gibbeuse Croissante';
    description = 'Phase de perfectionnement';
    energy = 'Raffinement, patience, préparation';
    ritual = 'Peaufiner vos projets, gratitude';
  } else if (age < 16.61096) {
    phase = 'full';
    emoji = '🌕';
    name = 'Pleine Lune';
    description = 'Phase de culmination et de révélation';
    energy = 'Accomplissement, libération, célébration';
    ritual = 'Rituels de libération, eau de lune, gratitude';
  } else if (age < 22.14794) {
    phase = 'waning-gibbous';
    emoji = '🌖';
    name = 'Lune Gibbeuse Décroissante';
    description = 'Phase de partage et de gratitude';
    energy = 'Partage, enseignement, gratitude';
    ritual = 'Partager vos connaissances, aider les autres';
  } else if (age < 23.99361) {
    phase = 'last-quarter';
    emoji = '🌗';
    name = 'Dernier Quartier';
    description = 'Phase de lâcher-prise';
    energy = 'Libération, pardon, nettoyage';
    ritual = 'Rituels de purification, lâcher-prise';
  } else {
    phase = 'waning-crescent';
    emoji = '🌘';
    name = 'Dernier Croissant';
    description = 'Phase de repos et de réflexion';
    energy = 'Repos, réflexion, préparation';
    ritual = 'Méditation, repos, bilan';
  }
  
  return {
    phase,
    illumination: Math.round(illumination * 100),
    age: Math.round(age * 10) / 10,
    emoji,
    name,
    description,
    energy,
    ritual
  };
}

export function getLunarCalendar(year: number, month: number): LunarDay[] {
  const calendar: LunarDay[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const phase = calculateMoonPhase(date);
    
    const isSpecial = phase.phase === 'new' || phase.phase === 'full';
    let specialEvent: string | undefined;
    
    if (phase.phase === 'new') {
      specialEvent = 'Nouvelle Lune - Nouveaux départs';
    } else if (phase.phase === 'full') {
      specialEvent = 'Pleine Lune - Rituels de libération';
    }
    
    const zodiacSigns = ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons'];
    const zodiacIndex = Math.floor((day / daysInMonth) * 12);
    
    calendar.push({
      date,
      phase,
      zodiacSign: zodiacSigns[zodiacIndex],
      isSpecial,
      specialEvent
    });
  }
  
  return calendar;
}

export function getNextFullMoon(fromDate: Date = new Date()): Date {
  let checkDate = new Date(fromDate);
  
  for (let i = 0; i < 60; i++) {
    const phase = calculateMoonPhase(checkDate);
    if (phase.phase === 'full') {
      return checkDate;
    }
    checkDate.setDate(checkDate.getDate() + 1);
  }
  
  return checkDate;
}

export function getNextNewMoon(fromDate: Date = new Date()): Date {
  let checkDate = new Date(fromDate);
  
  for (let i = 0; i < 60; i++) {
    const phase = calculateMoonPhase(checkDate);
    if (phase.phase === 'new') {
      return checkDate;
    }
    checkDate.setDate(checkDate.getDate() + 1);
  }
  
  return checkDate;
}
