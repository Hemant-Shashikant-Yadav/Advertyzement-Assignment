import { useParams } from 'react-router-dom';
import { useProductDetails } from '@/hooks/useProductDetails';
import ProductInfo from '@/components/ProductInfo';
import NutritionInfo from '@/components/NutritionInfo';
import PageHeader from '@/components/PageHeader';

const ProductDetailPage = () => {
  const { code } = useParams();
  const { product, loading, error } = useProductDetails(code);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <PageHeader title={product.product_name} showBackButton />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductInfo product={product} />
          <NutritionInfo product={product} />
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;