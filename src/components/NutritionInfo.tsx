import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Product } from '@/types';
import { Apple } from 'lucide-react';

interface NutritionInfoProps {
  product: Product;
}

const NutritionInfo = ({ product }: NutritionInfoProps) => {
  const nutriments = product.nutriments || {};

  const nutritionItems = [
    {
      label: 'Energy',
      value: nutriments.energy_100g,
      unit: 'kcal',
      max: 400,
    },
    {
      label: 'Proteins',
      value: nutriments.proteins_100g,
      unit: 'g',
      max: 20,
    },
    {
      label: 'Carbohydrates',
      value: nutriments.carbohydrates_100g,
      unit: 'g',
      max: 100,
    },
    {
      label: 'Fat',
      value: nutriments.fat_100g,
      unit: 'g',
      max: 100,
    },
    {
      label: 'Fiber',
      value: nutriments.fiber_100g,
      unit: 'g',
      max: 10,
    },
    {
      label: 'Salt',
      value: nutriments.salt_100g,
      unit: 'g',
      max: 6,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Apple className="h-5 w-5" />
            Nutrition Facts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-6">Per 100g serving</p>
          
          <div className="space-y-6">
            {nutritionItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm text-gray-500">
                    {item.value != null ? `${item.value.toFixed(1)} ${item.unit}` : 'N/A'}
                  </span>
                </div>
                {item.value != null && (
                  <Progress value={(item.value / item.max) * 100} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {product.ingredients_text && (
        <Card>
          <CardHeader>
            <CardTitle>Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{product.ingredients_text}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NutritionInfo;