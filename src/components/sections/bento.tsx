// جزيرة تفاعلية (تحوي روابط مستندات تفتح نوافذ): قسم التعريف — بينتو.
import { Card } from '@/components/ui/card';
import { DocDialog } from '@/components/ui/doc-dialog';
import { Reveal } from '@/components/reveal';
import { Riyal } from '@/components/riyal';
import { CHARTER_DOC, DOC_LINK_INLINE, SUPREME_ORDER_DOC } from '@/lib/case-data';
import { Accessibility, BookOpen, Building2, ListChecks, ScrollText } from 'lucide-react';

export function BentoSection() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {/* الأصل: بدل قارئ ووسائل معينة */}
      <Reveal className="col-span-6 sm:col-span-4">
        <Card className="h-full p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary-light text-primary">
              <BookOpen className="size-4" aria-hidden />
            </span>
            <h3 className="m-0 text-base font-bold">البداية: «بدل قارئ ووسائل معينة»</h3>
          </div>
          <p className="m-0 text-sm leading-7 text-muted-foreground">
            بقرار مجلس الوزراء رقم (15) وتاريخ 1400/02/26هـ تقررت مكافأة شهرية للطلبة الجامعيين
            «المكفوفين» تعادل راتب الدرجة الأولى من المرتبة الخامسة — سُميت «بدل قارئ ووسائل معينة»
            لأن غرضها تمكين الطالب الكفيف من الاستعانة بقارئ وبالوسائل المساعدة على الدراسة والتنقل.
          </p>
        </Card>
      </Reveal>
      {/* عمر التنظيم */}
      <Reveal delay={0.08} className="col-span-6 sm:col-span-2">
        <Card className="flex h-full flex-col items-center justify-center bg-primary p-6 text-center text-primary-foreground">
          <p className="m-0 text-5xl font-black">+40</p>
          <p className="m-0 pt-1 text-sm font-semibold">عامًا على التنظيم الأصلي (1400هـ)</p>
        </Card>
      </Reveal>
      {/* التوسعة بالأمر السامي */}
      <Reveal className="col-span-6 sm:col-span-3">
        <Card className="h-full p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary-light text-primary">
              <ScrollText className="size-4" aria-hidden />
            </span>
            <h3 className="m-0 text-base font-bold">التوسعة: الأمر السامي 7/ب/12814</h3>
          </div>
          <p className="m-0 text-sm leading-7 text-muted-foreground">
            في 1420/08/13هـ صدر{' '}
            <DocDialog
              label="الأمر السامي رقم 7/ب/12814"
              title={SUPREME_ORDER_DOC.title}
              pages={SUPREME_ORDER_DOC.pages}
              className={DOC_LINK_INLINE}
            />{' '}
            بشمول الطلبة الجامعيين «المعاقين» بالمكافأة أسوة بزملائهم المكفوفين: شديدو الإعاقة بما
            يعادل راتب الدرجة الأولى من المرتبة الخامسة، ومتوسطو الإعاقة بمبلغ 1500 <Riyal /> شهريًا
            — على أن تتولى وزارة العمل والشؤون الاجتماعية (الموارد البشرية حاليًا) تحديد نوع
            الإعاقة ومستواها.
          </p>
        </Card>
      </Reveal>
      {/* الفئات */}
      <Reveal delay={0.08} className="col-span-6 sm:col-span-3">
        <Card className="h-full p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary-light text-primary">
              <ListChecks className="size-4" aria-hidden />
            </span>
            <h3 className="m-0 text-base font-bold">صُنفت إلى فئتين</h3>
          </div>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm leading-7 text-muted-foreground">
            <li>
              <strong className="text-foreground">الفئة الأولى (شديد الإعاقة):</strong> راتب الدرجة
              الأولى من المرتبة الخامسة.
            </li>
            <li>
              <strong className="text-foreground">الفئة الثانية (متوسط الإعاقة):</strong> 1500{' '}
              <Riyal /> شهريًا — وهي فئة صاحب هذه الصفحة بقرار الوزارة.
            </li>
            <li>
              تعميم وزارة التعليم ووزارة العمل والتنمية الاجتماعية (1440هـ) يفصّل الحالات المستحقة
              لكل فئة.
            </li>
          </ul>
        </Card>
      </Reveal>
      {/* في لائحة الجامعة */}
      <Reveal className="col-span-6 sm:col-span-4">
        <Card className="h-full p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary-light text-primary">
              <Building2 className="size-4" aria-hidden />
            </span>
            <h3 className="m-0 text-base font-bold">وفي لائحة الجامعة نفسها</h3>
          </div>
          <p className="m-0 text-sm leading-7 text-muted-foreground">
            الفقرة (ز) من المادة 67 من{' '}
            <DocDialog
              label="لائحة حقوق وواجبات الطالب"
              title={CHARTER_DOC.title}
              pages={CHARTER_DOC.pages}
              className={DOC_LINK_INLINE}
            />{' '}
            تنص على البدل ذاته حرفيًا، وتُلزم «الجهات المختصة في الجامعة» بضمان حصول الطالب على
            مكافآته وبدلاته المستحقة نظامًا «وانتظام صرفها دون تأخير».
          </p>
        </Card>
      </Reveal>
      {/* الخلاصة */}
      <Reveal delay={0.08} className="col-span-6 sm:col-span-2">
        <Card className="flex h-full flex-col items-center justify-center bg-primary-light p-6 text-center">
          <Accessibility className="mb-2 size-8 text-primary" aria-hidden />
          <p className="m-0 text-sm font-bold leading-6">
            الوزارة تصنّف، والجامعة تصرف — هذا كل التنظيم.
          </p>
        </Card>
      </Reveal>
    </div>
  );
}
