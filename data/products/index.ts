import type { ProductDefinition, ProductMeta } from '@/data/types';

// Lightweight meta-only imports (no heavy schedule/modal data)
import { meta as alaskaMeta } from './alaska-emerald-princess/meta';
import { meta as northEuropeMeta } from './north-europe-diadema/meta';
import { meta as westernMedMeta } from './western-med-seaview/meta';
// import { meta as arabiaMeta } from './arabia-toscana/meta'; // 임시 비활성화
import { meta as southernMedMeta } from './southern-med-fortuna/meta';
import { meta as okinawaTaiwanMeta } from './okinawa-taiwan-bellissima/meta';
import { meta as hawaiiMeta } from './hawaii-pride-of-america/meta';
import { meta as easternMedMeta } from './eastern-med-scarlet-lady/meta';
import { meta as westernEuropeMeta } from './western-europe-preziosa/meta';

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
    case 'alaska-emerald-princess': return (await import('./alaska-emerald-princess')).alaskaEmeraldPrincess;
    case 'north-europe-diadema': return (await import('./north-europe-diadema')).northEuropeDiadema;
    case 'western-med-seaview': return (await import('./western-med-seaview')).westernMedSeaview;
    case 'arabia-toscana': return (await import('./arabia-toscana')).arabiaToscana;
    case 'southern-med-fortuna': return (await import('./southern-med-fortuna')).southernMedFortuna;
    case 'okinawa-taiwan-bellissima': return (await import('./okinawa-taiwan-bellissima')).okinawaTaiwanBellissima;
    case 'hawaii-pride-of-america': return (await import('./hawaii-pride-of-america')).hawaiiPrideOfAmerica;
    case 'eastern-med-scarlet-lady': return (await import('./eastern-med-scarlet-lady')).easternMedScarletLady;
    case 'western-europe-preziosa': return (await import('./western-europe-preziosa')).westernEuropePreziosa;
    default: return null;
  }
}

export function getAllSlugs(): string[] {
  return productMetas.map(m => m.slug);
}
