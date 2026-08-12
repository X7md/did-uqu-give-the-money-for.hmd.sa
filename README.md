# did-uqu-give-the-money.to.hmd.sa

صفحة حالة فكاهية بسؤال واحد وجواب واحد:

> **هل صرفت جامعة أم القرى بدل الإعاقة عن فترة سابقة؟ — لا. (ليس بعد)**

كل محتوى الصفحة مستند إلى وثائق حقيقية من ملف الدعوى الإدارية رقم **75594 لعام 1447هـ**
(المحكمة الإدارية الرقمية — ديوان المظالم): صك الحكم الابتدائي بإلغاء قرار الامتناع،
لائحة استئناف الجامعة، وسجل المراسلات. يُحدَّث الجواب فور الصرف.

**A single-question humorous status page** — "Has UQU paid the court-ordered disability
allowance for the past period? **No. (not yet)**" — backed entirely by documented case records.

## التقنية

- [Vite](https://vitejs.dev) + React 18 + TypeScript
- Tailwind CSS v4
- مكوّنات بأسلوب [shadcn](https://ui.shadcn.com) مبنية فوق [Base UI](https://base-ui.com)
  (Accordion, Dialog, Button, Badge, Card, Digital Stamp)
- لغة التصميم مستوحاة من نظام التصميم الحكومي «كود المنصات» — التوكنز المستخرجة موثقة في
  [`DGA-NOTES.md`](./DGA-NOTES.md)
- رمز الريال السعودي الرسمي (U+20C1) كـ SVG مضمّن — `src/components/riyal.tsx`

## التشغيل

```bash
npm install
npm run dev      # التطوير
npm run build    # الإنتاج → dist/
npm run preview  # معاينة النسخة المبنية
```

## تنبيه

موقع شخصي مستقل **فكاهي/توثيقي** — ليس موقعًا حكوميًا، ولا يتبع جامعة أم القرى ولا هيئة
الحكومة الرقمية، ولا يستخدم أي شعار رسمي. الفكاهة أسلوب تعبير؛ والوقائع كلها من مستندات
القضية.
