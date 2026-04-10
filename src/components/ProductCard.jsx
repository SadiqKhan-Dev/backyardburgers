import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { ShoppingCart, Star, Flame, Gift } from 'lucide-react';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`, {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  const renderSpicyIndicator = (level) => {
    if (level === 0) return null;
    
    return (
      <div className="flex items-center space-x-1" title={`Spice Level: ${level}/3`}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Flame
            key={i}
            className={`w-4 h-4 ${
              i < level ? 'text-red-500 fill-red-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {product.featured && (
            <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
              <Star className="w-3 h-3 fill-white" />
              <span>Featured</span>
            </div>
          )}
          
          {product.isCombo && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
              <Gift className="w-3 h-3" />
              <span>Combo</span>
            </div>
          )}

          {product.savings && (
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Save ${product.savings.toFixed(2)}
            </div>
          )}
        </div>

        {/* Calorie Badge */}
        {product.calories && (
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.calories} cal
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-2xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Rating & Reviews */}
        {product.rating && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-semibold text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviews})
              </span>
            </div>
            {renderSpicyIndicator(product.spicy)}
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
