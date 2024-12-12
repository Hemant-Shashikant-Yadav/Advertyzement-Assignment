import CategoryFilter from './CategoryFilter';
import SortOptions from './SortOptions';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

const FilterBar = ({
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <SortOptions
        sortOption={sortOption}
        onSortChange={onSortChange}
      />
    </div>
  );
};

export default FilterBar;