import type { ProductDefinition, ProductMeta } from '@/data/types';
import { alaskaCruise } from './alaska-cruise';
import { northEuropeCruise } from './north-europe-cruise';
import { westernMediterraneanCruise } from './western-mediterranean-cruise';
import { arabiaCruise } from './arabia-cruise';

const products: ProductDefinition[] = [alaskaCruise, northEuropeCruise, westernMediterraneanCruise, arabiaCruise];

export function getAllProductMetas(): ProductMeta[] {
  return products.map(p => p.meta);
}

export async function getProductBySlug(slug: string): Promise<ProductDefinition | null> {
  return products.find(p => p.meta.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return products.map(p => p.meta.slug);
}
