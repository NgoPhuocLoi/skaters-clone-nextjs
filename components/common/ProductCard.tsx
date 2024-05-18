import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square m-3 rounded-2xl bg-gray-100 relative ">
          <Image
            className="object-contain w-100 object-center "
            src={product.images[0] || "https://via.placeholder.com/300"}
            alt="Product's image"
            fill
          />
        </div>

        <div className="px-4 space-y-3 pb-6">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{product.category_id}</p>
            <p
              className="font-semibold group-hover/card:text-emerald-800 text-lg truncate"
              title="Test"
            >
              {product.name}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-emerald-700">
              {product.price}
            </div>
            <div className="flex justify-center group/icon">
              <button
                className="rounded-full flex items-center justify-center border shadow-md p-2 duration-300 transition-all bg-emerald-50 group-hover/icon:bg-emerald-500"
                aria-label="add-to-cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-emerald-600 group-hover/icon:text-emerald-50"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
