// جزيرة تفاعلية: العدادات تُحسب في متصفح الزائر بأيام تقويمية بتوقيت السعودية —
// تُعاد بعد الترطيب (فلا تتجمد عند وقت البناء) وتنقلب تلقائيًا عند منتصف الليل بمكة.
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';
import { Riyal } from '@/components/riyal';
import {
  APPEAL_ISO,
  AWARD_MONTHS,
  DEED_ISO,
  JUDGMENT_ISO,
  dayParts,
  daysSinceKSA,
  msUntilNextKsaMidnight,
} from '@/lib/case-data';

export function Counters() {
  const [today, setToday] = useState(''); // فارغ أثناء SSG؛ يُملأ بعد الترطيب فيُعاد الحساب.
  useEffect(() => {
    const tick = () => setToday(new Date().toISOString());
    tick();
    const timer = setTimeout(tick, msUntilNextKsaMidnight() + 1000);
    return () => clearTimeout(timer);
  }, [today]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 pt-6 sm:grid-cols-3" data-today={today}>
        <Reveal>
          <Stat n={daysSinceKSA(JUDGMENT_ISO)} label="منذ النطق بالحكم الابتدائي" />
        </Reveal>
        <Reveal delay={0.07}>
          <Stat n={daysSinceKSA(DEED_ISO)} label="منذ استلام الصك" />
        </Reveal>
        <Reveal delay={0.14}>
          <Stat n={daysSinceKSA(APPEAL_ISO)} label="منذ استئناف الجامعة" />
        </Reveal>
      </div>
      <Reveal className="w-full">
        <Card className="w-full px-6 py-4">
          <p className="m-0 text-sm text-muted-foreground">
            المدة التي قضت الدائرة ابتدائيًا بالصرف عنها (1443/03/19هـ ← 1446/06/30هـ):
            <span className="mx-2 text-lg font-black text-foreground">
              {AWARD_MONTHS.toLocaleString('ar-SA')}
            </span>
            شهرًا… والرصيد الواصل منها: 0 <Riyal className="text-foreground" />
          </p>
        </Card>
      </Reveal>
    </>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  const { num, word } = dayParts(n);
  return (
    <Card className="px-4 py-5">
      <p className="m-0 flex items-baseline justify-center gap-2">
        {num !== null && <span className="text-4xl font-black tabular-nums">{num}</span>}
        <span className={num === null ? 'text-3xl font-black' : 'text-base font-bold text-muted-foreground'}>
          {word}
        </span>
      </p>
      <p className="m-0 pt-1 text-xs text-muted-foreground">{label}</p>
    </Card>
  );
}
