// رابط نصي يفتح نافذة (Dialog من Base UI) تعرض صور صفحات المستند.
import { Dialog } from '@base-ui/react/dialog';
import { FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function DocDialog({
  label,
  title,
  pages,
  className,
}: {
  label: ReactNode;
  title: string;
  pages: string[];
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={cn(
          'inline cursor-pointer border-0 bg-transparent p-0 align-baseline font-[inherit] text-[length:inherit] font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring',
          className,
        )}
      >
        {label}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Popup
          dir="rtl"
          className="fixed inset-x-4 top-[5dvh] z-50 mx-auto flex max-h-[90dvh] w-auto max-w-2xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xl"
        >
          <header className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
            <Dialog.Title className="m-0 flex items-center gap-2 text-sm font-bold">
              <FileText className="size-4 text-primary" aria-hidden />
              {title}
            </Dialog.Title>
            <Dialog.Close
              aria-label="إغلاق"
              className="flex size-8 cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent text-muted-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X className="size-4" aria-hidden />
            </Dialog.Close>
          </header>
          <div className="flex flex-col gap-3 overflow-y-auto bg-muted p-4">
            {pages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${title} — صفحة ${i + 1}`}
                loading="lazy"
                className="w-full rounded-sm border border-border bg-white"
              />
            ))}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
