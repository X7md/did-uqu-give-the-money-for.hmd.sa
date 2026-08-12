// يُصيَّر ثابتًا (بلا ترطيب): البطل والحالة والأزرار — التنقل بروابط مرساة.
import { Badge } from '@/components/ui/badge';
import { STATUS } from '@/lib/case-data';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <>
      <h1 className="m-0 text-2xl font-bold sm:text-3xl">
        هل صرفت جامعة أم القرى بدل الإعاقة عن فترة سابقة؟
      </h1>

      <p className="m-0 select-none text-[9rem] font-black leading-none text-destructive sm:text-[12rem]">
        لا
      </p>
      <p className="m-0 text-2xl font-semibold text-muted-foreground">(ليس بعد)</p>

      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {STATUS.map(({ icon: Icon, label, detail, ok }) => (
          <Badge key={label} variant={ok ? 'success' : 'destructive'}>
            <Icon className="size-3.5" aria-hidden />
            {label} — {detail}
          </Badge>
        ))}
      </div>

      <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center">
        <a
          href="#faq-title"
          className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-sm bg-primary px-4 py-3 text-base font-semibold text-primary-foreground no-underline transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          الأسئلة الشائعة
        </a>
        <button
          disabled
          title="لا يوجد إيصال بعد"
          className="inline-flex cursor-not-allowed appearance-none items-center justify-center gap-1 rounded-sm border-0 bg-transparent px-4 py-3 text-base font-semibold text-muted-foreground outline outline-1 -outline-offset-1 outline-border"
        >
          <Download className="size-4" aria-hidden />
          تحميل إيصال التحويل (غير متاح)
        </button>
      </div>
    </>
  );
}
