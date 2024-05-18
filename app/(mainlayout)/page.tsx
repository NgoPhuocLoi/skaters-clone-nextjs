import Banner from "@/components/home/Banner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import PopularProducts from "@/components/home/PopularProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloned Skaters ",
  description: "Welcome to our store",
};

export default function HomePage() {
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <FeaturedCategories />
        <PopularProducts />
      </div>
    </main>
  );
}
