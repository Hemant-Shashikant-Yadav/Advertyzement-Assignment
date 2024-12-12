import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/types';

interface UseProductsProps {
  searchQuery: string;
  category: string;
  sortOption: string;
}

const PAGE_SIZE = 24;

export const useProducts = ({ searchQuery, category, sortOption }: UseProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async (isLoadMore = false) => {
    try {
      setLoading(true);
      setError(null);

      let url = 'https://world.openfoodfacts.org/cgi/search.pl';
      const params = new URLSearchParams({
        json: 'true',
        page_size: PAGE_SIZE.toString(),
        page: page.toString(),
        search_terms: searchQuery,
        action: 'process',
      });

      if (category !== 'all') {
        params.append('tagtype_0', 'categories');
        params.append('tag_0', category);
      }

      const response = await fetch(`${url}?${params}`);
      if (!response.ok) throw new Error('Failed to fetch products');

      const data = await response.json();
      const newProducts = data.products.map((product: any) => ({
        code: product.code,
        product_name: product.product_name || 'Unknown Product',
        image_url: product.image_url,
        categories: product.categories,
        ingredients_text: product.ingredients_text,
        nutrition_grade_fr: product.nutrition_grade_fr,
      }));

      // Sort products
      const sortedProducts = sortProducts(
        isLoadMore ? [...products, ...newProducts] : newProducts,
        sortOption
      );

      setProducts(sortedProducts);
      setHasMore(data.products.length === PAGE_SIZE);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, category, page, sortOption]);

  useEffect(() => {
    setPage(1);
    fetchProducts();
  }, [searchQuery, category, sortOption]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    fetchProducts(true);
  };

  return { products, loading, error, loadMore, hasMore };
};

const sortProducts = (products: Product[], sortOption: string) => {
  return [...products].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return (a.product_name || '').localeCompare(b.product_name || '');
      case 'name-desc':
        return (b.product_name || '').localeCompare(a.product_name || '');
      case 'grade-asc':
        return (a.nutrition_grade_fr || 'z').localeCompare(b.nutrition_grade_fr || 'z');
      case 'grade-desc':
        return (b.nutrition_grade_fr || 'z').localeCompare(a.nutrition_grade_fr || 'z');
      default:
        return 0;
    }
  });
};