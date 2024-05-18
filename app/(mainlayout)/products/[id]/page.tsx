import { fetchProductById } from "@/lib/query/products";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await fetchProductById(params.id);

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="p-4 sm:p-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="flex flex-col-reverse">
              <div className="mt-6 w-full">
                <div
                  className="grid grid-cols-4 gap-6"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  {product.images.map((image, index) => (
                    <button
                      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
                      id="headlessui-tabs-tab-:rh:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-controls="headlessui-tabs-panel-:ri:"
                      key={index}
                    >
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <Image
                            src={image}
                            alt="Product's image"
                            width={600}
                            height={600}
                          />
                        </span>
                        <span className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-black"></span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="aspect-square w-full">
                <div
                  id="headlessui-tabs-panel-:ri:"
                  role="tabpanel"
                  tabIndex={0}
                  data-headlessui-state="selected"
                  aria-labelledby="headlessui-tabs-tab-:rh:"
                >
                  <div className="aspect-square relative h-full w-full rounded-lg overflow-hidden">
                    {" "}
                    <Image
                      src={
                        product.images[0] || "https://via.placeholder.com/300"
                      }
                      alt="Product's image"
                      width={1000}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <div className="mt-3 flex items-end justify-between">
                <h2 className="text-2xl font-medium text-gray-900">
                  {product.price}
                </h2>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full my-4"
              ></div>
              <div className="flex flex-col gap-y-6">
                <h3 className="font-medium">Description :</h3>
                <p>{product.description}</p>
              </div>
              <div className="mt-10 flex items-center gap-x-3">
                <button className="justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:ease relative overflow-hidden bg-emerald-600 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-40 duration-700 h-10 px-4 py-2 flex items-center gap-x-2">
                  Add To Cart
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
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
