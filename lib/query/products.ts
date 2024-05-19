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

export async function fetchProductsByCategory(categoryId: string) {}

export async function countProductByCategory(categoryId: string) {
  try {
    const result = await sql<{ count: number }>`
      SELECT COUNT(*) FROM products WHERE category_id = ${categoryId}
    `;

    return result.rows[0].count;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to count product by category.");
  }
}
