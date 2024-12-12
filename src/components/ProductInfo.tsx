import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { Package, Factory, AlertTriangle } from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-square relative mb-6 rounded-lg overflow-hidden">
            <img
              src={product.image_url || 'https://via.placeholder.com/400'}
              alt={product.product_name}
              className="object-contain w-full h-full"
            />
            {product.nutrition_grade_fr && (
              <Badge
                className="absolute top-2 right-2"
                variant={getNutritionGradeVariant(product.nutrition_grade_fr)}
              >
                Nutri-Score {product.nutrition_grade_fr.toUpperCase()}
              </Badge>
            )}
          </div>

          <div className="space-y-4">
            {product.brands && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Brands</h3>
                <p className="mt-1">{product.brands}</p>
              </div>
            )}

            {product.quantity && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Quantity</h3>
                <p className="mt-1">{product.quantity}</p>
              </div>
            )}

            {product.categories && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {product.categories.split(',').map((category) => (
                    <Badge key={category} variant="secondary">
                      {category.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {product.labels && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Labels</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {product.labels.split(',').map((label) => (
                    <Badge key={label} variant="outline">
                      {label.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Packaging & Manufacturing
          </CardTitle>
        </CardHeader>
        <CardContent>
          {product.packaging && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">Packaging</h3>
              <p className="mt-1">{product.packaging}</p>
            </div>
          )}

          {product.manufacturing_places && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Manufacturing Places</h3>
              <p className="mt-1">{product.manufacturing_places}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {product.allergens && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Allergens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{product.allergens}</p>
          </CardContent>
        </Card>
      )}
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

export default ProductInfo;