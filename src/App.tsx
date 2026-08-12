import type { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DigitalStamp } from '@/components/ui/digital-stamp';
import { DocDialog } from '@/components/ui/doc-dialog';
import { Riyal } from '@/components/riyal';
import { CircleCheck, CircleX, Download, FileCheck2, Mails, Scale } from 'lucide-react';

// ── الحقائق الثابتة (من صك الحكم ووثائق القضية 75594 لعام 1447هـ) ─────────────
const JUDGMENT_DATE = new Date('2026-06-08'); // النطق 1447-12-22هـ
const DEED_DATE = new Date('2026-06-23'); // تسليم الصك 1448-01-08هـ
const APPEAL_DATE = new Date('2026-07-26'); // وصول لائحة استئناف الجامعة
const daysSince = (d: Date) => Math.max(0, Math.floor((Date.now() - d.getTime()) / 86_400_000));

const AWARD_MONTHS = 39; // المدة المحكوم بها: 1443/03/19هـ ← 1446/06/30هـ

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: 'ما هذا الموقع؟',
    a: 'صفحة حالة فكاهية بسؤال واحد وجواب واحد. كل ما فيها مستند إلى وثائق حقيقية: صك حكم قضائي، لائحة استئناف، مراسلات وتذاكر موثقة — الدعوى الإدارية رقم 75594 لعام 1447هـ أمام المحكمة الإدارية الرقمية (ديوان المظالم).',
  },
  {
    q: 'هل يوجد حكم قضائي فعلًا؟',
    a: 'نعم — حكم ابتدائي غير نهائي. في 1447/12/22هـ (2026-06-08م) حكمت الدائرة الرقمية التاسعة والأربعون بإلغاء قرار الامتناع — أي أن امتناع الجامعة عن الصرف قرار إداري قضت المحكمة ببطلانه — وبالصرف عن المدة من 1443/03/19هـ حتى 1446/06/30هـ، والحكم الآن منظور أمام محكمة الاستئناف.',
  },
  {
    q: 'ما سند الاستحقاق أصلًا؟',
    a: (
      <>
        <DocDialog
          label="الأمر السامي رقم 7/ب/12814 وتاريخ 1420/08/13هـ"
          title="برقية الأمر السامي 7/ب/12814 — مكافأة الطلبة الجامعيين المعاقين"
          pages={['/docs/supreme-order-1.jpg']}
        />
        ، والفقرة (ز) من المادة 67 من{' '}
        <DocDialog
          label="لائحة حقوق وواجبات الطالب"
          title="لائحة حقوق وواجبات الطالب — المواد 66–69 (م67/ز: بدل ذوي الاحتياجات الخاصة)"
          pages={['/docs/student-charter-1.jpg', '/docs/student-charter-2.jpg', '/docs/student-charter-3.jpg']}
        />{' '}
        بالجامعة نفسها، وقرار وزارة الموارد البشرية بتصنيف الإعاقة (الفئة الثانية). أي أن الجامعة
        تُطالَب بتطبيق لائحتها هي.
      </>
    ),
  },
  {
    q: 'كم المبلغ الذي لم يُصرف؟',
    a: (
      <>
        بدل شهري مقداره 1500 <Riyal /> (الفئة الثانية — متوسطو الإعاقة) عن كامل المدة المحكوم بها
        ابتدائيًا (1443/03/19هـ ← 1446/06/30هـ). عملية الضرب متروكة للقارئ؛ الآلة الحاسبة ليست الطرف الممتنع
        هنا.
      </>
    ),
  },
  {
    q: 'ماذا فعلت الجامعة بعد صدور الحكم الابتدائي؟',
    a: 'لم تنفذ؛ اعترضت عليه بلائحة استئناف (وصلت في 2026-07-26) تطلب نقض الحكم ورفض الدعوى. اللائحة تعيد الدفوع نفسها التي رفضتها الدائرة، وتضيف حجة «إغفال وقائع جوهرية» مستندة إلى أوراق إدارية.',
  },
  {
    q: 'ألا يكون الطالب «مفرطًا» تأخر بطلبه كما تقول الجامعة؟',
    a: 'هذه حجة الجامعة أمام المحكمة («المفرط أولى بالخسارة») — ورفضتها الدائرة. والوثائق تُظهر خلافها: التصنيف قائم لدى الوزارة منذ 2013، وجدول الإعاقات المعتمد أدرج حالته قبل التحاقه أصلًا.',
  },
  {
    q: 'هل جرّب الطالب «القنوات الرسمية»؟',
    a: 'جرّبها كلها منذ 2023: تذاكر (أُغلقت أو صُنفت خطأً)، برقية رسمية لرئيس الجامعة (بلا رد)، خطابات ولقاءات، ثم الرفع للمقام السامي عبر إمارة منطقة مكة المكرمة والديوان الملكي. وعندما ذكر حسابات الجامعة على منصة X؟ حُظر من الحساب الرسمي لعمادة شؤون الطلاب ومن حساب كليته.',
  },
  {
    q: 'من يقف خلف الموقع؟',
    a: 'صاحب الحق في الدعوى 75594 بصفته الشخصية. الموقع مستقل ولا يتبع أي جهة.',
  },
];

