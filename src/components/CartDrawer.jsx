import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from 'lucide-react';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../features/cart/cartSlice';
import toast from 'react-hot-toast';

function CartDrawer({ cartOpen, setCartOpen }) {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {
    dispatch(removeFromCart(itemId));
    toast.error(`${itemName} removed from cart`, {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast('Cart cleared', {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="w-7 h-7" />
              <span>Your Cart</span>
            </h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">
                  Your cart is empty
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Add some delicious items to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 animate-slide-up"
                  >
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-primary-600 font-bold mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => dispatch(decrementQuantity(item.id))}
                              className="p-1 rounded bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(incrementQuantity(item.id))}
                              className="p-1 rounded bg-white hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveItem(item.id, item.name)}
                            className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">
                  Total:
                </span>
                <span className="text-3xl font-bold text-primary-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              {/* Clear Cart */}
              <button
                onClick={handleClearCart}
                className="w-full py-3 px-4 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 font-semibold transition-colors"
              >
                Clear Cart
              </button>

              {/* Checkout Button */}
              <Link
                to="/cart"
                onClick={() => setCartOpen(false)}
                className="block w-full btn-primary text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
