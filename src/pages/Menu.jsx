import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Utensils, Flame, ChevronDown } from 'lucide-react';
import Footer from '../components/Footer';

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, categories } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'all') {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  // Category background images
  const categoryBgImages = {
    all: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop',
    burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&h=600&fit=crop',
    chicken: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=1920&h=600&fit=crop',
    sides: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f87f?w=1920&h=600&fit=crop',
    drinks: 'https://images.unsplash.com/photo-1572490122747-3968b75cc669?w=1920&h=600&fit=crop',
    desserts: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&h=600&fit=crop',
    salads: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&h=600&fit=crop',
    breakfast: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&h=600&fit=crop',
    combos: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1920&h=600&fit=crop',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Header with Background Image */}
      <div className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={categoryBgImages[selectedCategory] || categoryBgImages.all}
            alt="Menu background"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50 dark:to-gray-900" />
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Flame className="w-5 h-5 text-orange-400" />
              <span>Fresh & Delicious</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 font-display flex items-center justify-center space-x-4 drop-shadow-2xl">
              <Utensils className="w-14 h-14" />
              <span>Our Menu</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-lg">
              {selectedCategory === 'all' 
                ? 'Explore our complete collection of mouth-watering dishes'
                : `Delicious ${selectedCategory} made with love and fresh ingredients`}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative backdrop-blur-md bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-2xl p-2">
                <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for burgers, chicken, sides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 text-lg bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>

      {/* Category Filter - Sticky */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
              <Utensils className="w-20 h-20 mx-auto mb-6 text-gray-400" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                No items found
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Try a different search or category
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Results Count with Animation */}
            <div className="flex items-center justify-between mb-8 animate-slide-down">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <span className="text-lg">
                  🔥 Showing {filteredProducts.length} delicious item{filteredProducts.length !== 1 ? 's' : ''}
                </span>
              </div>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 font-medium transition-colors"
                >
                  View All →
                </button>
              )}
            </div>

            {/* Products Grid with Staggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationDuration: '600ms',
                    animationFillMode: 'both',
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
