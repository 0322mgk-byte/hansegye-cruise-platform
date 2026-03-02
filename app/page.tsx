import Link from "next/link";
import { getAllProductMetas } from "@/data/products";

export default function HomePage() {
  const products = getAllProductMetas();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-12 md:py-20">
        <h1 className="text-[24px] md:text-4xl font-bold text-gray-900 text-center">
          크루즈 상품
        </h1>
        <p className="mt-2 md:mt-3 text-base md:text-lg text-gray-600 text-center">
          전세계 크루즈 여행 전문 여행사
        </p>
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                <img
                  src={product.thumbnailImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-[#0054a0]">{product.cardDepartureLabel}</p>
                <h2 className="mt-1 text-lg font-bold text-gray-900">{product.cardTitle}</h2>
                <p className="mt-1 text-sm text-gray-600">선사: {product.cardShipName}</p>
                <p className="mt-2 text-sm text-gray-600">{product.cardRoute}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{product.cardPrice}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
