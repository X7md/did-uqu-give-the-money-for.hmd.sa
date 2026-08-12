// جزيرة تفاعلية: أكورديون الأسئلة الشائعة.
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';
import { FAQ } from '@/lib/case-data';

export function FaqSection() {
  return (
    <Reveal amount={0.1}>
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
    </Reveal>
  );
}