const STATUS = [
  { icon: CircleCheck, label: 'قرار الامتناع', detail: 'أُلغي بحكم ابتدائي', ok: true },
  { icon: Scale, label: 'اعتراض الجامعة', detail: 'بالدفوع نفسها', ok: false },
  { icon: CircleX, label: 'التنفيذ', detail: 'لم يحدث', ok: false },
] as const;

const CASE_PATH = [
  {
    title: 'قرار الامتناع',
    text: 'امتنعت الجامعة عن صرف بدل الإعاقة المقرر بالأمر السامي 7/ب/12814 وبالمادة 67/ز من لائحتها، رغم التظلمات والمطالبات منذ 2023.',
  },
  {
    title: 'الحكم الابتدائي: إلغاء قرار الامتناع',
    text: 'في 1447/12/22هـ قضت الدائرة الرقمية 49 بإلغاء قرار الامتناع بوصفه قرارًا إداريًا بلا سند، وبالصرف عن المدة من 1443/03/19هـ حتى 1446/06/30هـ — فالقرار الوزاري «كاشف» للحق لا «منشئ» له.',
  },
  {
    title: 'اعتراض الجامعة على الحكم الابتدائي',
    text: 'استأنفت الجامعة بإعادة الدفوع نفسها التي رفضتها الدائرة (القرار «منشئ»، وتأخر الطالب)، مضيفةً حجة «إغفال وقائع جوهرية» مستندة إلى أوراق إدارية.',
  },
  {
    title: 'رد الطالب بالمثل والتصعيد للمقام السامي',
    text: 'بعد اعتراض الجامعة ردّ الطالب بالمثل — تمسكًا بالحكم الابتدائي وسوابقه القضائية — وصعّد للمقام السامي عبر إمارة منطقة مكة المكرمة والديوان الملكي، مع مواصلة المطالبة بالتنفيذ.',
  },
  {
    title: 'بانتظار محكمة الاستئناف',
    text: 'الحكم غير نهائي والتنفيذ معلق. الجواب أعلاه يبقى «لا» حتى يُنفذ.',
  },
] as const;

const STAMP_ITEMS = [
  {
    icon: FileCheck2,
    title: 'صك الحكم الابتدائي',
    description: 'الدعوى 75594 لعام 1447هـ — نسخة مستخرجة من بوابة ديوان المظالم (غير نهائي؛ منظور استئنافًا).',
  },
  {
    icon: Scale,
    title: 'لائحة الاستئناف',
    description: 'واردة من الجامعة بتاريخ 2026-07-26 ومؤرشفة كاملة (17 صفحة).',
  },
  {
    icon: Mails,
    title: 'سجل المراسلات',
    description: 'التذاكر والبرقيات والخطابات محفوظة بلقطات موثقة بتواريخها.',
  },
  {
    icon: CircleX,
    title: 'إيصال الصرف',
    description: 'العنصر الوحيد غير المتوفر في الأرشيف. ننتظره ليكتمل الختم.',
    ok: false,
  },
];

