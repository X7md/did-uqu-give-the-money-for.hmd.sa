// محاكاة لمكوّن «الختم الرقمي» (DgaDigitalSignature) من كود المنصات:
// شريط بخلفية محايدة، رأس قابل للطي (أيقونة + نص + رابط)، ومحتوى من عناصر
// تحقق دائرية الأيقونات — بنفس البنية والمقاسات (36px، حد أخضر، ظل خفيف).
import { useState } from 'react';
import { ChevronDown, Stamp, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StampItem {
  icon: LucideIcon;
  title: string;
  description: string;
  ok?: boolean;
}

export function DigitalStamp({
  heading,
  items,
  className,
}: {
  heading: string;
  items: StampItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('rounded-md bg-muted px-6 pt-2', open ? 'pb-6' : 'pb-2', className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent py-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      >
        <Stamp className="size-4 shrink-0 text-primary sm:size-5" aria-hidden />
        <p className="m-0 grow text-[13px] font-medium leading-[18px] text-foreground sm:text-sm sm:leading-5">
          {heading}
        </p>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[13px] text-primary sm:gap-2 sm:text-sm">
          {open ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
          <ChevronDown className={cn('size-4 shrink-0 transition-transform duration-200 sm:size-5', open && 'rotate-180')} aria-hidden />
        </span>
      </button>

      {open && (
        <div className="mt-6 flex flex-wrap items-start gap-[18px]">
          {items.map(({ icon: Icon, title, description, ok = true }) => (
            <div key={title} className="flex w-full items-start gap-4 sm:w-[calc(50%-9px)]">
              <span
                className={cn(
                  'flex size-9 shrink-0 items-center justify-center rounded-full border shadow-sm',
                  ok ? 'border-success text-success' : 'border-destructive text-destructive',
                )}
              >
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-sm font-semibold">{title}</span>
                <span className="text-xs leading-5 text-muted-foreground">{description}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
