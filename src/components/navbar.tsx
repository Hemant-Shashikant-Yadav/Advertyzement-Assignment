import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">FoodFacts</span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;