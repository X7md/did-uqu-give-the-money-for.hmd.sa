import * as React from 'react';

/** الجوال يأخذ درجًا سفليًا بدل النافذة المنبثقة. */
export const PHONE_QUERY = '(max-width: 639px)';

/**
 * Subscribes to a CSS media query (same recipe as the sibling projects:
 * three lines of useSyncExternalStore instead of Base UI's unstable hook).
 */
export function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query],
  );

  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
