import { addProduct } from "@/actions/product";
import UploadedImageSection from "@/components/product/UploadImageSection";
import { categories } from "@/constants";

export default async function AddProductPage() {
  return (
    <div className="p-5 ">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-fit mx-auto">
        <div className="flex flex-col p-6 space-y-1">
          <h3 className="font-semibold tracking-tight text-2xl">Add product</h3>
          <p className="text-sm text-muted-foreground">
            Add a new product to your store
          </p>
        </div>

        <div className="p-6 pt-0 ">
          <form action={addProduct} className="grid w-full max-w-xl gap-5">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor=":r1k:-form-item"
              >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type product name here."
                id=":r1k:-form-item"
                aria-describedby=":r1k:-form-item-description"
                aria-invalid="false"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor=":r1l:-form-item"
              >
                Description
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type product description here."
                name="description"
                id=":r1l:-form-item"
                aria-describedby=":r1l:-form-item-description"
                aria-invalid="false"
              ></textarea>
            </div>

            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="space-y-2 flex-1 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor=":r1m:-form-item"
                >
                  Category
                </label>

                <select
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  tabIndex={-1}
                  name="category"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option value={category.slug}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 flex-1 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor=":r1o:-form-item"
                >
                  Price
                </label>
                <div
                  className="relative"
                  id=":r1o:-form-item"
                  aria-describedby=":r1o:-form-item-description"
                  aria-invalid="false"
                >
                  <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center">
                    $
                  </p>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                    placeholder="0"
                    type="number"
                    name="price"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Images
              </label>
              <UploadedImageSection />
            </div>

            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:ease relative overflow-hidden bg-emerald-600 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-40 duration-700 h-10 px-4 py-2">
              Add Product<span className="sr-only">Add Product</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
