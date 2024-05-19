import Image from "next/image";
import HomeSection from "./HomeSection";
import { categories as myCategories } from "@/constants";
import { countProductByCategory } from "@/lib/query/products";

export default async function FeaturedCategories() {
  const numberOfProducts = await Promise.all(
    myCategories.map((category) => countProductByCategory(category.slug))
  );

  return (
    <HomeSection
      title="Featured Categories"
      description="Find the best skateboarding gears from stores around the world"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {myCategories.map((category, index) => (
          <a href={`/products?category=${category.slug}`} key={index}>
            <div className="border text-card-foreground shadow-sm relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group hover:bg-emerald-600">
              <div className="flex flex-col space-y-1.5 p-6">
                <Image
                  className="text-transparent"
                  alt="test"
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  src="https://skaters-inifarhan.vercel.app/svg/clothing.svg"
                />
              </div>
              <div className="p-6 pt-0 space-y-1.5">
                <h3 className="text-2xl font-semibold leading-none tracking-tight capitalize text-emerald-600 group-hover:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  {numberOfProducts[index]} Products
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </HomeSection>
  );
}
