import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE, UPDATES } from '@/lib/updates';

export function GET(context: APIContext) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: UPDATES.map((u) => ({
      title: u.title,
      description: u.description,
      pubDate: new Date(`${u.date}T00:00:00+03:00`), // تواريخ الوقائع بتوقيت السعودية
      link: `/#update-${u.date}`, // مرساة فريدة لكل تحديث (تفرّد الـ GUID)
    })),
    customData: '<language>ar</language>',
  });
}
