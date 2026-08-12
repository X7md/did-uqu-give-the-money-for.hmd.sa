// shadcn-style Accordion built on Base UI primitives.
import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function Accordion({ className, ...props }: ComponentProps<typeof BaseAccordion.Root>) {
  return <BaseAccordion.Root className={cn('w-full', className)} {...props} />;
}

export function AccordionItem({ className, ...props }: ComponentProps<typeof BaseAccordion.Item>) {
  return <BaseAccordion.Item className={cn('border-b border-border last:border-b-0', className)} {...props} />;
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header className="m-0">
      <BaseAccordion.Trigger
        className={cn(
          'group flex w-full items-center justify-between gap-4 bg-transparent py-4 text-start text-base font-semibold',
          'cursor-pointer border-0 text-foreground outline-none transition-colors hover:text-primary',
          'focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[panel-open]:rotate-180"
          aria-hidden
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel className={cn('overflow-hidden', className)} {...props}>
      {/* يُركَّب المحتوى عند كل فتح، فتعمل حركة الدخول (ارتفاع 0 ← تلقائي) في كل مرة. */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-sm leading-7 text-muted-foreground">{children}</div>
      </motion.div>
    </BaseAccordion.Panel>
  );
}
