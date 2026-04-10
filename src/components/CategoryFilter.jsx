import * as LucideIcons from 'lucide-react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => {
        const IconComponent = LucideIcons[category.icon] || LucideIcons.Utensils;
        
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
            }`}
          >
            <IconComponent className="w-5 h-5" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
