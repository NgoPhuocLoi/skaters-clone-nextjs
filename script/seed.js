const { sql } = require("@vercel/postgres");
const dotenv = require("dotenv");

dotenv.config({
  path: [".env.local", ".env"],
});
async function seedCategories() {
  // create categories table if not exists
  try {
    await sql`CREATE TABLE IF NOT EXISTS categories (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL
  )`;

    const { categories } = require("./data.json");

    const insertedCategories = await Promise.all(
      categories.map(
        async (category) =>
          sql`INSERT INTO categories (slug, name) VALUES (${category.slug}, ${category.name}) ON CONFLICT DO NOTHING`
      )
    );

    console.log(`Seeded ${insertedCategories.length} categories`);
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  }
}

async function seedProducts() {
  // create products table if not exists
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      price NUMERIC(10, 2) NOT NULL,
      images TEXT[],
      category_id TEXT NOT NULL REFERENCES categories(slug),
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
  )`;

    const { products } = require("./data.json");

    const insertedProducts = await Promise.all(
      products.map(
        async (product) =>
          sql`INSERT INTO products (name, description, price, images, category_id) VALUES (${product.name}, ${product.description}, ${product.price}, ${product.images}, ${product.categoryId}) ON CONFLICT DO NOTHING`
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  //   const client = await db.connect();
  // await seedCategories();
  await seedProducts();
  //   await client.end
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
