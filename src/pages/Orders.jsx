import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderCard from '../components/OrderCard';
import { ClipboardList, TrendingUp, Clock, CheckCircle, DollarSign, Hourglass, ChefHat, BookOpen, ArrowRight, Bell, Package, Timer } from 'lucide-react';
import Footer from '../components/Footer';

function Orders() {
  const { orders } = useSelector((state) => state.orders);
  const [filterStatus, setFilterStatus] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredOrders = orders.filter((order) => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  const statusCounts = {
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Header with Background Image */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=600&fit=crop"
            alt="Order tracking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90" />
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-10 left-20 opacity-20 animate-pulse">
          <Package className="w-16 h-16 text-blue-400" />
        </div>
        <div className="absolute bottom-10 right-20 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Clock className="w-16 h-16 text-purple-400" />
        </div>
        <div className="absolute top-1/2 left-10 opacity-20 animate-bounce">
          <Bell className="w-12 h-12 text-yellow-400" />
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Timer className="w-5 h-5 text-cyan-400" />
              <span>Real-Time Tracking</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display flex items-center justify-center space-x-4 drop-shadow-2xl">
              <ClipboardList className="w-14 h-14" />
              <span>Order Tracking</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Stay updated with real-time information on all your orders
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <Package className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <p className="text-3xl font-bold text-white">{statusCounts.all}</p>
                <p className="text-xs text-white/70 font-medium">Total Orders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <Hourglass className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <p className="text-3xl font-bold text-white">{statusCounts.pending}</p>
                <p className="text-xs text-white/70 font-medium">Pending</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <ChefHat className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <p className="text-3xl font-bold text-white">{statusCounts.preparing}</p>
                <p className="text-xs text-white/70 font-medium">Preparing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <p className="text-3xl font-bold text-white">{statusCounts.completed}</p>
                <p className="text-xs text-white/70 font-medium">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white/60 rotate-90" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Detailed Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-down">
          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="w-7 h-7 text-white" />
                </div>
                <TrendingUp className="w-12 h-12 text-blue-200 dark:text-blue-900 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">Total Orders</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{statusCounts.all}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">All time</p>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-500 to-yellow-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <Hourglass className="w-12 h-12 text-yellow-200 dark:text-yellow-900 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">Pending</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{statusCounts.pending}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Waiting to be prepared</p>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-green-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <CheckCircle className="w-12 h-12 text-green-200 dark:text-green-900 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">Completed</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{statusCounts.completed}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Successfully delivered</p>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <TrendingUp className="w-12 h-12 text-purple-200 dark:text-purple-900 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">Total Revenue</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">${totalRevenue.toFixed(2)}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Avg: ${avgOrderValue.toFixed(2)}/order</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <Package className="w-5 h-5" />
              <span>Filter Orders</span>
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredOrders.length} of {orders.length} orders
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'all', label: 'All Orders', color: 'from-gray-600 to-gray-700', bgColor: 'bg-gray-100 dark:bg-gray-700', hoverBg: 'hover:bg-gray-200 dark:hover:bg-gray-600', icon: ClipboardList },
              { key: 'pending', label: 'Pending', color: 'from-yellow-500 to-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30', hoverBg: 'hover:bg-yellow-200 dark:hover:bg-yellow-800', icon: Hourglass },
              { key: 'preparing', label: 'Preparing', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30', hoverBg: 'hover:bg-blue-200 dark:hover:bg-blue-800', icon: ChefHat },
              { key: 'completed', label: 'Completed', color: 'from-green-500 to-green-600', bgColor: 'bg-green-100 dark:bg-green-900/30', hoverBg: 'hover:bg-green-200 dark:hover:bg-green-800', icon: CheckCircle },
            ].map((status) => {
              const Icon = status.icon;
              const isActive = filterStatus === status.key;
              return (
                <button
                  key={status.key}
                  onClick={() => setFilterStatus(status.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                    isActive
                      ? `bg-gradient-to-r ${status.color} text-white shadow-lg scale-105`
                      : `${status.bgColor} text-gray-700 dark:text-gray-300 ${status.hoverBg} hover:scale-105`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{status.label}</span>
                  <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                    isActive ? 'bg-white/30' : 'bg-white/50 dark:bg-gray-600'
                  }`}>
                    {statusCounts[status.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-16 text-center shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="w-16 h-16 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 font-display">
              No orders found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
              {filterStatus === 'all'
                ? 'Place your first order to get started!'
                : `No ${filterStatus} orders`}
            </p>
            {filterStatus === 'all' && (
              <a
                href="/menu"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Package className="w-6 h-6" />
                <span>Browse Menu</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: '600ms',
                  animationFillMode: 'both',
                }}
              >
                <OrderCard order={order} />
              </div>
            ))}
          </div>
        )}

        {/* Order Status Guide */}
        <div className="relative mt-12 overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=400&fit=crop"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Content */}
          <div className="relative bg-white dark:bg-gray-800 p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-display flex items-center justify-center space-x-3">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span>Order Status Guide</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-200 dark:border-yellow-900/50">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Pending</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Your order has been received and is waiting to be prepared by our kitchen team
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200 dark:border-blue-900/50">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Preparing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Our expert chefs are preparing your meal with fresh, premium ingredients
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200 dark:border-green-900/50">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Completed</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Your delicious order is ready for pickup or already out for delivery!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
