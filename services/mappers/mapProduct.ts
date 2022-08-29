import { Product } from "../models/product";

export type MysqlProduct = {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  image_url: string;
  price: number;
};

export function mapProducts(products: MysqlProduct[]): Product[] {
  return products.map(
    ({ id, name, category_id, category_name, image_url, price }) => ({
      id,
      name,
      categoryId: category_id,
      category: category_name,
      imageUrl: image_url,
      price,
    })
  );
}
