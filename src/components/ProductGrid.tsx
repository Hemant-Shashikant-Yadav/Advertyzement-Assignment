import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

const ProductGrid = ({ products, loading }: ProductGridProps) => {
  if (loading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <Skeleton className="h-48 w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.code} to={`/product/${product.code}`}>
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="aspect-square relative">
              <img
                src={product.image_url || 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}
                alt={product.product_name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {product.nutrition_grade_fr && (
                <Badge
                  className="absolute top-2 right-2"
                  variant={getNutritionGradeVariant(product.nutrition_grade_fr)}
                >
                  Grade {product.nutrition_grade_fr.toUpperCase()}
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.product_name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {product.categories?.split(',')[0] || 'Uncategorized'}
              </p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.ingredients_text || 'No ingredients information available'}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const getNutritionGradeVariant = (grade: string) => {
  const variants: Record<string, "default" | "destructive" | "secondary"> = {
    a: "default",
    b: "secondary",
    c: "secondary",
    d: "destructive",
    e: "destructive",
  };
  return variants[grade.toLowerCase()] || "default";
};

export default ProductGrid;