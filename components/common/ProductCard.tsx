import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full">
      <Link href="/product/1">
        <div className="aspect-square m-3 rounded-2xl bg-gray-100 relative">
          <Image
            src={
              "https://skaters-inifarhan.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F459d04a2-c952-402d-93d8-58f200be25b9-7h9h9c.png&w=1920&q=75"
            }
            alt="Product's image"
            width={300}
            height={300}
          />
        </div>

        <div className="px-4 space-y-3 pb-6">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Clothing</p>
            <p
              className="font-semibold group-hover/card:text-emerald-800 text-lg truncate"
              title="Test"
            >
              Test
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-emerald-700">
              Rp&nbsp;10.000,00
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
