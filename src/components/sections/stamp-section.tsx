// جزيرة تفاعلية: شريط الختم الرقمي أعلى الصفحة (طي/فتح).
import { DigitalStamp } from '@/components/ui/digital-stamp';
import { Riyal } from '@/components/riyal';
import { STAMP_ITEMS } from '@/lib/case-data';

export function StampSection() {
  return (
    <div className="border-b border-border bg-muted">
      <div className="mx-auto w-full max-w-3xl px-5 lg:max-w-5xl">
        <DigitalStamp
          heading="هذا ليس موقعًا حكوميًا — صفحة فكاهية مستقلة موثقة ذاتيًا من صاحب الحق"
          registration={
            <div className="inline-flex items-center gap-x-6 rounded-md border border-border/60 bg-card px-6 py-2">
              <Riyal className="size-6 shrink-0 text-primary" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="m-0 text-sm font-normal text-foreground">القضية منظورة لدى الاستئناف برقم:</p>
                <a
                  className="cursor-pointer text-sm font-normal text-primary underline hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                  href="https://www.bog.gov.sa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <bdi>75594</bdi> لعام <bdi>1447هـ</bdi>
                </a>
              </div>
            </div>
          }
          items={STAMP_ITEMS}
          className="rounded-none bg-transparent px-0"
        />
      </div>
    </div>
  );
}
