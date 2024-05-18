import ProductCard from "@/components/common/ProductCard";
import { fetchAllProducts } from "@/lib/query/products";

export default async function ProductsPage() {
  const products = await fetchAllProducts();

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl text-emerald-600 font-bold tracking-tight">
              Products ({products.length})
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore all products from around the world
            </p>
          </div>
          <div className="flex mt-8 sm:mt-10 mb-4 sm:mb-6">
            <button
              className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:ease relative overflow-hidden bg-emerald-600 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-40 duration-700 h-10 px-4 py-2 flex items-center gap-x-2"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r12:"
              data-state="closed"
            >
              Filters
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
                className="lucide lucide-plus"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
