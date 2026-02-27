import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getAllSlugs } from "@/data/products";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TripInfo from "@/app/components/TripInfo";
import Intro from "@/app/components/Intro";
import Features from "@/app/components/Features";
import Details from "@/app/components/Details";
import Schedule from "@/app/components/Schedule";
import ProductInfo from "@/app/components/ProductInfo";
import Pricing from "@/app/components/Pricing";
import TripSummary from "@/app/components/TripSummary";
import Checklist from "@/app/components/Checklist";
import Footer from "@/app/components/Footer";
import MobileBottomBar from "@/app/components/MobileBottomBar";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  const { meta } = product;
  return {
    title: meta.ogTitle,
    description: meta.ogDescription,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [{ url: meta.ogImage }],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [meta.ogImage],
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const { data } = product;

  return (
    <main className="relative">
      <Header data={data.header} mainPhone={data.footer.mainPhone ?? ''} kakaoUrl={data.mobileBottomBar.kakaoUrl} />
      <Hero data={data.hero} />
      <TripInfo data={data.tripInfo} duration={data.hero.duration} />
      <Intro data={data.intro} />
      <Features data={data.features} />
      <Details data={data.details} />
      <Schedule data={data.schedule} />
      <ProductInfo data={data.productInfo} />
      <Pricing data={data.pricing} />
      <TripSummary data={data.tripSummary} />
      <Checklist data={data.checklist} />
      <Footer data={data.footer} />
      <MobileBottomBar data={data.mobileBottomBar} pricingData={data.pricing} />
    </main>
  );
}
