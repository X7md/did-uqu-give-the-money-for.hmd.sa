// جزيرة تفاعلية (روابط المستندات): مسار القضية.
import { Card } from '@/components/ui/card';
import { DocDialog } from '@/components/ui/doc-dialog';
import { Reveal } from '@/components/reveal';
import { CASE_PATH, CHARTER_DOC, DOC_LINK_INLINE, SUPREME_ORDER_DOC } from '@/lib/case-data';

export function CasePathSection() {
  return (
    <Card className="px-6 py-5">
      <blockquote className="m-0 mb-5 border-s-4 border-primary bg-primary-light ps-4 pe-3 py-3 text-sm leading-7">
        «وعليه حكمت الدائرة: <strong>بإلغاء قرار المدعى عليها الممتنع</strong> عن صرف مكافأة الطلبة
        الجامعيين المعاقين للمدعي، وذلك من تاريخ 1443/03/19هـ وحتى تاريخ 1446/06/30هـ»
        <footer className="pt-1 text-xs text-muted-foreground">
          — منطوق الحكم الابتدائي، الدعوى 75594 لعام 1447هـ
        </footer>
      </blockquote>
      <p className="m-0 mb-5 text-sm text-muted-foreground">
        السندان الأصليان (انقر للاطلاع):{' '}
        <DocDialog
          label="الأمر السامي 7/ب/12814"
          title={SUPREME_ORDER_DOC.title}
          pages={SUPREME_ORDER_DOC.pages}
          className={DOC_LINK_INLINE}
        />{' '}
        ·{' '}
        <DocDialog
          label="لائحة حقوق وواجبات الطالب (م67/ز)"
          title={CHARTER_DOC.title}
          pages={CHARTER_DOC.pages}
          className={DOC_LINK_INLINE}
        />
      </p>
      <ol className="m-0 flex list-none flex-col gap-5 p-0">
        {CASE_PATH.map(({ title, text }, i) => (
          <li key={title}>
            <Reveal delay={i * 0.05} amount={0.4} className="flex items-start gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="m-0 text-sm font-bold">{title}</p>
                <p className="m-0 pt-1 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Card>
  );
}
