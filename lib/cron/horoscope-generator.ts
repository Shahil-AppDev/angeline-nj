import { ZodiacSign } from '../astrology/types';
import { generatePersonalizedHoroscope } from '../deepseek/horoscope-ai';

export interface DailyHoroscope {
  date: string;
  sign: ZodiacSign;
  horoscope: string;
  advice: string;
  luckyNumber: number;
  luckyColor: string;
  mood: string;
  energy: number;
}

export async function generateDailyHoroscopes(): Promise<Record<ZodiacSign, DailyHoroscope>> {
  const signs: ZodiacSign[] = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];
  const today = new Date().toISOString().split('T')[0];
  const horoscopes: Partial<Record<ZodiacSign, DailyHoroscope>> = {};

  console.log(`[CRON] Génération des horoscopes quotidiens pour le ${today}`);

  for (const sign of signs) {
    try {
      const result = await generatePersonalizedHoroscope({
        sign,
        type: 'daily'
      });

      horoscopes[sign] = {
        date: today,
        sign,
        horoscope: result.horoscope,
        advice: result.advice,
        luckyNumber: result.luckyNumber || Math.floor(Math.random() * 99) + 1,
        luckyColor: result.luckyColor || 'Violet',
        mood: result.mood || 'Équilibré',
        energy: result.energy || 7
      };

      console.log(`[CRON] ✓ Horoscope généré pour ${sign}`);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`[CRON] ✗ Erreur pour ${sign}:`, error);
    }
  }

  return horoscopes as Record<ZodiacSign, DailyHoroscope>;
}

export async function saveDailyHoroscopes(horoscopes: Record<ZodiacSign, DailyHoroscope>): Promise<void> {
  const fs = require('fs').promises;
  const path = require('path');
  
  const dataDir = path.join(process.cwd(), 'data', 'horoscopes');
  const today = new Date().toISOString().split('T')[0];
  const filePath = path.join(dataDir, `${today}.json`);

  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(horoscopes, null, 2));
    console.log(`[CRON] Horoscopes sauvegardés: ${filePath}`);
  } catch (error) {
    console.error('[CRON] Erreur sauvegarde:', error);
  }
}

export async function loadTodayHoroscopes(): Promise<Record<ZodiacSign, DailyHoroscope> | null> {
  const fs = require('fs').promises;
  const path = require('path');
  
  const dataDir = path.join(process.cwd(), 'data', 'horoscopes');
  const today = new Date().toISOString().split('T')[0];
  const filePath = path.join(dataDir, `${today}.json`);

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}
