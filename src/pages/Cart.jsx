import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {
  PartyPopper,
  ShoppingCart,
  Utensils,
  Package,
  Truck,
} from 'lucide-react';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../features/cart/cartSlice';
import { placeOrder } from '../features/orders/orderSlice';
import toast from 'react-hot-toast';
import Footer from '../components/Footer';

function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('dine-in');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const tax = totalAmount * 0.08; // 8% tax
  const total = totalAmount + tax;

  const handleRemoveItem = (itemId, itemName) => {
    dispatch(removeFromCart(itemId));
    toast.error(`${itemName} removed from cart`, {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  const handlePlaceOrder = async () => {
    if (!customerName.trim()) {
      toast.error('Please enter your name', {
        position: 'bottom-right',
        duration: 2000,
      });
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty', {
        position: 'bottom-right',
        duration: 2000,
      });
      return;
    }

    setIsPlacingOrder(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      dispatch(
        placeOrder({
          items,
          totalAmount: total,
          customerName: customerName.trim(),
          orderType,
        })
      );

      dispatch(clearCart());

      toast.success('Order placed successfully!', {
        position: 'bottom-right',
        duration: 3000,
      });

      navigate('/orders');
    } catch (error) {
      toast.error('Failed to place order. Please try again.', {
        position: 'bottom-right',
        duration: 2000,
      });
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBagIcon className="w-32 h-32 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Add some delicious items to get started!
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="btn-primary text-lg px-8 py-4"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-display flex items-center space-x-3">
          <ShoppingCart className="w-10 h-10" />
          <span>Your Cart</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-slide-up"
              >
                <div className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900 transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-bold text-xl text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-600 dark:text-primary-500">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Order Summary
              </h2>

              {/* Order Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Order Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'dine-in', label: 'Dine-In', icon: Utensils },
                    { value: 'takeout', label: 'Takeout', icon: Package },
                    { value: 'delivery', label: 'Delivery', icon: Truck },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setOrderType(type.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          orderType === type.value
                            ? 'border-primary-600 bg-primary-50 dark:bg-primary-900'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-1 text-gray-700 dark:text-gray-300" />
                        <span className="text-xs font-semibold">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer Name */}
              <div className="mb-6">
                <label
                  htmlFor="customerName"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="input-field"
                />
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-3">
                  <span>Total:</span>
                  <span className="text-primary-600 dark:text-primary-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlacingOrder ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Placing Order...</span>
                  </span>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
