import { useState, useEffect } from 'react';
import { Product } from '@/types';

export const useProductDetails = (code: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!code) {
        setError('Product code is required');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${code}.json`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }

        const data = await response.json();
        
        if (data.status === 0) {
          setError('Product not found');
          setProduct(null);
        } else {
          setProduct({
            code: data.code,
            product_name: data.product.product_name || 'Unknown Product',
            image_url: data.product.image_url,
            categories: data.product.categories,
            ingredients_text: data.product.ingredients_text,
            nutrition_grade_fr: data.product.nutrition_grade_fr,
            nutriments: data.product.nutriments,
            labels: data.product.labels,
            brands: data.product.brands,
            quantity: data.product.quantity,
            packaging: data.product.packaging,
            manufacturing_places: data.product.manufacturing_places,
            allergens: data.product.allergens,
          });
          setError(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [code]);

  return { product, loading, error };
};