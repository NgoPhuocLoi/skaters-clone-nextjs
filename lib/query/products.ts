import { Product } from "@/types/Product";
import { sql } from "@vercel/postgres";

interface ProductQuery {
  limit: number;
}

export async function fetchPopularProducts() {
  try {
    const result =
      await sql<Product>`SELECT * FROM products ORDER BY created_at DESC LIMIT 8`;

    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch popular products.");
  }
}

export async function fetchAllProducts(query?: ProductQuery) {
  const limit = query?.limit || 16;
  try {
    const result = await sql<Product>`SELECT * FROM products LIMIT ${limit}`;

    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all products.");
  }
}

export async function fetchProductById(id: string) {
  try {
    const result = await sql<Product>`SELECT * FROM products WHERE id = ${id}`;

    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product by id.");
  }
}
