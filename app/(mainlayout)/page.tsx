import Banner from "@/components/home/Banner";
import FeaturedCategories from "@/components/home/FeaturedCategories";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <FeaturedCategories />
      </div>
    </main>
  );
}
