import { Link } from "react-router-dom";
import { Utensils } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-colors hover:text-primary"
        >
          <Utensils className="h-6 w-6 text-primary" />
          <span className="font-bold text-3xl">FoodFacts</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
