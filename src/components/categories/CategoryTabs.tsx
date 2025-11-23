import { Badge } from "../ui/badge";

const categories = [
  "Sports",
  "Technology",
  "Health",
  "Education",
  "Travel",
  "Food",
  "Entertainment",
  "Business",
  "Lifestyle",
  "Science",
  "Art",
  "Politics",
];

const CategoryTab = () => {
  return (
    <div className="flex flex-wrap my-3 gap-3">
      {categories.map((category) => (
        <Badge
          key={category}
          variant="outline"
          className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryTab;
