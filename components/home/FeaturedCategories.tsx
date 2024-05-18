import Image from "next/image";
import HomeSection from "./HomeSection";

export default function FeaturedCategories() {
  const categories = [
    {
      title: "Skateboards",
      iconUrl: "https://skaters-inifarhan.vercel.app/svg/skateboards.svg",
      numberOfProducts: 2,
      link: "/products?category=skateboards",
    },
    {
      title: "Clothing",
      iconUrl: "https://skaters-inifarhan.vercel.app/svg/clothing.svg",
      numberOfProducts: 19,
      link: "/products?category=skateboards",
    },
    {
      title: "Shoes",
      iconUrl: "https://skaters-inifarhan.vercel.app/svg/shoes.svg",
      numberOfProducts: 10,
      link: "/products?category=skateboards",
    },
    {
      title: "Accessories",
      iconUrl: "https://skaters-inifarhan.vercel.app/svg/accessories.svg",
      numberOfProducts: 8,
      link: "/products?category=skateboards",
    },
  ];

  return (
    <HomeSection
      title="Featured Categories"
      description="Find the best skateboarding gears from stores around the world"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <a href={category.link} key={index}>
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
                  src={category.iconUrl}
                />
              </div>
              <div className="p-6 pt-0 space-y-1.5">
                <h3 className="text-2xl font-semibold leading-none tracking-tight capitalize text-emerald-600 group-hover:text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                  {category.numberOfProducts} Products
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </HomeSection>
  );
}
