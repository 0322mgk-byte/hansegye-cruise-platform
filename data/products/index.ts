import type { ProductDefinition, ProductMeta } from '@/data/types';

// Lightweight meta-only imports (no heavy schedule/modal data)
import { meta as alaskaMeta } from './alaska-cruise/meta';
import { meta as northEuropeMeta } from './north-europe-cruise/meta';
import { meta as westernMedMeta } from './western-mediterranean-cruise/meta';
// import { meta as arabiaMeta } from './arabia-cruise/meta'; // 임시 비활성화
import { meta as southernMedMeta } from './southern-mediterranean-cruise/meta';
import { meta as okinawaTaiwanMeta } from './okinawa-taiwan-cruise/meta';
import { meta as hawaiiMeta } from './hawaii-cruise/meta';
import { meta as easternMedMeta } from './eastern-mediterranean-cruise/meta';
import { meta as westernEuropeMeta } from './western-europe-cruise/meta';

const productMetas: ProductMeta[] = [
  alaskaMeta,
  northEuropeMeta,
  westernMedMeta,
  // arabiaMeta, // 임시 비활성화
  southernMedMeta,
  okinawaTaiwanMeta,
  hawaiiMeta,
  easternMedMeta,
  westernEuropeMeta,
];

export function getAllProductMetas(): ProductMeta[] {
  return productMetas;
}

export async function getProductBySlug(slug: string): Promise<ProductDefinition | null> {
  switch (slug) {
    case 'alaska-cruise': return (await import('./alaska-cruise')).alaskaCruise;
    case 'north-europe-cruise': return (await import('./north-europe-cruise')).northEuropeCruise;
    case 'western-mediterranean-cruise': return (await import('./western-mediterranean-cruise')).westernMediterraneanCruise;
    case 'arabia-cruise': return (await import('./arabia-cruise')).arabiaCruise;
    case 'southern-mediterranean-cruise': return (await import('./southern-mediterranean-cruise')).southernMediterraneanCruise;
    case 'okinawa-taiwan-cruise': return (await import('./okinawa-taiwan-cruise')).okinawaTaiwanCruise;
    case 'hawaii-cruise': return (await import('./hawaii-cruise')).hawaiiCruise;
    case 'eastern-mediterranean-cruise': return (await import('./eastern-mediterranean-cruise')).easternMediterraneanCruise;
    case 'western-europe-cruise': return (await import('./western-europe-cruise')).westernEuropeCruise;
    default: return null;
  }
}

export function getAllSlugs(): string[] {
  return productMetas.map(m => m.slug);
}
