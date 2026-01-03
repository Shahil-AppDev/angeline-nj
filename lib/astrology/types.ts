// Types pour le système astrologique

export type ZodiacSign = 
  | 'belier' | 'taureau' | 'gemeaux' | 'cancer' 
  | 'lion' | 'vierge' | 'balance' | 'scorpion' 
  | 'sagittaire' | 'capricorne' | 'verseau' | 'poissons';

export type Element = 'feu' | 'terre' | 'air' | 'eau';

export type Modality = 'cardinal' | 'fixe' | 'mutable';

export interface ZodiacSignInfo {
  id: ZodiacSign;
  name: string;
  symbol: string;
  emoji: string;
  element: Element;
  modality: Modality;
  planet: string;
  dateRange: string;
  startDate: { month: number; day: number };
  endDate: { month: number; day: number };
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: {
    best: ZodiacSign[];
    good: ZodiacSign[];
    challenging: ZodiacSign[];
  };
  description: string;
  loveDescription: string;
  careerDescription: string;
  healthDescription: string;
}

export interface BirthData {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface AscendantResult {
  sign: ZodiacSign;
  degree: number;
  interpretation: string;
  recommendations: string[];
}

export interface MoonSignResult {
  sign: ZodiacSign;
  phase: string;
  interpretation: string;
  recommendations: string[];
}

export interface CompatibilityResult {
  sign1: ZodiacSign;
  sign2: ZodiacSign;
  score: number; // 0-100
  elementCompatibility: number;
  modalityCompatibility: number;
  overall: string;
  love: string;
  communication: string;
  challenges: string;
  advice: string;
}

export interface Horoscope {
  sign: ZodiacSign;
  date: string;
  type: 'daily' | 'fullmoon' | 'yearly';
  general: string;
  love: string;
  career: string;
  health: string;
  advice: string;
  luckyNumber?: number;
  luckyColor?: string;
}

export interface NatalChart {
  sun: ZodiacSign;
  moon: ZodiacSign;
  ascendant: ZodiacSign;
  mercury: ZodiacSign;
  venus: ZodiacSign;
  mars: ZodiacSign;
  jupiter: ZodiacSign;
  saturn: ZodiacSign;
  uranus: ZodiacSign;
  neptune: ZodiacSign;
  pluto: ZodiacSign;
  houses: number[];
}
