export interface Product {
  code: string;
  product_name: string;
  image_url?: string;
  categories?: string;
  ingredients_text?: string;
  nutrition_grade_fr?: string;
  nutriments?: {
    energy_100g?: number;
    proteins_100g?: number;
    carbohydrates_100g?: number;
    fat_100g?: number;
    fiber_100g?: number;
    salt_100g?: number;
  };
  labels?: string;
  brands?: string;
  quantity?: string;
  packaging?: string;
  manufacturing_places?: string;
  allergens?: string;
}