export default function App() {
  return (
    <div dir="rtl" className="flex min-h-dvh flex-col">
      <div className="border-b border-border bg-muted">
        <div className="mx-auto w-full max-w-3xl px-5">
          <DigitalStamp
            heading="هذا ليس موقعًا حكوميًا — صفحة فكاهية مستقلة موثقة ذاتيًا من صاحب الحق"
            items={STAMP_ITEMS}
            className="rounded-none bg-transparent px-0"
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-3xl grow flex-col px-5 py-8">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-primary text-lg font-black text-primary-foreground">
              لا
            </span>
            <div>
              <p className="m-0 text-sm font-bold">منصة «هل صُرفت المستحقات؟»</p>
              <p className="m-0 font-mono text-xs text-muted-foreground" dir="ltr">
                did-uqu-give-the-money-for.hmd.sa
              </p>
            </div>
          </div>
          <Badge variant="outline">الإصدار 1448.02 · يُحدَّث حتى الصرف</Badge>
        </header>

        {/* السؤال والجواب */}
        <main className="flex flex-col items-center gap-6 py-14 text-center">
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

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button size="lg" onClick={() => document.getElementById('faq-title')?.scrollIntoView({ behavior: 'smooth' })}>
              الأسئلة الشائعة
            </Button>
            <Button size="lg" variant="outline" disabled title="لا يوجد إيصال بعد">
              <Download className="size-4" aria-hidden />
              تحميل إيصال التحويل (غير متاح)
            </Button>
          </div>

          {/* العدادات */}
          <div className="grid w-full grid-cols-1 gap-3 pt-6 sm:grid-cols-3">
            <Stat n={daysSince(JUDGMENT_DATE)} label="يومًا منذ النطق بالحكم الابتدائي" />
            <Stat n={daysSince(DEED_DATE)} label="يومًا منذ استلام الصك" />
            <Stat n={daysSince(APPEAL_DATE)} label="يومًا منذ استئناف الجامعة" />
          </div>
          <Card className="w-full px-6 py-4">
            <p className="m-0 text-sm text-muted-foreground">
              المدة التي قضت الدائرة ابتدائيًا بالصرف عنها (1443/03/19هـ ← 1446/06/30هـ):
              <span className="mx-2 text-lg font-black text-foreground">
                {AWARD_MONTHS.toLocaleString('ar-SA')}
              </span>
              شهرًا… والرصيد الواصل منها: 0 <Riyal className="text-foreground" />
            </p>
          </Card>
        </main>

        {/* مسار القضية */}
        <section aria-labelledby="path-title" className="pb-10">
          <h2 id="path-title" className="m-0 mb-1 text-xl font-bold">
            مسار القضية باختصار
          </h2>
          <p className="m-0 mb-4 text-sm text-muted-foreground">
            النقطة المحورية: قرار الامتناع أُلغي بحكم ابتدائي — والخلاف الآن على تثبيت الإلغاء استئنافيًا لا على أصل الحق.
          </p>
          <Card className="px-6 py-5">
            <blockquote className="m-0 mb-5 border-s-4 border-primary bg-primary-light ps-4 pe-3 py-3 text-sm leading-7">
              «وعليه حكمت الدائرة: <strong>بإلغاء قرار المدعى عليها الممتنع</strong> عن صرف مكافأة
              الطلبة الجامعيين المعاقين للمدعي، وذلك من تاريخ 1443/03/19هـ وحتى تاريخ 1446/06/30هـ»
              <footer className="pt-1 text-xs text-muted-foreground">
                — منطوق الحكم الابتدائي، الدعوى 75594 لعام 1447هـ
              </footer>
            </blockquote>
            <p className="m-0 mb-5 text-sm text-muted-foreground">
              السندان الأصليان (انقر للاطلاع):{' '}
              <DocDialog
                label="الأمر السامي 7/ب/12814"
                title="برقية الأمر السامي 7/ب/12814 — مكافأة الطلبة الجامعيين المعاقين"
                pages={['/docs/supreme-order-1.jpg']}
              />{' '}
              ·{' '}
              <DocDialog
                label="لائحة حقوق وواجبات الطالب (م67/ز)"
                title="لائحة حقوق وواجبات الطالب — المواد 66–69 (م67/ز: بدل ذوي الاحتياجات الخاصة)"
                pages={['/docs/student-charter-1.jpg', '/docs/student-charter-2.jpg', '/docs/student-charter-3.jpg']}
              />
            </p>
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {CASE_PATH.map(({ title, text }, i) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="m-0 text-sm font-bold">{title}</p>
                    <p className="m-0 pt-1 text-sm leading-7 text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* الأسئلة الشائعة */}
        <section aria-labelledby="faq-title" className="pb-8">
          <h2 id="faq-title" className="m-0 mb-1 scroll-mt-6 text-xl font-bold">
            الأسئلة الشائعة
          </h2>
          <p className="m-0 mb-4 text-sm text-muted-foreground">
            كل إجابة أدناه مسنودة بوثيقة في ملف الدعوى 75594 لعام 1447هـ.
          </p>
          <Card className="px-6 py-2">
            <Accordion multiple={false}>
              {FAQ.map(({ q, a }) => (
                <AccordionItem key={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        <footer className="mt-auto border-t border-border pt-6 text-center text-xs leading-6 text-muted-foreground">
          <p className="m-0">
            موقع فكاهي توثيقي مستقل لا يمثل أي جهة — الوقائع من ملف الدعوى <bdi>75594</bdi> لعام{' '}
            <bdi>1447هـ</bdi>، ويُحدَّث الجواب فور الصرف.
          </p>
          <p className="m-0 pt-1 text-muted-foreground/80">
            © <bdi>١٤٤٨هـ</bdi> / <time dateTime="2026">٢٠٢٦م</time>
          </p>
        </footer>
      </div>
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <Card className="px-4 py-5">
      <p className="m-0 text-4xl font-black tabular-nums">{n.toLocaleString('ar-SA')}</p>
      <p className="m-0 pt-1 text-xs text-muted-foreground">{label}</p>
    </Card>
  );
}
