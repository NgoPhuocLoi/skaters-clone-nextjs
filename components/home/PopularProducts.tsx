import Link from "next/link";
import ProductCard from "../common/ProductCard";
import HomeSection from "./HomeSection";

export default function PopularProducts() {
  return (
    <HomeSection
      title="Popular Products"
      description="Explore all products we offer from around the world"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <Link
        className="items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:ease relative overflow-hidden text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 duration-700 h-10 px-4 py-2 mx-auto bg-emerald-700 flex w-fit hover:before:-translate-x-48"
        href="/products"
      >
        View all products
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
          className="ml-2 h-4 w-4"
          aria-hidden="true"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </HomeSection>
  );
}
