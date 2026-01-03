import { generateDailyHoroscopes, saveDailyHoroscopes } from '@/lib/cron/horoscope-generator';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET || 'your-secret-key';

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    console.log('[CRON] Début génération horoscopes quotidiens');
    
    const horoscopes = await generateDailyHoroscopes();
    await saveDailyHoroscopes(horoscopes);

    const generatedCount = Object.keys(horoscopes).length;

    return NextResponse.json({
      success: true,
      message: `${generatedCount} horoscopes générés avec succès`,
      date: new Date().toISOString(),
      horoscopes: Object.keys(horoscopes)
    });

  } catch (error) {
    console.error('[CRON] Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la génération des horoscopes' },
      { status: 500 }
    );
  }
}
