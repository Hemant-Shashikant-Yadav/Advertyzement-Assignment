import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SortOptionsProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

const sortOptions = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'grade-asc', label: 'Nutrition Grade (Best)' },
  { value: 'grade-desc', label: 'Nutrition Grade (Worst)' },
];

const SortOptions = ({ sortOption, onSortChange }: SortOptionsProps) => {
  return (
    <Select value={sortOption} onValueChange={onSortChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortOptions;