import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "@/components/ProductGrid";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorMessage from "@/components/error-message";

const ProductListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("name-asc");

  const { products, loading, error, loadMore, hasMore } = useProducts({
    searchQuery,
    category: selectedCategory,
    sortOption,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Discover Food Products">
        <div className="max-w-3xl mx-auto w-full space-y-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>
      </PageHeader>

      <main className="flex-1 container mx-auto px-4 py-8">
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <ProductGrid products={products} loading={loading} />
            {loading && <LoadingSpinner />}
            {hasMore && !loading && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMore}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-orange-400 hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Load More Products
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ProductListPage;
