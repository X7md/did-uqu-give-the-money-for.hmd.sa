// جزيرة تفاعلية: العدادات تُحسب في متصفح الزائر (لا تتجمد عند وقت البناء).
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';
import { Riyal } from '@/components/riyal';
import { APPEAL_DATE, AWARD_MONTHS, DEED_DATE, JUDGMENT_DATE, dayParts, daysSince } from '@/lib/case-data';

export function Counters() {
  // إعادة الحساب بعد الترطيب حتى تعكس الأرقام يوم الزيارة لا يوم البناء.
  const [now, setNow] = useState(0);
  useEffect(() => setNow(Date.now()), []);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 pt-6 sm:grid-cols-3" data-now={now}>
        <Reveal>
          <Stat n={daysSince(JUDGMENT_DATE)} label="منذ النطق بالحكم الابتدائي" />
        </Reveal>
        <Reveal delay={0.07}>
          <Stat n={daysSince(DEED_DATE)} label="منذ استلام الصك" />
        </Reveal>
        <Reveal delay={0.14}>
          <Stat n={daysSince(APPEAL_DATE)} label="منذ استئناف الجامعة" />
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
