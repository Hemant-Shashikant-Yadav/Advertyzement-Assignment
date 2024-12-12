import { Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

const WelcomeScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-primary/5 to-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative inline-block animate-float">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
          <div className={cn(
            "relative p-6 rounded-full",
            "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
            "text-white shadow-lg",
          )}>
            <Utensils className="w-16 h-16" />
          </div>
        </div>
        
        <div className="space-y-3 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FoodFacts Explorer
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover the story behind your food
          </p>
        </div>

        <div className="w-48 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto overflow-hidden">
          <div className="animate-shimmer h-full" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
