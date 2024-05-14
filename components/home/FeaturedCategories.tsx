import Image from "next/image";

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
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            Featured Categories
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best skateboarding gears from stores around the world
          </h3>
        </div>
        <a
          href="/products"
          className="hidden md:flex gap-1 text-emerald-700 hover:translate-x-1 hover:text-emerald-600 transition-all"
        >
          Shop the collection{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
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
    </section>
  );
}
